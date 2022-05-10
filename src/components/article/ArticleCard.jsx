import React from "react";
import "./articleCard.css";

export default function ArticleCard({ ...props }) {
  const { cardTitle, cardDesc } = props;
  return (
    <div>
      <div className="card">
        <div className="content">
          <h3>{cardTitle}</h3>
          <p>{cardDesc}</p>
        </div>
        <div className="more">
          <p>read more</p>
          <i class="fa-solid fa-circle-chevron-right "></i>
        </div>
      </div>
    </div>
  );
}
