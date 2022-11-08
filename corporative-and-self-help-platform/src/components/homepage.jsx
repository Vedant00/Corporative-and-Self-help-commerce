import React from "react";
import Card from "./Cards";

const names=['Naruto', 'Sauske', 'Sakaru', 'Kiba', 'Shino', 'Hinata', 'Shikamaru', 'Ino'];

function Homepage(props){
    return <div className="homepage">
            { names.map((name)=>{
                return  <Card product={name} description="This is rice" price="80 ₹/kg"/>

            })}

    </div>
}
export default Homepage;