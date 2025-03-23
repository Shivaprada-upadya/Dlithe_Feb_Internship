import React, { useState } from "react";

const fakeUsers = [{ username: "user", password: "pass" }];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = fakeUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", username);
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input className="input-field" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="btn"  type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
