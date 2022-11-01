import logo from "./logo.svg";
import React, { createContext } from "react";
import { useContext, useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserContext } from "./context/userContext";
function App() {
  const [user, setUser] = useState(null);
  // const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <UserContext.Provider value={{user , setUser}}>
        <Routes>
          <Route exact path="/" element={<Navbar />}></Route>
          <Route exact path="/user/signup" element={<Signup />}></Route>
          <Route exact path="/user/login" element={<Login />}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
