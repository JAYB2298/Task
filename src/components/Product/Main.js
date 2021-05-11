import React from 'react'
import Product from "./Product";

export default function Main(props) {
  
  const {products, onAdd}=props;
  console.log(products)
  return (
    <>
      <div className="container">
        <div className="row">
        <main>
         {products.map((product)=>(
           <Product key={product.id} product={product} onAdd={onAdd}></Product>
         )
         )}
    </main>
        </div>
      </div>
    </>
    
  )
}
