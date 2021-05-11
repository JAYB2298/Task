import React from 'react'

export default function Product(props) {
  
  const {product,onAdd}=props;
  

  return (
    <div className="col">
    <div className="card bg-info text-white mt-2">
      <div className="card-header">
        <h2>Name: {product.name}</h2>
      </div>
      <div className="card-body">
        <h4>${product.price}</h4>
        <h5>Location: {product.Location}</h5>
        {product.qty1 > 0 ? 
        <>
        <h6>{product.qty1}</h6>
        <div>
        <button onClick={() => onAdd(product)}>Add to cart</button>
        </div>
        </>:
        <h6>Sold out</h6>} 
      </div>
     </div>    
    </div>  
  )
}
