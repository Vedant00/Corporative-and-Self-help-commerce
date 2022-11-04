import React from "react";


function Login(props){
    
    return <div className="log-in">
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="Email address"/>
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
    </div>
}

export default Login