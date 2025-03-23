import React, { useState } from "react";
import { Link } from "react-router-dom";

const fakeUsers = [{ username: "user", password: "pass" }];

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fakeUsers.push({ username, password });
    alert("Registered! Now Login");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
