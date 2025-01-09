import { useState } from "react";
import "./App.css";
import LevelRow from "./components/LevelRow";

function App() {
  const [count, setCount] = useState(10);
  const [rows, setRows] = useState();

  return (
    <>
      <div id="top-spacer"></div>
      <div className="container">
        <h1>Chihuahua Calculator</h1>

        <p>Target level:</p>
        <input id="target-level" type="number" min="0" value="10" />
        <button className="btn btn-primary">Update</button>
        <table className="table">
          <caption className="caption-top">
            You got chihuahuas on yo phone?
          </caption>

          <thead>
            <tr>
              <th scope="col" className="fit">
                <input type="checkbox" id="check-all" />
              </th>
              <th scope="col">Level</th>
            </tr>
          </thead>

          <tbody id="level-rows"></tbody>
        </table>
      </div>
    </>
  );
}

function UpdateRows() {
  let level = document.getElementById("target-level").?valueAsNumber;
  for (let i = 0; i < level; i++) {}
}

export default App;
