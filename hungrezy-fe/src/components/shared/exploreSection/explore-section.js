import React from "react";
import ExploreDataObject from "./explore-dataObject/explore-dataObject";
import "./explore-section.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreDataObject restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;