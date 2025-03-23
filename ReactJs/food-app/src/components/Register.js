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
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input className="input-field" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn" type="submit">Register</button>
      </form>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
};

export default Register;
