import React from "react";

function Order(props) {
  const columnAtrributes = [
    "OrderId",
    "Delivery",
    "Delivery Type",
    "Order Total",
    "Order Status",
    "Details",
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
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Order;
