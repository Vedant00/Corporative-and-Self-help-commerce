import React from "react";

function Login(props){
    
    return <div className="log-in-box">
              <div className="log-in">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Email address"/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                </div>
                <input class="btn btn-primary" type="Submit" value="Log In"></input>
                <a href="" align="left" style={{textDecoration:"none"}}>Forgot Password/Username?</a>
              <div style={{height:"0.7px",width:"250px",backgroundColor:"rgb(191, 210, 228",marginBottom:"8px" }}></div>
              <div className="log-in-with" >
                <p className="log-in-with-txt">Log-In with:  <i class="fa-brands fa-google"></i> <i class="fa-brands fa-facebook"></i> </p>
              </div>
              <p>Or ...</p>
              <a href="\signup" style={{textDecoration:"none"}} >Create New Account</a>
              <div style={{height:"0.7px",width:"250px",backgroundColor:"rgb(191, 210, 228",marginBottom:"8px" }}></div>

      </div>
       
    </div>
}

export default Login;