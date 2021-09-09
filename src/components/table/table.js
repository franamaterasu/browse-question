import useQuestions from "../useQuestions";
import "./table.scss";

const Table = () => {
  const { questions } = useQuestions();

  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <td className="table__cell">Category</td>
          <td className="table__cell">Type</td>
          <td className="table__cell">Difficulty</td>
          <td className="table__cell">Questions / Statements</td>
        </tr>
      </thead>
      <tbody className="table__body">
        {questions.map((question) => (
          <tr>
            <td className="table__cell">{question.category}</td>
            <td className="table__cell">{question.type}</td>
            <td className="table__cell">{question.difficulty}</td>
            <td className="table__cell">{question.question}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
