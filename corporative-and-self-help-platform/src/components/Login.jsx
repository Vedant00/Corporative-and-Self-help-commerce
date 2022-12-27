import React,{useState} from "react";
import {useNavigate} from "react-router-dom"

function Login(props){

  const navigate = useNavigate();


  const [details, setDetails]= useState({
    email:"",password:""
  })

  let name,value;
  const handleChange = (e)=>{
    name = e.target.name;
    value = e.target.value;

    setDetails({...details, [name]:value});
  }

  const postData = async (e)=>{
    e.preventDefault();
    const {email,password}=details;

    const res = await fetch ("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data = await res.json();

      if(data.status === 400 || !data){
      window.alert(data.error);
      console.log(data.error);
    }else{
      window.alert(data.message)
      console.log(data.message);
      navigate("/");
    }
   

    
    
  }
    
    return <div className="log-in-box">
              <div className="log-in">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email address" name="email" value={details.email} onChange={handleChange} autoComplete="off"/>
                    <label htmFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating" style={{paddingBottom:"20px"}}>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={details.password} onChange={handleChange} autoComplete="off"/>
                    <label htmFor="floatingPassword">Password</label>
                </div>
                <input className="btn btn-primary" type="Submit" value="Log In" onClick={postData}></input>
                <a href="" align="left" style={{textDecoration:"none", color:"#8EA32F",margin:"18px"}}>Forgot Password/Username?</a>
              <div style={{height:"0.7px",width:"250px",backgroundColor:"rgb(191, 210, 228",marginBottom:"8px" }}></div>
              <div className="log-in-with" >
                <p className="log-in-with-txt">Log-In with:  <i className="fa-brands fa-google"></i> <i className="fa-brands fa-facebook"></i> </p>
              </div>
              <p>Or ...</p>
              <a href="\signup" style={{textDecoration:"none",color:"#8EA32F"}} >Create New Account</a>
              <div style={{height:"0.7px",width:"250px",backgroundColor:"rgb(191, 210, 228",marginTop:"18px" }}></div>

      </div>
       
    </div>
}

export default Login;