import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const reduxAuth = useSelector(state => state.auth || {}); 
    const reduxUserId = reduxAuth.userId;
    const [userid, setUserId] = useState(localStorage.getItem("userId") || reduxUserId || "");
    useEffect(() => {
        if (!userid && reduxUserId) {
          setUserId(reduxUserId);
      }
    }, [reduxUserId]);

   const { title, price } = location.state || { title: "", price: 0 };

    // Function to send order data to the backend
    const confirmOrder = async () => {

        
        const orderData = {
            uoid:userid,
            odate: new Date().toISOString(), // Current date
            Orderdetails: [
                {
       
                    fptoiod: 7,
                    qty: 1, // Default quantity as 1
                    price: 300,
                }
            ]
        };

        try {
            alert(JSON.stringify(orderData));
            const response = await fetch("http://localhost:9024/api/Orders/SaveOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                alert("Order Confirmed!");
                navigate("/"); // Redirect back to product page after confirmation
            } else {
                alert("Error confirming order");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to backend");
        }
    };

    return (
        <div className="container mt-5 text-center">
            <h2>Order Confirmation</h2>
            <p>You are about to purchase:</p>
            <h4>{title}</h4>
            <h5>Total Amount: Rs. {price}</h5>

            <button className="btn btn-success mt-3" onClick={confirmOrder}>
                Confirm Order
            </button>
        </div>
    );
};

export default OrderConfirmation;

