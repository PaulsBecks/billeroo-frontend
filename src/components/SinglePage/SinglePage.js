import React from "react";
import Page from "../Page";
import "./SinglePage.css";
import { formatDate, formatPrice, parsePrice } from "../../services";
import { Button } from "semantic-ui-react";
import SinglePageOverlay from "./SinglePageOverlay";
import roundPrice from "../../services/roundPrice";

const SinglePage = ({
  id,
  invoice: {
    orderDate,
    invoiceDate,
    shippingDate,
    invoiceNumber,
    porto,
    customer,
    articles = [],
    company,
    shippingDisabled,
    services,
  },
  setFormSelected,
}) => {
  const [articlesNetPrice, articleUSTSum, articlesPortoVat] = articles
    .map(({ price, toBePayed, vat }) => {
      const totalPrice = parsePrice(price) * toBePayed;
      const totalPriceWithDiscount =
        totalPrice * ((100 - customer.discount) / 100);
      const net = roundPrice(
        totalPriceWithDiscount / (1 + parsePrice(vat) / 100)
      );
      const ust = roundPrice(totalPriceWithDiscount - net);
      return [net, ust, vat];
    })
    .reduce(
      ([netSum, uSTSum, maxVat], [net, ust, vat]) => [
        netSum + net,
        uSTSum + ust,
        vat > maxVat ? vat : maxVat,
      ],
      [0, 0, 0]
    );

  const servicesPrice = services
    .map(({ price }) => {
      return parsePrice(price);
    })
    .reduce((total, x) => x + total, 0);

  const servicesPriceWithDiscount =
    (servicesPrice * (100 - customer.discount)) / 100;

  const servicesNetPrice = roundPrice(
    servicesPriceWithDiscount / ((100 + customer.ust) / 100)
  );
  const serviceUSTSum = roundPrice(
    servicesPriceWithDiscount - servicesNetPrice
  );

  const uSTSum = articleUSTSum + serviceUSTSum;
  const netPrice = articlesNetPrice + servicesNetPrice;
  if (!customer) {
    return null;
  }

  return (
    <Page singleMode={true} id={id}>
      <div
        className="invoice-folding-line"
        style={
          company.companyColor ? { borderColor: company.companyColor } : {}
        }
      />
      <div className="invoice-page-pdf">
        <div className="invoice-page-top">
          <SinglePageOverlay
            onClick={() => setFormSelected(["general", "logo"])}
          >
            <div className="invoice-page-image-wrapper">
              <img className="invoice-header-company-logo" src={company.logo} />
            </div>
          </SinglePageOverlay>
          <div className="invoice-header">
            <div className="invoice-header-customer-address">
              <SinglePageOverlay
                wrapperClass="invoice-header-customer-company"
                onClick={() =>
                  setFormSelected(["general", "aboveClientInvoiceAddress"])
                }
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: company.aboveClientInvoiceAddress,
                  }}
                />
              </SinglePageOverlay>
              {customer ? (
                <SinglePageOverlay
                  wrapperClass="invoice-header-customer-info"
                  onClick={() => setFormSelected(["customer"])}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: customer.invoiceAddress,
                    }}
                  />
                </SinglePageOverlay>
              ) : (
                <Button>Kunde hinzufügen</Button>
              )}
            </div>
            <SinglePageOverlay
              wrapperClass="invoice-header-company-info"
              onClick={() => setFormSelected(["general", "contactInformation"])}
            >
              <div
                dangerouslySetInnerHTML={{ __html: company.contactInformation }}
              ></div>
            </SinglePageOverlay>
          </div>
        </div>
        <div className="invoice-body">
          <div className="invoice-body-top">
            <div className="invoice-subject">
              <SinglePageOverlay
                wrapperClass="invoice-subject-and-below"
                onClick={() => setFormSelected(["general", "subjectAndBelow"])}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: company.subjectAndBelow }}
                />
              </SinglePageOverlay>
              <div className="invoice-body-subject-key-values">
                <div className="invoice-body-subject-keys">
                  <div className="invoice-body-order-date">
                    <p>
                      <b>Bestelldatum:</b>
                    </p>
                  </div>
                  {!shippingDisabled && (
                    <div className="invoice-body-send-date">
                      <p>
                        <b>Versanddatum:</b>
                      </p>
                    </div>
                  )}
                  {!shippingDisabled && (
                    <div className="invoice-body-send-to">
                      <p>
                        <b>Versand an:</b>
                      </p>
                    </div>
                  )}
                </div>
                <div className="invoice-body-subject-values">
                  <SinglePageOverlay
                    onClick={() => setFormSelected(["general", "orderDate"])}
                    wrapperClass="invoice-body-order-date"
                  >
                    <p>
                      <b>{formatDate(orderDate)}</b>
                    </p>
                  </SinglePageOverlay>
                  {!shippingDisabled && (
                    <SinglePageOverlay
                      onClick={() =>
                        setFormSelected(["general", "shippingDate"])
                      }
                      wrapperClass="invoice-body-send-date"
                    >
                      <p>
                        <b>{formatDate(shippingDate)}</b>
                      </p>
                    </SinglePageOverlay>
                  )}
                  {!shippingDisabled && (
                    <SinglePageOverlay
                      onClick={() => setFormSelected(["customer"])}
                    >
                      <div
                        className="invoice-body-send-to"
                        dangerouslySetInnerHTML={{
                          __html: customer.shippingAddress,
                        }}
                      ></div>
                    </SinglePageOverlay>
                  )}
                </div>
              </div>
            </div>
            <div className="invoice-body-invoice-date">
              <SinglePageOverlay
                onClick={() => setFormSelected(["general", "invoiceDate"])}
              >
                <div className="invoice-body-top-right">
                  <p>
                    Rechnungsdatum: <b>{formatDate(invoiceDate)}</b>
                  </p>
                </div>
              </SinglePageOverlay>
              <SinglePageOverlay
                onClick={() => setFormSelected(["general", "invoiceNumber"])}
              >
                <div className="invoice-body-invoice-nr">
                  <p>
                    Rechnungsnummer: <b>{invoiceNumber}</b>
                  </p>
                </div>
              </SinglePageOverlay>
              <div className="invoice-body-invoice-hint">
                <p>(Bitte bei Zahlung angeben)</p>
              </div>
            </div>
          </div>
          <div className="invoice-body-bottom">
            <div className="invoice-body-article-wrapper">
              {articles.map(
                ({ toBePayed, toBeSend, price, name, isbn, vat }) => {
                  const multiple = parseInt(toBePayed) > 1;
                  const totalPrice = parsePrice(price) * toBePayed;
                  const totalPriceWithDiscount =
                    totalPrice - totalPrice * (customer.discount / 100);
                  const net =
                    totalPriceWithDiscount / (1 + parsePrice(vat) / 100);
                  return (
                    <div className="invoice-body-article">
                      <div className="invoice-body-article-left">
                        <div className="invoice-body-article-description">
                          <div>
                            <b>
                              {toBePayed !== toBeSend && toBeSend + "/"}
                              {toBePayed} Exemplar
                              {multiple && "e"}
                            </b>
                          </div>
                          <div className="invoice-body-article-title">
                            <b>{name && `„${name}“,`}</b>
                          </div>
                          <div className="invoice-body-article-title">
                            {isbn && `${isbn},`}
                          </div>
                        </div>
                        <div className="invoice-body-artivle-price-calc">
                          <div>{`Preis ${multiple ? "je" : ""} ${price} €${
                            multiple ? ` = ${formatPrice(totalPrice)} €` : ""
                          }${
                            customer.discount > 0
                              ? `, abzüglich ${
                                  customer.discount
                                } % Rabatt = ${formatPrice(
                                  totalPriceWithDiscount
                                )} €`
                              : ""
                          } (beinhaltet ${vat} % MwST = ${formatPrice(
                            totalPriceWithDiscount - net
                          )} €)`}</div>
                        </div>
                      </div>
                      <div className="invoice-body-article-price">
                        <b>
                          {articles.length + services.length > 1 &&
                            `${formatPrice(net)} €`}
                        </b>
                      </div>
                    </div>
                  );
                }
              )}
              {services.map((service) => {
                const withDiscount =
                  (parsePrice(service.price) * (100 - customer.discount)) / 100;
                const net =
                  withDiscount / ((100 + parsePrice(customer.ust)) / 100);
                return (
                  <div className="billeroo-invoice-body-service">
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: service.description,
                        }}
                      />
                      <div>{`Preis ${service.price} €${
                        customer.discount > 0
                          ? `, abzüglich ${
                              customer.discount
                            } % Rabatt = ${formatPrice(withDiscount)} €`
                          : ""
                      } (beinhaltet ${customer.ust} % MwST = ${formatPrice(
                        withDiscount - net
                      )} €)`}</div>
                    </div>
                    <div className="invoice-body-service-price">
                      <b>
                        {articles.length + services.length > 1 &&
                          `${formatPrice(net)} €`}
                      </b>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="invoice-body-price-calculation">
              <div className="invoice-body-price-calculation-label-and-number">
                <p>Netto</p>
                <p>
                  <b>{formatPrice(netPrice)} €</b>
                </p>
              </div>
              {!shippingDisabled && (
                <SinglePageOverlay
                  onClick={() => setFormSelected(["general", "porto"])}
                >
                  <div className="invoice-body-price-calculation-label-and-number">
                    <p>Versandkosten (Netto)</p>
                    <p>
                      <b>{formatPrice(porto)} €</b>
                    </p>
                  </div>
                </SinglePageOverlay>
              )}
              <SinglePageOverlay onClick={() => setFormSelected(["customer"])}>
                <div className="invoice-body-price-calculation-label-and-number">
                  <p>{`Mehrwertsteuer`}</p>
                  <p>
                    <b>
                      {formatPrice(
                        uSTSum +
                          ((shippingDisabled ? 0 : parsePrice(porto)) *
                            parsePrice(articlesPortoVat)) /
                            100
                      )}{" "}
                      €
                    </b>
                  </p>
                </div>
              </SinglePageOverlay>
            </div>
            <div className="invoice-body-price">
              <p>Rechnungsbetrag</p>
              <p>
                <b>
                  {formatPrice(
                    netPrice +
                      uSTSum +
                      (shippingDisabled
                        ? 0
                        : parsePrice(porto) *
                          (1 + parsePrice(articlesPortoVat) / 100))
                  )}{" "}
                  €
                </b>
              </p>
            </div>
            <SinglePageOverlay
              onClick={() => setFormSelected(["general", "invoiceText"])}
              wrapperClass="invoice-body-final-text"
            >
              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: company.invoiceText }}
                ></p>
              </div>
            </SinglePageOverlay>
          </div>
        </div>
        <SinglePageOverlay
          onClick={() => setFormSelected(["general", "footerText"])}
        >
          <div
            className="invoice-footer"
            style={
              company.companyColor ? { borderColor: company.companyColor } : {}
            }
            dangerouslySetInnerHTML={{ __html: company.footerText }}
          ></div>
        </SinglePageOverlay>
      </div>
    </Page>
  );
};

export default SinglePage;
