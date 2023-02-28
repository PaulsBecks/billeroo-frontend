import React from "react";
import { Icon } from "semantic-ui-react";

import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="billeroo-footer">
      <div className="billeroo-footer-row">
        <div className="billeroo-footer-column">
          <div className="billeroo-footer-cell">
            <h3>Entdecke Billeroo</h3>
            <ul>
              <li>
                <Link to="/invoices/new">Rechnung erstellen</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/plans">Preise</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="billeroo-footer-row">
        <p>
          This is a private page please do not use if you do not have permission
          by the owner.
        </p>
      </div>
    </div>
  );
}
