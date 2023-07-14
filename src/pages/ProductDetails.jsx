import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export default function ProductDetails() {
  useParams();
  const productDetail = useLoaderData();

  return (
    <div className="product-details">
      <Link className="btn btn-danger" to="/product">
        Go Back
      </Link>
      <h1>Product Detail</h1>
      <div className="product">
        <div className="product-img">
          <img src={productDetail.image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body product-description">
          <div className="card-text my-3">
            <h4>Product Name:</h4> <p>{productDetail.title}</p>
          </div>
          <div className="card-text">
            <h4>Description: </h4>
            <p>{productDetail.description}</p>
          </div>
          <div className="card-text">
            <h4>Category: </h4>
            <p>{productDetail.category}</p>
          </div>
          <div className="card-text">
            <h4>Rating: </h4>
            <p>
              {" "}
              {productDetail.rating.rate} / 5 form {productDetail.rating.count}{" "}
              users
            </p>
          </div>
          <div className="card-text">
            <h4>Price: </h4> <p> ${productDetail.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// loader function
export const loadDetailsFunction = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
};
