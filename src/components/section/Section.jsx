import React from "react";

export default function Section({ ...props }) {
  const { sectionClass, sectionTitle } = props;
  return (
    <div className={sectionClass}>
      <h3 className="mainTitle">{sectionTitle}</h3>
      {props.children}
    </div>
  );
}
