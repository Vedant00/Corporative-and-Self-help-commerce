import React from "react";


function OrderPage(props){
  
    return <div>
        <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">OrderId</th>
                <th scope="col">Delivery Date</th>
                <th scope="col">Delivery Type</th>
                <th scope="col">Order Total</th>
                <th scope="col">Order Status</th>
                <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
    </div>
}



export default OrderPage;
