import React, { useState } from "react";

import { Link } from "react-router-dom";


let Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });

  let inputHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  let submitHandler = (event) => {
    event.preventDefault();
    console.log(user);
    };

  return (
    <React.Fragment>
      <section className="mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card">
                <div className="card-header ">
                  <h4> Login Form </h4>
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="form-group">
                      <input
                        onChange={inputHandler}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        
                        
                      />
                    </div>
                    <div className="form-group">
                      <input
                        onChange={inputHandler}
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                       
                        
                      />
                    </div>
                    <li className="nav-item active">
                      <Link className="form-group" to="/Product">
                        <button type='submit' className="btn btn-success">login</button>
                      </Link>
                    </li>
                  </form>
                  <small>
                    Don't have an account? 
                    <a href="/signup">
                      <i className="fas fa-sign-in-alt"></i>
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </React.Fragment>
  );
};
export default Login;