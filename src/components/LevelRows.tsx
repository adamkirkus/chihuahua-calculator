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
      <>
         <ul className="list-group">{elements}</ul>
      </>
   );

   function LevelRow(level: number) {
      return (
         <>
            <li className="list-group-item tall" key={"level" + level}>
               <div className="form-check fs-4">
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
               </div>
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
