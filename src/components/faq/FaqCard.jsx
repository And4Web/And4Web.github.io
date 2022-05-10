import React, { useState } from "react";
import "./faqCard.css";

export default function FaqCard({ ...props }) {
  const [show, setShow] = useState(false);
  const { cardTitle, cardDesc } = props;
  return (
    <div>
      <div className="card">
        <div className="firstLine">
          <h3>{cardTitle}</h3>
          <i
            onClick={() => setShow(!show)}
            className={`dropdown fa-solid  ${
              show ? "fa-angle-up" : "fa-angle-down"
            }`}
          ></i>
        </div>
        {show && <p>{cardDesc}</p>}
      </div>
    </div>
  );
}

// "fa-solid fa-angle-down dropdown"
