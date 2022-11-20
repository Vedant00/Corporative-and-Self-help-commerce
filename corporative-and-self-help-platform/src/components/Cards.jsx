import React,{useState} from "react";
import logo from "./favicon.ico";


function Card(props){
    const temp =props.package;
    const [weight,setWeight]=useState("Weight");
    function newWeight(weightin){
        setWeight(weightin);
    }
    return <div className="card-container">
         <div className="card">
        <div className="card-image sticky-top"><img style={{width:"100px", objectFit:"fit"}} src={require('./favicon.ico') } /></div>
        <div style={{width:"0.5px", height:"270px",backgroundColor:"black",margin:"20px 10px 20px 20px"}} className="sticky-top"></div>
        <div className="card-items">
            <p>{props.product}</p>
            <p>{props.description}</p>
            <p>Price : {props.price} ₹/ {props.unit}</p>

          
        <div class="dropdown">
         <button  className="cart-btn btn btn-secondary btn-sm dropdown-toggle w-50 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
               {weight} Kg
            </button>
            <ul class="dropdown-menu">
            
            {temp.map((pack)=>{
                return<li><div class="dropdown-item" onClick={()=>{newWeight(pack)}} value="1kg">{pack} KG</div></li>
            })}
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