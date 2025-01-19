import { useState } from "react";
import { useAppSelector } from "../app/hooks";

function Result() {
   const level = useAppSelector((state) => state.simple.level);
   const [result, setResult] = useState(calcResult(level));

   return (
      <>
         <h4>Chihuahuas Remaining</h4>
         <h2>{result}</h2>
      </>
   );

   function calcResult(level: number) {
      return 2 ** (level - 1);
   }
}

export default Result;
