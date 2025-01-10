import { useState } from "react";
import "./App.css";
import LevelRows from "./components/LevelRows";

function App() {
   const [count, setCount] = useState(10);
   const [rows, setRows] = useState(<LevelRows level={10}></LevelRows>);

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
            <button className="btn btn-primary" onClick={() => UpdateRows(count, setRows)}>
               Update
            </button>
            <table className="table">
               <caption className="caption-top">You got chihuahuas on yo phone?</caption>

               <thead>
                  <tr>
                     <th scope="col" className="fit">
                        <input type="checkbox" />
                     </th>
                     <th scope="col">Level</th>
                  </tr>
               </thead>

               <tbody id="level-rows">{rows}</tbody>
            </table>
         </div>
      </>
   );
}

function UpdateRows(count: number, setRows: any) {
   setRows(<LevelRows level={count}></LevelRows>);
}

export default App;
