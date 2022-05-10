import React from "react";
import "./topicsCard.css";

export default function TopicsCard({ ...props }) {
  const { cardTitle, cardDesc, imageUrl } = props;
  return (
    <div>
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="topic">
          <h3>{cardTitle}</h3>
          <p>{cardDesc}</p>
        </div>
        <div className="more">
          <p>read more</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
}
