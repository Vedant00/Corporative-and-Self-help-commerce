import React from "react";
import logo from "./favicon.ico";

function Card(props){
    return <div className="card">
        <div className="card-image"><img style={{width:"100px", objectFit:"fit"}} src={require('./favicon.ico') } /></div>
        <div style={{width:"0.5px", height:"210px",backgroundColor:"black",margin:"20px 10px 20px 20px"}}></div>
        <div className="card-items">
            <p>{props.product}</p>
            <p>{props.description}</p>
            <p>Price : {props.price}</p>
        </div>
    </div>
    
}

export default Card