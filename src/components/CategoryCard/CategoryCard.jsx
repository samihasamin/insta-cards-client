import React from "react";
import "./CategoryCard.scss";

const CategoryCard = ({ title, image, bgColor }) => {
  return (
    <div className="category-card" style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} className="category-icon" />
      <h2>{title}</h2>
      <button className="play-btn">PLAY</button>
    </div>
  );
};

export default CategoryCard;
