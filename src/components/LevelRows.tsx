interface Props {
   level: number;
}

function LevelRows({ level }: Props) {
   const elements = [];
   for (let i = 1; i <= level; i++) {
      elements.push(LevelRow(i));
   }

   return elements;
}

function LevelRow(level: number) {
   return (
      <>
         <tr>
            <td>
               <input type="checkbox" id={"level" + level} />
            </td>
            <td>{level}</td>
         </tr>
      </>
   );
}

export default LevelRows;
