import React from "react";
import logo from "./favicon.ico";

function Card(props){
    return <div className="card-container">
         <div className="card">
        <div className="card-image"><img style={{width:"100px", objectFit:"fit"}} src={require('./favicon.ico') } /></div>
        <div style={{width:"0.5px", height:"210px",backgroundColor:"black",margin:"20px 10px 20px 20px"}}></div>
        <div className="card-items">
            <p>{props.product}</p>
            <p>{props.description}</p>
            <p>Price : {props.price}</p>

          
        <div class="dropdown">
         <button  className="cart-btn btn btn-secondary btn-sm dropdown-toggle w-50 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Weight
            </button>
            <ul class="dropdown-menu" >
                <li><a class="dropdown-item" href="#">1 KG</a></li>
                <li><a class="dropdown-item" href="#">2 KG</a></li>
                <li><a class="dropdown-item" href="#">5 KG</a></li>
            </ul>
            </div>
            <div className="quantity">
            <p>Quantity :</p>
            <input className="quantity-amt" placeholder="1"/>
            </div>
            <button type="button" class="add-cart btn btn-primary">Add to Cart</button>
        </div>
        </div>
       
    </div> 
    
   
    
}

export default Card