import React from "react";
import "./card.css";

export default function Card({ ...props }) {
  const { image, title } = props;
  return (
    <>
      <div className="category">
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </div>
    </>
  );
}
