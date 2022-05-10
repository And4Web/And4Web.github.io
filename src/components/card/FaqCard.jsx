import React from "react";
import "./faqCard.css";

export default function FaqCard({ ...props }) {
  const { cardTitle, cardDesc } = props;
  return (
    <div>
      <div className="card">
        <div className="firstLine">
          <h3>{cardTitle}</h3>
          <i class="fa-solid fa-circle-chevron-down dropdown"></i>
        </div>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
}
