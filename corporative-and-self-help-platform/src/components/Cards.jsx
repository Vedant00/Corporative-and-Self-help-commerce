
import React, { useState } from "react";
import img from "./basket.jpg"


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
            style={{ width: "100px", height:"100px", paddingTop:"5px", alignSelf:"center" }}
            src={img}
            alt={props.name}
          />
        </div>
       
        <div className="card-items">
          <p>{props.product}</p>
          <p>{props.description}</p>
          <p>
            Price : {props.price} ₹/ {props.unit}
          </p>

          <div className="dropdown">
          <button
              className="cart-btn btn btn-secondary btn-sm dropdown-toggle w-50 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
              {weight}
            </button>
            <ul className="dropdown-menu">
              {temp.map((pack) => {
                return (
                  <li>
                    <div
                      className="dropdown-item"
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
          <button type="button" className="add-cart btn btn-primary" onClick={(addToCart)=>{
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
