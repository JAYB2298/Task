import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";


 let Cart= ({selectProduct})=> {

    let sentpost =async()=>{
        try{
            const resp= await axios.post("https://dev-api.alldaydr.com/api/users/")
            console.log(resp.data);
        }
        catch(err){
            console.log(err);
        }
    }
     
     
    return (
    <>
    <div className="container mt-5">
        
        <div className="row">
            <div className="col-md-5">
                <div className="card-header">
                    <h1>Product:{selectProduct.Name}</h1>
                </div>
                <div className="card-body">
                    <h4>Price:{selectProduct.price}</h4>
                    <h5>Location:{selectProduct.Location}</h5>
                    <h6>Qty:{selectProduct.qty1}</h6>
                </div>
            </div>
        </div>
        
    </div>
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <li className="nav-item active">
                <Link className="form-group" to="/SignIn">
                       <button onClick={sentpost} type='submit' className="btn btn-success ">logout</button>
                </Link>
            </li>
    </footer>  
    </>
    
    )
}

export default Cart;