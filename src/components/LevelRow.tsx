interface Props {
  level: number;
}

function LevelRow({ level }: Props) {
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

export default LevelRow;
