import React from "react";

function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="\">
            BizzTech
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="\">
                Home
              </a>
              <a class="nav-link" href="\products">
                Products
              </a>
              <a class="nav-link" href="\offers">
                Offers
              </a>
              <a class="nav-link" href="\order">
                Order
              </a>
              <a class="nav-link" href="\previousOrders">
                OrderPage
              </a>
              <a class="nav-link" href="\login">
                Log-In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
