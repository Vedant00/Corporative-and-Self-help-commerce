import React from "react";
import Card from "./Cards";
import products from "./data";
const names=['Naruto', 'Sauske', 'Sakaru', 'Kiba', 'Shino', 'Hinata', 'Shikamaru', 'Ino'];

function Homepage(props){
    return <div className="homepage">
                <div className="card-container">
                { products.map((data)=>{
                    
                return  <Card product={data.name} description={data.details} price={data.price} unit={data.unit} package={data.package}/>

            })}
             </div>
        </div>
    }
export default Homepage;