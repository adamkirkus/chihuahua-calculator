import { useAppSelector } from "../app/hooks";

function LevelRows() {
   const elements = [];
   const level = useAppSelector((state) => state.simple.level);

   for (let i = 1; i <= level; i++) {
      elements.push(LevelRow(i));
   }

   return (
      <>
         <table className="table">
            <caption className="caption-top">You got chihuahuas on yo phone?</caption>

            <thead>
               <tr>
                  <th scope="col" className="fit">
                     <div className="form-check">
                        <input className="form-check-input lg" type="checkbox" />
                     </div>
                  </th>
                  <th scope="col">Level</th>
               </tr>
            </thead>

            <tbody id="level-rows">{elements}</tbody>
         </table>
      </>
   );
}

function LevelRow(level: number) {
   return (
      <>
         <tr key={"levelRow" + level}>
            <td>
               <div className="form-check">
                  <input className="form-check-input lg" type="checkbox" id={"chkLevel" + level} />
               </div>
            </td>
            <td>{level}</td>
         </tr>
      </>
   );
}

export default LevelRows;
