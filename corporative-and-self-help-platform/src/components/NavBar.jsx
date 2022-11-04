import React from "react";


function NavBar(props){
  
    return <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https//www.google.com">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="https//www.google.com">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="https//www.google.com">Features</a>
                <a class="nav-item nav-link" href="https//www.google.com">Pricing</a>
                <a class="nav-item nav-link disabled" href="https//www.google.com" align="right">SignIn</a>
              </div>
            </div>
          </nav>
    </div>
   
   
}



export default NavBar;
