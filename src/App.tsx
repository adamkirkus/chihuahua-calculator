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
        <input
          type="number"
          min="0"
          max="99"
          defaultValue={count}
          onChange={(evt) => setCount(evt.target.valueAsNumber)}
        />
        <button className="btn btn-primary" onClick={UpdateRows}>
          Update
        </button>
        <table className="table" onLoad={UpdateRows}>
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
  for (let i = 0; i < count; i++) {
    console.log(i);
  }
}

export default App;
