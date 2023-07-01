import logo from "./logo.svg";
import React, { createContext } from "react";
import { useContext, useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { UserContext } from "./context/userContext";
function App() {
  const [user, setUser] = useState(null);
  // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  useEffect(() => {
    localStorage.clear();
  } , []);
  return (
    <Router>
      <Navbar/>
      <UserContext.Provider value={{user , setUser}}>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/user/signup" element={<Signup />}></Route>
          <Route exact path="/user/login" element={<Login />}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
