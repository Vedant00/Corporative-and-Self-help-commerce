import React from "react";


function OrderPage(props){
    const columnAtrributes=['OrderId','Product Name','Details','Price','Weight','Quantity', 'Order Total'];
    const cart = [];
    return <div class="container container-fluid">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    { columnAtrributes.map((name)=>{
                    return <th scope="col">{name}</th>
                })}
                </tr>
            </thead>
            <tbody>
                    
            </tbody>
            </table>
    </div>
}



export default OrderPage;
