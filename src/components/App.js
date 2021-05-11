import React, {useState} from 'react'
import Main from "./Product/Main"
import Basket from "./Basket/Basket1"
import data from './data'
import {Link} from "react-router-dom";
import axios from "axios";

export default function App() {
  
  const {products}=data;
  
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


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
    
    <div className="container">
      <div className="row">
        <div className="col mt-4">
          <Main products={products} onAdd={onAdd}></Main>
        </div>
        <div className="col mt-4">
          <Basket  
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}>
          </Basket>
        </div>
      </div>
        <footer className="footer ">
            <li className="nav-item active">
                <Link className="form-group" to="/SignIn">
                    <button onClick={sentpost} type='submit' className="btn btn-success mt-2">logout</button>
                </Link>
            </li>
        </footer>
      </div>
    
  )
}
