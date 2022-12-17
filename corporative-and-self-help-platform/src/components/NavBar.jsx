import React from "react";

function NavBar(props) {
  return (
    <div style={{background: '#F9F9F9'}}>
      <nav className="navbar navbar-expand-lg " style={{background: '#F9F9F9'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="\">
           Innobytes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="\">
                Home
              </a>
              <li className="nav-item dropdown" >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Link
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another link
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      A third link
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link" href="\offers">
                Offers
              </a>
              <a className="nav-link" href="\order">
                Order
              </a>
              <a className="nav-link" href="\previousOrders">
                OrderPage
              </a>
              <a className="nav-link" href="\login">
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
