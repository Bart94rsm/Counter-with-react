import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick2() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button onClick={handleClick}>Clicca</button>
        <button onClick={handleClick2}>Reset</button>
      </div>
    </div>
  );
}

export default App;
