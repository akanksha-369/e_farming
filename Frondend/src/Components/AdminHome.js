import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function ForgotPwd() {

  const init = { // Initial state object for useReducer hook
    email: '', // Initialized with empty string because email field will be used to store the user's input  
  };

  // reducer function is a core component of useReducer hook
  // It defines how the component's state should be updated in response to different actions
  const reducer = (state, action) => {  
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'RESET':
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init); //provides a more structured way to manage complex state updates
  const [msg, setMsg] = useState(''); //suitable for simpler state management needs
  const navigate = useNavigate(); //allows programmatic navigation between different views within the application

  const handleForgotPwd = async (e) => {
    e.preventDefault();

    try {
      // Email validation
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
      if (!emailRegex.test(info.email)) {
        setMsg('Invalid email address');
        return;
      }

      // a POST request to the 'ForgotPwd' endpoint on the server located at URL
      const response = await fetch(`http://localhost:8020/authentication/forgotPassword/{email}`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: info.email }),
      });

      // checks if the HTTP request was successful
      if (!response.ok) {
        throw new Error(`Server Error: ${response.statusText}`);
      }

      //waits for the server to send a response to the request, Once the response arrives, it reads the response data as JSON and converts it into a JavaScript object
      const data = await response.json();

      // If email exists in the database it returns the corresponding password else sends the message Email not found
      if (!data.success) {
        setMsg('Email not found');
        return;
      }
      setMsg(`Your password is: ${data.pwd}`);

    } 
    catch (error) {
      console.error('Error fetching password:', error);
      setMsg('Failed to retrieve password. Please try again.');
    }
  };

  //User Interface 
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white text-center">
          <h2>Forgot Password</h2>
        </div>
        <div className="card-body p-5">
          <form onSubmit={handleForgotPwd}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input type="email" className="form-control" id="email" name="email" value={info.email}
                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })} placeholder="Enter Registered email"/>
            </div>
            <div>
              <button type="submit" className="btn btn-primary mb-3" onClick={(e) => handleForgotPwd(e)}>
                Submit
              </button>
            </div>
          </form>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}