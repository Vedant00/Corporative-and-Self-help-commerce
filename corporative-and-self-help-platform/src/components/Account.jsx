import React, {  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account(){
    const navigate = useNavigate();
    const[userData,setUserData]=useState({});

    const callAccountPage= async()=>{
        try{
            const res = await fetch('/account',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include",
            });
            
            const data = await res.json();
            setUserData(data);
            if(!res.status===200){
                const error = new Error(res.error)
                throw error;
            }

        }catch(err){
            console.log(err);
            navigate("/login");
        }
    }

    useEffect(()=>{
        callAccountPage();
    },[]);
   
    return<>
        <div className="account-container">
            <div className="account-details">
                <p>Name:</p><p>{userData.fname} {userData.lname}</p>
                <p>Email:</p><p>{userData.email}</p>
            </div>
        

        </div>
    </>
}


export default Account;