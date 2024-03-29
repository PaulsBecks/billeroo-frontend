import React from "react";

import "./Landing.css";
import { Button, Card } from "semantic-ui-react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import { useGA } from "../../hooks";
import BlogCard from "../../components/BlogCard";
import { blogEntries } from "../../constants";

export default function LandingPage() {
  useGA();
  const history = useHistory();
  const openNewInvoice = () => {
    history.push("/invoices/new");
  };
  return (
    <div>
      <div className="invoice-app-container">
        <div className="billeroo-landing-page">
          <div className="billeroo-title-section">
            <div className="billeroo-title-section-text">
              <h1 className="billeroo-title-section-text-title">
                Rechnungen anlegen und verwalten
              </h1>
              <p className="billeroo-title-section-text-text ">
                Erstelle schnell und einfach Rechnungen für deinen Verlag.
                Behalte den Überblick deiner bereits angelegte Rechnungen auf
                allen Geräten.
                <br />
                Bitte nutze diese Seite nur mit der Erlaubnis des erstellers.
              </p>
              <Button
                content="Rechnung erstellen"
                secondary
                onClick={openNewInvoice}
              />
            </div>
            <div className="billeroo-title-section-image">
              <img
                src="/img/invoice-example.png"
                alt="Beispiel Rechnung von Billeroo"
              />
            </div>
          </div>
          <div className="billeroo-reference-section">
            <div className="billeroo-reference-section-text">
              <h2 className="billeroo-reference-section-text-title">
                Diese Unternehmen arbeiten bereits mit uns
              </h2>
            </div>
            <div className="billeroo-reference-section-images">
              <img
                src="/img/findling-logo.png"
                className="billeroo-reference-section-images-logo"
                alt="Logo des Findling-Verlags"
              />
            </div>
          </div>
          <div className="billeroo-added-value-section billeroo-alternate-section">
            <div className="billeroo-added-value-section-text">
              <h1 className="billeroo-added-value-section-text-title">
                Billeroo erleichtert die ...
              </h1>
            </div>
            <div className="billeroo-added-value-section-values">
              <div className="billeroo-added-value-section-value">
                <div className="billeroo-added-value-section-icon-wrapper">
                  <img
                    src="/img/undraw_Calculator_0evy.png"
                    alt="Ein Mann steht neben einem überlebensgroßen Taschenrechner."
                  />
                </div>
                <div className="billeroo-added-value-section-text-wrapper">
                  <h2>Kalkulation</h2>
                  <p>
                    Billeroo rechnet aus allen Angaben, wie Preisen, Rabatten
                    oder der Mehrwertsteuer direkt die Netto- und Bruttobeträge
                    aus.
                  </p>
                </div>
              </div>
              <div className="billeroo-added-value-section-value">
                <div className="billeroo-added-value-section-text-wrapper">
                  <h2>Übersicht</h2>
                  <p>
                    Alle Daten auf einen Blick. Rechnungen, Kunden und Artikel
                    findest du gut sortiert in Listen, um deine Arbeit zu
                    erleichtern.
                  </p>
                </div>
                <div className="billeroo-added-value-section-icon-wrapper">
                  <img
                    src="/img/undraw_online_organizer_ofxm.png"
                    alt="Eine Frau sitzt auf einem Browser mit dem andere Webbrowser verknüpft sind."
                  />
                </div>
              </div>
              <div className="billeroo-added-value-section-value">
                <div className="billeroo-added-value-section-icon-wrapper">
                  <img
                    src="/img/undraw_work_together_h63l.png"
                    alt="Einige Leute arbeiten zusammen an einer Webseite."
                  />
                </div>
                <div className="billeroo-added-value-section-text-wrapper">
                  <h2>Kooperation</h2>
                  <p>
                    Greife von überall auf deine Daten zu und teile sie mit
                    deinen Kollegen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="billeroo-call-to-action-section">
            <Button
              onClick={openNewInvoice}
              content="Erste Rechnung erstellen"
              secondary
              size="huge"
            />
          </div>
          <div className="billeroo-blog-section">
            <h2 className="billeroo-blog-section-title">Blogeinträge</h2>
            <div className="billeroo-blog-section-entries">
              <Card.Group centered>
                {blogEntries.map((be) => (
                  <BlogCard blogEntry={be} key={be.id} />
                ))}
              </Card.Group>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
