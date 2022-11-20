import React, { useState } from "react";
import logo from "./favicon.ico";

<<<<<<< HEAD
function Card(props) {
  const temp = props.package;
  const [weight, setWeight] = useState("Weight");
  function newWeight(weightin) {
    setWeight(weightin);
  }
  console.log(props.image);
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
            height: "270px",
            backgroundColor: "black",
            margin: "20px 10px 20px 20px",
          }}
          className="sticky-top"
        ></div>
=======

function Card(props){
    const temp =props.package;
    const [weight,setWeight]=useState("Weight");
    function newWeight(weightin){
        setWeight(weightin+" Kg");
    }
    return <div className="card-container">
         <div className="card">
        <div className="card-image sticky-top"><img style={{width:"100px", objectFit:"fit"}} src={require('./favicon.ico') } /></div>
        <div style={{width:"0.5px", height:"270px",backgroundColor:"black",margin:"20px 10px 20px 20px"}} className="sticky-top"></div>
>>>>>>> f2dff8c5b876fde26b3fa592d6e80245a073ae2e
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
            <ul class="dropdown-menu">
<<<<<<< HEAD
              {temp.map((pack) => {
                return (
                  <li>
                    <div
                      class="dropdown-item"
                      onClick={() => {
                        newWeight({ pack });
                      }}
                    >
                      {pack} KG
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="quantity">
=======
            
            {temp.map((pack)=>{
                return<li><div class="dropdown-item" onClick={()=>{newWeight(pack)}} value="1kg">{pack} KG</div></li>
            })}
             </ul>
            </div>
            <div className="quantity">
>>>>>>> f2dff8c5b876fde26b3fa592d6e80245a073ae2e
            <p>Quantity :</p>
            <input className="quantity-amt" placeholder="1" />
          </div>
          <button type="button" class="add-cart btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
