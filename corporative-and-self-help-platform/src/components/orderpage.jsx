import React from "react";
import {cart} from "./Cards"

function OrderPage(props) {
  const columnAtrributes = [
    "OrderId",
    "Product Name",
    "Details",
    "Price",
    "Weight",
    "Quantity",
    "Order Total",
  ];
  return (
    <div class="container container-fluid">
      <table class="table">
        <thead class="thead-light">
          <tr>
            {columnAtrributes.map((name) => {
              return <th scope="col">{name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {cart.map((data)=>{
              return <td>
              {console.log(cart)}
                {data.name}
              </td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderPage;
