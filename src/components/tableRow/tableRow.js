import "./tableRow.scss";

const TableRow = ({ data }) => {
  return (
    <>
      {data.map((question) => (
        <tr className="row">
          <td className="row__cell">{question.category}</td>
          <td className="row__cell">{question.type}</td>
          <td className="row__cell">{question.difficulty}</td>
          <td className="row__cell">{question.question}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
