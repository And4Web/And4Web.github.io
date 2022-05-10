import React from "react";
import "./articleCard.css";

export default function ArticleCard({ ...props }) {
  const { cardTitle, cardDesc } = props;
  return (
    <div>
      <div className="card">
        <div className="firstLine">
          <h3>{cardTitle}</h3>
          <i class="fa-solid fa-circle-chevron-down more"></i>
        </div>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
}
