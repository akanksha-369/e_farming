import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import AdminSideBar from '../../Components/AdminSideBar';

const AProfile = () => {
    const containerStyle = {
        padding: "20px",
        width: "60%",
        margin: "4% 14%",
    };

    // Ensure state.auth exists before accessing userName
    const reduxAuth = useSelector(state => state.auth || {}); 
    const reduxUsername = reduxAuth.userName; // Safe access
    const reduxUserId = reduxAuth.userId;

    const [username, setUsername] = useState(localStorage.getItem("userName") || reduxUsername || "");
    const [userid, setUserId] = useState(localStorage.getItem("userId") || reduxUserId || "");
    const [userData, setUserData] = useState(null); // Store fetched user data
    const [loading, setLoading] = useState(false); // Loading state

    useEffect(() => {
        if (!username && reduxUsername) {
            setUsername(reduxUsername);
        }
        if (!userid && reduxUserId) {
          setUserId(reduxUserId);
      }
    }, [reduxUsername, reduxUserId]); // Update if Redux state changes

    const showData = async (e) => {
      e.preventDefault();
      setLoading(true);
    
      try {
        if (!userid) {
          throw new Error("User ID (uid) is missing.");
        }
    
        // ✅ Corrected template literal
        const response = await fetch(`http://localhost:8020/products/getUser?uid=${userid}`);
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Server error: ${response.status} - ${errorData.message || response.statusText}`);
        }
    
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    
    return (
        <div style={{ display: "flex" }}>
            <AdminSideBar />
            <div className="Container ">
            <h2 style={{ color: "red", marginLeft:"10px", marginTop:"10px"}}>Welcome {username}!</h2>
            <button type='button' className='btn btn-primary mb-3 w-30' style={{marginLeft:"10px", marginTop:"10px"}} onClick={(e)=>showData(e)} disabled={loading}>
              {loading ? "Loading..." : "View Profile"}</button>
            {userData && (
                    <div className="Container" style={{ marginLeft: "10px", marginTop: "10px" }}>
                        {/* Display user data here */}
                        <p>User ID: {userData?.uid}</p> {/* Example: Access properties from userData */}
                        <p>Full Name: {userData?.fname} {userData?.lname}</p>
                        <p>Email: {userData?.email}</p>
                        <p>Address: {userData?.address}</p> 
                        <p>City: {userData?.city.cname}</p>
                        <p>Contact: {userData?.contact}</p>
                        <p>Adhaar: {userData?.adhaar}</p>
                        <button type='button' className='btn btn-primary mb-3 w-30' 
                        style={{marginLeft:"10px", marginTop:"10px"}}>Update Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default AProfile;
