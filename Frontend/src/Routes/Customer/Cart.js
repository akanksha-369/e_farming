import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    // When the cart is empty, show this message
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 style={{ fontSize: '20px' }}>
                        Cart ({totalUniqueItems}) total Items:({totalItems})
                    </h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{ height: '10rem' }} />
                                    </td>
                                    <td style={{ fontSize: '20px' }}>{item.title}</td>
                                    <td style={{ fontSize: '20px' }}>{item.price}</td>
                                    <td style={{ fontSize: '20px' }}>Quantity({item.quantity})</td>
                                    <td>
                                        <button
                                            className="btn btn-info ms-2" style={{ fontSize: '20px' }}
                                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <button
                                            className="btn btn-info ms-2" style={{ fontSize: '20px' }}
                                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="btn btn-danger ms-2" style={{ fontSize: '20px' }}
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove Item
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2 style={{ fontSize: '30px' }}>Total Price: ${cartTotal.toFixed(2)}</h2>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-danger m-2" style={{ fontSize: '20px' }}
                        onClick={() => emptyCart()}
                    >
                        Clear Cart
                    </button>
                    {/* Show the "Place Order" button only when the cart has items */}
                    {!isEmpty && (
                        <button className="btn btn-primary mt-2 " style={{ fontSize: '20px' }}>Place Order</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Cart;