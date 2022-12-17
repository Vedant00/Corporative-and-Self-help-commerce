import React from "react";
import {Card} from "./Cards.jsx"
import products from "./data";

function Homepage(props) {
  return (
    <div className="homepage">
      <div className="card-container">
        {products.map((data) => {
          return (
            <Card
              key={data.key}
              product={data.name}
              description={data.details}
              price={data.price}
              unit={data.unit}
              package={data.package}
              // image={img}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Homepage;
