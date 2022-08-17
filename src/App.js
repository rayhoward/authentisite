import React, { useState } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom"
import Home from "./home";
import Profile from "./profile";
import About from "./about";
import Protected from "./protected";

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <>

      <Navbar />

      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Protected isLoggedIn={isLoggedIn}><Profile /></Protected>} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>

    </>
  )
}

export default App;
