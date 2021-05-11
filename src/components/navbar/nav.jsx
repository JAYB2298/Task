import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link className="nav-link" to="/SignIn">
                Login
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/signUp">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-shopping-cart">
                  <span className="badge badge-success"></span>
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;


