import React,{useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";



function SignUp(props) {

  //useHistory is useNavigate in react-router-dom v6
  const navigate = useNavigate();
  const [user,setUser]= useState({
    fname:"",lname:"",email:"",password:"",cpassword:""
  });

  let name, value;

  const handleChange= (e)=>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  const postData = async (e)=>{
    e.preventDefault();
    const {fname,lname,email,password,cpassword}=user;

    const res = await fetch ("/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fname,lname,email,password,cpassword
      })
    })

    const data = await res.json();

      if(data.status === 422 || !data){
      window.alert(data.error);
      console.log(data.error);
    }else{
      window.alert(data.message)
      console.log(data.message);
      navigate("/Login");
      //"/login" or "/signin"
    }
   

    
    
  }



  return (
    <div className="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
            <h1 class="mb-3 text-center">Create a new account</h1>
            <form class="mb-3" method="POST">
              <div class="row">
                <div class="form-group col-12 col-sm-6">
                  <label for="firstName">First name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    id="firstName"
                    autoComplete="off"
                    value={user.fname}
                    name="fname"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group col-12 col-sm-6">
                  <label for="lastName">Last name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    id="lastName"
                    autoComplete="off"
                    value={user.lname}
                    name="lname"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="example@example.com"
                  id="email"
                  required="true"
                  autoComplete="off"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  required="true"
                  autoComplete="off"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label for="password">Re-Enter Password:</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  required="true"
                  autoComplete="off"
                    value={user.cpassword}
                    name="cpassword"
                    onChange={handleChange}
                />
              </div>
              <br></br>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-block mb-3" value="Create account" onClick={postData}>
                  Create account
                </button>
              </div>
              <div class="alert alert-info small" role="alert">
                By clicking above you agree to our
                <a href="\termsandcondition" class="alert-link">
                  Terms &amp; Conditions
                </a>{" "}
                and our{" "}
                <a href="privacypolicy" class="alert-link">
                  Privacy Policy
                </a>
                .
              </div>
              <div class="text-center">
                <p>Or ...</p>
                <a href="\login" class="btn btn-success">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
