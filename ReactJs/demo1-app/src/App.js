import React, { useState } from 'react';
function App() {
  const [message, setMessage] = useState("Hello, React!");

  const changeMessage = () => {
    setMessage("You clicked the button!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click me</button>
    </div>
  );
}
export default App;