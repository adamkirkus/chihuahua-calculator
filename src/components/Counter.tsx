import { useAppSelector, useAppDispatch } from "../app/hooks";
import { increment, decrement } from "../features/simpleSlice";

function Counter() {
   const level = useAppSelector((state) => state.simple.level);
   const dispatch = useAppDispatch();
   return (
      <>
         <h4>Target Level</h4>

         <div className="input-group input-group-lg mb-3 counter-input-group">
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
   }

   function btnPlus_OnClick() {
      dispatch(increment());
   }
}

export default Counter;
