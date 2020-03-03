import React, { useState } from "react";
import { useLocalStorage } from "../hooks";

import { Button, Icon, Table } from "semantic-ui-react";
import Invoice from "./Invoice";
import { invoice as invoiceSceleton, invoice } from "../sceletons";
import { formatDate } from "../services";

export default () => {
  const [invoices, setInvoices] = useLocalStorage("invoices", []);
  const [invoiceSelected, setInvoiceSelected] = useState();

  if (invoiceSelected) {
    return (
      <Invoice invoice={invoiceSelected} setInvoice={setInvoiceSelected} />
    );
  }

  return (
    <div className="invoice-tab-container">
      <Button
        onClick={() =>
          setInvoiceSelected({ ...invoiceSceleton, id: invoices.length })
        }
        primary
      >
        Neue Rechnung
      </Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Rechnungsnummer</Table.HeaderCell>
            <Table.HeaderCell>Rechnungsdatum</Table.HeaderCell>
            <Table.HeaderCell>Kunde</Table.HeaderCell>
            <Table.HeaderCell>Artikel</Table.HeaderCell>
            <Table.HeaderCell>Gesamtpreis</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {invoices.map(i => (
            <Table.Row>
              <Table.Cell>{i.invoiceNumber}</Table.Cell>
              <Table.Cell>{formatDate(i.invoiceDate)}</Table.Cell>
              <Table.Cell>{i.customer.name}</Table.Cell>
              <Table.Cell>
                {i.articles.map(a => (
                  <p>{a.name}</p>
                ))}
              </Table.Cell>
              <Table.Cell>{i.totalPrice.toFixed(2)}€</Table.Cell>
              <Table.Cell>
                <Button icon onClick={() => setInvoiceSelected(i)}>
                  <Icon name="eye"></Icon>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};