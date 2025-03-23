import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Menu from "./components/Menu";
import FoodDetails from "./components/FoodDetails";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<PrivateRoute><Menu /></PrivateRoute>} />
        <Route path="/food/:id" element={<PrivateRoute><FoodDetails /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
