import React,{useState} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Cart from "./Cart"



 let Product=()=> {

    let [select,setSelect]=useState(null);

   let [productData, setProductData]=useState([
    { Name: "Cheese", price : 2.50, Location: "Refrigerated foods",qty1:2},
    { Name: "Crisps", price : 3, Location: "the Snack isle",qty1:5},
    { Name: "pizza", price : 4, Location: "Refrigerated foods",qty1:0},
    { Name: "Chocolate", price : 1.50, Location: "the Snack isle",qty1:8},
    { Name: "Self-raising flour", price : 1.50, Location: "Home baking",qty1:6},
    { Name: "Ground almonds", price : 3, Location: "Home baking",qty1:0}
   ]);

    let decrHandler = (value)=>{
        let newArr=[...productData];
        newArr[value].qty1=newArr[value].qty1-1
        setProductData(newArr);   
  } 

    let incrHandler = (value)=>{
    let newArr=[...productData];
    newArr[value].qty1=newArr[value].qty1+1
    setProductData(newArr);   
    } 
  
       
    let sentpost =async()=>{
        try{
            const resp= await axios.post("https://dev-api.alldaydr.com/api/users/")
            console.log(resp.data);
        }
        catch(err){
            console.log(err);
        }
    }
    
    let onclickOne=(card)=>{
        setSelect(card);
        return(
        <>
          {select==null? 
          (
            <Cart selectProduct={card}/>
            
            ):null
         }  
        </>
        ) 
         }

    let card=(card,index)=>{

        let qty=null;

        if(card.qty1>0){
            qty=(<h6>Qty: <i onClick={decrHandler.bind(this,index)}  className="far fa-minus-square"/> {card.qty1} <i onClick={incrHandler.bind(this,index)}  className="fas fa-plus-square"/></h6>)
        }
        else (qty=(<h6>Sold Out</h6>))
           
        return(
                        
            <div className="col-md-5 mt-4" key={index}>
                    <div className="card justify-content-center">
                        <div className='card-header'>
                            <h3>Product : {card.Name}</h3>
                        </div>
                        <div className="card-body text-center">
                            <h4>Price: {card.price}$</h4>
                            <h5>Location:{card.Location}</h5>
                            {qty}
                            <Link className="form-group" to="/cart">
                                <button onClick={onclickOne.bind(this,card)} className="btn btn-primary">Add to cart</button>
                            </Link>
                        </div>
                    </div>
             </div>
        )
    }


    return (
     <>
         <div className="container bg-dark mt-4 ">
            <div className="row"> 
                    {productData.map(card)}
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

export default Product;