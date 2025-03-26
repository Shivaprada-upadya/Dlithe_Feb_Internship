import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import FoodDetails from "./components/FoodDetails";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.css";



const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path="/food/:id" element={<PrivateRoute><FoodDetails /></PrivateRoute>} />
        <Route path="/" element={<Navigate to={loggedIn ? "/register" : "/register"} />} />
      </Routes>
    </Router>
  );
};



export default App;
