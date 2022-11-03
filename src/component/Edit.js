import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function edit() {

    //react hooks
    const [inpval,setINP]=useState({
        username:"",
        email:"",
        password:""

    })

    const setdata=(e)=>{
       console.log( e.target.setdata);
       const {name,value}=e.target;
       setINP((preval)=>{
        return{
            ...preval,
            [name]:value
        }

       })
    }
  return (
    <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form className='mt-5'>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-4 col-12">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" value={inpval.name} onChange={setdata}  name="username"className="form-control" id="exampleInputText1" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-4 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-4 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" value={inpval.password} onChange={setdata}  name="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 col-lg-6 col-md-4 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                    </div> */}
                    <button type="submit" onChange={setdata} className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
  )
}

export default edit