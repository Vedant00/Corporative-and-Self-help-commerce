import React from "react";
import Card from "./Cards";

function Homepage(props){
<<<<<<< HEAD
    return <div className="homepage">
        <Card product="Rice" description="This is rice" price="80 ₹/kg"/>
=======
    const names=['Naruto', 'Sauske', 'Sakaru', 'Kiba', 'Shino', 'Hinata', 'Shikamaru', 'Ino'];
    
    return <div>
        <ul>
            { names.map((name)=>{
                return <li>{name}</li>
            })}
        </ul>
>>>>>>> 8b9f2b753b2bc934f1d07afb2798a637358ecdc8
    </div>
}
export default Homepage;