import React from 'react';
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className='container'>
            <NavLink to="/">Home</NavLink>
            <form className='mt-5'>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" name="username"className="form-control" id="exampleInputText1" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}

export default Register