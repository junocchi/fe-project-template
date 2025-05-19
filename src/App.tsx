import { useState } from "react";
import logo from "/favicon.png";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Juliana Nocchi logo" />
      </div>
      <h1 className="text-3xl font-bold underline">My FE Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">By Juliana Nocchi</p>
    </>
  );
}
