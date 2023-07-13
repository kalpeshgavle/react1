import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  return (
    <div className="product-page">
      <h1>Products Page</h1>
      <div className="product-items">
        {product.map((product) => (
          <div className="card" key={product.id} style={{ width: "18rem" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">{product.title}</h5>
              <p className="card-text text-truncate">{product.description}</p>
              <p className="card-text">Price: {product.price}</p>
              <Link className="btn btn-success" to={product.id.toString()}>
                Get details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// loader function

export const loaderFunction = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");

  if (!response.ok) {
    throw Error("Products not found");
  }
  return response.json();
};
