import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement, updatePoints } from "../features/simpleSlice";

function Counter() {
   const level = useAppSelector((state) => state.simple.level);
   const dispatch = useAppDispatch();
   return (
      <>
         <h4>Target Level</h4>

         <div className="input-group input-group-lg mb-3 center-content-xy">
            <button className="btn btn-outline-primary" onClick={btnMinus_OnClick}>
               -
            </button>

            <input
               className="form-control no-caret"
               id="input-level"
               type="text"
               readOnly
               value={level}
            />

            <button className="btn btn-outline-primary" onClick={btnPlus_OnClick}>
               +
            </button>
         </div>
      </>
   );

   function btnMinus_OnClick() {
      dispatch(decrement());

      // get the checkbox that's about to disappear
      let lastCheckBox = document.getElementById("chkLevel" + (level - 1)) as HTMLInputElement;
      if (lastCheckBox) {
         let checked = lastCheckBox.checked;
         let value = Number.parseInt(lastCheckBox.value);

         // if it's checked, subtract its value from points
         if (checked) dispatch(updatePoints(value * -1));
      }
   }

   function btnPlus_OnClick() {
      dispatch(increment());
   }
}

export default Counter;
