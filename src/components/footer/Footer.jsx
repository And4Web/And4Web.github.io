import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-container">
          <div className="logo"></div>
          <div className="menu-container">
            <div className="menu-column">
              <div className="menu">support</div>
              <div className="menu">about us</div>
              <div className="menu">privacy policy</div>
            </div>

            <div className="menu-column">
              <div className="menu">terms & conditions</div>
              <div className="menu">return & refund policy</div>
              <div className="menu">shipping & delivery policy</div>
            </div>
          </div>
        </div>
        <p className="copyright">
          sea basket | all rights reserved | 2021 copyright
        </p>
      </div>
    </div>
  );
}
