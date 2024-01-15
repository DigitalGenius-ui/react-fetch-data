import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { title, image, description, id } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div onClick={handleClick} className="product">
      <img src={image} alt="product-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Product;
