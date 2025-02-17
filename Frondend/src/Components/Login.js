import { useState, useReducer} from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const init = {
        uname:"",
        pwd:""
    }

    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const sendData = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:8020/authentication/chkUser", {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info),
          });

          if(response.ok) {
            setMsg("Login Successful");
          }
    
          if (!response.ok) {
            throw new Error(`Server Error: ${response.statusText}`);
          }
    
          const data = await response.json();
    
          if (Object.keys(data).length === 0) {
            setMsg("Wrong Username/Password");
            return; // Exit early if login fails
          }
    
          if (data.status === false) {
            setMsg("Request not approved");
            navigate('/'); // Redirect to home page on request rejection
            return; // Exit early if request not approved
          }

        const userId = data.uid;  // Assuming 'uid' is the key for user ID
        const userName = data.uname;
        // const userFname = data.fname;
        // const userLname = data.lname;
        // const userEmail = data.email;
        // const userAddress = data.address;
        // const userCity = data.cid;
        // const userContact = data.contact;
        // const userAdhar = data.adhaar;
        // console.log("User ID:", userId);
        localStorage.setItem("userId", userId);  // Store in localStorage
        localStorage.setItem("userName", userName);
        // localStorage.setItem("userFname", userFname);
        // localStorage.setItem("userLname", userLname);
        // localStorage.setItem("userEmail", userEmail);
        // localStorage.setItem("userAddress", userAddress);
        // localStorage.setItem("userCity", userCity);
        // localStorage.setItem("userContact", userContact);
        // localStorage.setItem("userAdhar", userAdhar);
        // Dispatch user info to Redux if needed
        reduxAction({ type: "LOGIN_SUCCESS", payload: {userName, userId, role: data.role.rid } });
        // userId, userName, userLname, userEmail, userAddress, userCity, userContact, userAdhar, 

          // Handle successful login based on role_id
          if (data.role.rid === 1) {
            navigate("/aprofile");
          } else if (data.role.rid === 2) {
            navigate("/profile");
          } else if (data.role.rid === 3) {
            navigate("/customer_home");
          } else {
            console.error("Unexpected role_id:", data.rid.rid);
            setMsg("Invalid role"); // Handle unexpected role scenario
          }
        } catch (error) {
          console.error("Login error:", error);
          setMsg("Login failed. Please try again.");
        }
      };
    
      const handleClear = () => {
        dispatch({ type: 'reset' });
        setMsg("");
      };

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate()
    const reduxAction = useDispatch();

    return (
        <div className="container mt-5">
            <div className='card shadow-sm'>
                <div className="card-header bg-primary text-white text-center">
                    <h2>Login Page</h2>
                </div>
                <div className="card-body p-5">
                {/* {userName && <h3 className="text-center">Welcome, {userName}!</h3>} */}
                <form>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'></label>
                    <input type='text' className='form-control' id='uname' name='uname' value={info.uname}
                    onChange={(e)=>{dispatch({type:'update', fld:'uname', val: e.target.value})}} placeholder='Username'/>
                    {/* <div id="emailhelp" className="form-text">We will never share your email with anyone else</div> */}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'></label>
                    <input type='password' className='form-control' id='pwd' name='pwd' value={info.pwd}
                    onChange={(e)=>{dispatch({type:'update', fld:'pwd', val: e.target.value})}} placeholder='Password'/>
                    {/* <div id="emailhelp" className="form-text">.....</div> */}
                </div>
                <div>
                    <button type='button' className='btn btn-primary mb-3 w-100' onClick={(e)=>sendData(e)}>Login</button>
                </div>
                <div className="text-center mt-4"> 
                    <a href="/admin_home">Forgot Password?</a>
                </div>
                <div className="text-center mt-4">
                    <p>Don't have an Account ? 
                        <a href ="/register">Sign up</a> 
                    </p>
                </div>
            </form>
            </div>
            <p>{JSON.stringify(info)}</p>
            <p> {msg} </p>
        </div>
        </div>

    )
}