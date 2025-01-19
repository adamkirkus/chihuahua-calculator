// import { useState } from "react";
import { useAppSelector } from "../app/hooks";

function Result() {
   const level = useAppSelector((state) => state.simple.level);
   const points = useAppSelector((state) => state.simple.points);

   return (
      <>
         <h4>Chihuahuas Remaining</h4>
         <h2>{2 ** (level - 1) - points}</h2>
      </>
   );
}

export default Result;
