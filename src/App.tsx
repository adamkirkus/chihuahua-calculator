import "./App.css";
import Counter from "./components/Counter";
import LevelRows from "./components/LevelRows";
import Result from "./components/Result";

function App() {
   return (
      <>
         <div className="container">
            <h1 id="app-title">Chihuahua Calculator</h1>

            <div className="row justify-content-evenly text-center">
               <div className="col-5">
                  <Counter />
               </div>
               <div className="col-5">
                  <Result />
               </div>
            </div>
            <LevelRows />
         </div>
      </>
   );
}

export default App;
