import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
 
  return(
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card bg-info text-white">
                        <div className="card-header">
                            <h2>Cart Items</h2>
                        </div>
                        <div className="card-body">
                          {cartItems.length === 0 && <div>Cart is empty</div>}
                          
                          {cartItems.map((item) => (
                            <div key={item.id}>
                                <h3>{item.name}</h3>
                                <button onClick={() => onRemove(item)} className="remove">
                                    -
                                </button>{' '}
                                <button onClick={() => onAdd(item)} className="add">
                                    +
                                </button>
                                <h4>{item.qty} x ${item.price.toFixed(2)}</h4>
                            </div>
                            ))}

                            {cartItems.length !== 0 && (
                                <>     
                                <h4>Items Price</h4>
                                <h4>${itemsPrice.toFixed(2)}</h4>
                                <h4>Tax Price</h4>
                                <h4>${taxPrice.toFixed(2)}</h4>
                                <h4>Shipping Price</h4>
                                <h4>
                                    ${shippingPrice.toFixed(2)}
                                </h4>
                                <div>
                                    <strong>Total Price</strong>
                                </div>
                                <div >
                                    <strong>${totalPrice.toFixed(2)}</strong>
                                </div>
                                <div>
                                <button onClick={() => alert('Implement Checkout!')}>
                                    Checkout
                                </button>
                                </div>
                              </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}