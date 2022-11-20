import React from "react";
import Card from "./Cards";

const names=['Naruto', 'Sauske', 'Sakaru', 'Kiba', 'Shino', 'Hinata', 'Shikamaru', 'Ino'];

function Homepage(props){
    return <div className="homepage">
                <div className="card-container">
                { names.map((name)=>{
                return  <Card product={name} description=" data" price="80 ₹/kg"/>

            })}
             </div>
        </div>
    }
export default Homepage;