import "./App.css";
import Counter from "./components/Counter";
import LevelRows from "./components/LevelRows";

function App() {
   return (
      <>
         <div className="container">
            <h1 id="app-title">Chihuahua Calculator</h1>

            <Counter />
            <LevelRows />
         </div>
      </>
   );
}

export default App;
