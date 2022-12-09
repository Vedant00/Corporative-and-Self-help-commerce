
import React, { useState } from "react";

function Card(props) {

  const [addToCart, setCart]=useState("Add to Cart");
  
  

  const temp = props.package;
  const [weight, setWeight] = useState("Weight");
  function newWeight(weightin) {
    setWeight(weightin + props.unit);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image sticky-top">
          <img
            style={{ width: "100px", objectFit: "fit" }}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div
          style={{
            width: "0.5px",
            height: "220px",
            backgroundColor: "black",
            margin: "20px 10px 20px 20px",
          }}
          className="sticky-bottom "
        ></div>
        <div className="card-items">
          <p>{props.product}</p>
          <p>{props.description}</p>
          <p>
            Price : {props.price} ₹/ {props.unit}
          </p>

          <div class="dropdown">
            <button
              className="cart-btn btn btn-secondary btn-sm dropdown-toggle w-50 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {weight}
            </button>
            <ul class="dropdown-menu">
              {temp.map((pack) => {
                return (
                  <li>
                    <div
                      class="dropdown-item"
                      onClick={() => {
                        newWeight(pack);
                      }}
                      value="1kg"
                    >
                      {pack} {props.unit}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="quantity">
            <p>Quantity :</p>
            <input className="quantity-amt" placeholder="1" />
          </div>
          <button type="button" class="add-cart btn btn-primary" onClick={(addToCart)=>{
            cart.push(props);
            setCart("Go To Cart");
          }}>
            {addToCart}
          </button>
        </div>
      </div>
    </div>
  );
}

const cart=[
  {
      name:"demo object",
  }
  ];
  
export {
  cart,
  Card
}
