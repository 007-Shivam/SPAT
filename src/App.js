import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { auth } from "./firebaseConnect";
import { onAuthStateChanged } from "firebase/auth";
import './App.css';

import Navbar from './components/navbar/NavbarComponent';
import House from './pages/House'
import Cars from './pages/Cars'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Loader from "./components/loader/Loader";


function App() {
  const [user, setUser] = useState(null); // State to store the authenticated user
  const [loading, setLoading] = useState(true); // State to track if the auth state is still loading

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false); // Set loading to false once the auth state is determined
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <><Loader /></>; 
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Router>
            <Navbar />

            <Routes>
              <Route exact path='/' element={<House />} />
              <Route path='/house' element={<House />} />
              <Route path='/cars' element={<Cars />} />
              <Route path='/login' element={user ? <Navigate to="/dashboard" /> : <Login />} />
              <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/" />} />
            </Routes>

          </Router>
        </>
      )}
    </>
  );
}

export default App;
