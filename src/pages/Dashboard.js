import React from "react";

import { auth } from "../firebaseConnect";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import '../styles/Dashboard.css'

export default function Admin() {


  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log("User logged out successfully!");
      navigate("/"); // Redirect to the login page after logout
    } catch (err) {
      console.error("Logout error:", err.message);
    }
  };


  return (
    <div className='admin'>
      <h1>Welcome to the Dashboard!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout}>Logout</button>



    </div>
  );
}