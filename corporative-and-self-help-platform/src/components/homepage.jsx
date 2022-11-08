import React from "react";

function Homepage(props){
    const names=['Naruto', 'Sauske', 'Sakaru', 'Kiba', 'Shino', 'Hinata', 'Shikamaru', 'Ino'];
    
    return <div>
        <ul>
            { names.map((name)=>{
                return <li>{name}</li>
            })}
        </ul>
    </div>
}
export default Homepage;