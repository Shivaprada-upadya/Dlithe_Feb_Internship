import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fakeUsers = [{ username: "user", password: "pass" }];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = fakeUsers.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem("user", username);
      navigate("/menu");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
