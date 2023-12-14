import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
  });
  
  const{name,username,email}=user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  };

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:9892/user",user)
    navigate("/")
  };


  return (

    <div className="container w-50">
      <div className="row mt-4 ">
        <div className=" border pb-4 rounded shadow-light " >
          <h2 className="text—center m-3">Register User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>

        
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input type={"text"}
            className="form-control"
            placeholder="Enter Your Name"
            name="name" 
            value={name}
            onChange={(e)=>onInputChange(e)}
            />

          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input type={"text"}
            className="form-control"
            placeholder="Enter Your Username"
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)} />


          <label htmlFor="Email" className="form-label">
            Email-Id
          </label>
          <input type={"email"}
            className="form-control"
            placeholder="Enter Your Email-Id"
            name="email" 
            value={email}
            onChange={(e)=>onInputChange(e)}/>

          <button type="submit" className="btn btn-primary mt-4">Submit</button>
          <Link to="/" type="Cancel" className="btn btn-outline-danger mt-4 mx-2">Cancel</Link>
          </form>
        </div>
      </div>

    </div>
  )
}
