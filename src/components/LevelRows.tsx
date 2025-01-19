import { ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { updatePoints } from "../features/simpleSlice";

function LevelRows() {
   const elements = [];
   const level = useAppSelector((state) => state.simple.level);
   const dispatch = useAppDispatch();

   for (let i = 1; i < level; i++) {
      elements.push(LevelRow(i));
   }

   return (
      // <>
      //    <table className="table">
      //       <caption className="caption-top">You got chihuahuas on yo phone?</caption>

      //       <thead>
      //          <tr>
      //             <th scope="col" className="fit">
      //                <div className="form-check">
      //                   <input className="form-check-input lg" type="checkbox" />
      //                </div>
      //             </th>
      //             <th scope="col">Level</th>
      //          </tr>
      //       </thead>

      //       <tbody id="level-rows">{elements}</tbody>
      //    </table>
      // </>

      <>
         <ul className="list-group">{elements}</ul>
      </>
   );

   function LevelRow(level: number) {
      return (
         // <>
         //    <tr key={"levelRow" + level}>
         //       <td className="fit">
         //          <div className="form-check">
         //             <input className="form-check-input lg" type="checkbox" id={"chkLevel" + level} />
         //          </div>
         //       </td>
         //       <td>{level}</td>
         //    </tr>
         // </>

         <>
            <li className="list-group-item tall" key={"level" + level}>
               <input
                  className="form-check-input me-2"
                  type="checkbox"
                  id={"chkLevel" + level}
                  value={2 ** (level - 1)}
                  onChange={chkLevel_OnChange}
               />
               <label className="form-check-label stretched-link" htmlFor={"chkLevel" + level}>
                  {"Level " + level}
               </label>
            </li>
         </>
      );
   }

   function chkLevel_OnChange(event: ChangeEvent<HTMLInputElement>) {
      let value = Number.parseInt(event.target.getAttribute("value") ?? "0");

      if (event.target.checked) {
         dispatch(updatePoints(value));
      } else {
         dispatch(updatePoints(value * -1));
      }
   }
}

export default LevelRows;
