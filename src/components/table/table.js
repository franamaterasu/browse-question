import TableRow from "../tableRow";
import useQuestions from "../useQuestions";
import "./table.scss";

const Table = ({ searchValue, categoryValue }) => {
  const { questions } = useQuestions();

  // Show initial questions
  const questionInfo = questions.map((question) => {
    return question;
  });

  // Show questions filtered by question title
  const filterByName = questions.filter((question) => {
    let filterName = question.question
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    return filterName;
  });

  // Show questions filtered by question category
  const filterByCategory = questions.filter((question) => {
    let filterCategory = question.category
      .toLowerCase()
      .includes(categoryValue.toLowerCase());

    return filterCategory;
  });

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
        {searchValue === "" && categoryValue === "" ? (
          <TableRow data={questionInfo} />
        ) : searchValue !== "" && categoryValue === "" ? (
          <TableRow data={filterByName} />
        ) : searchValue === "" && categoryValue !== "" ? (
          <TableRow data={filterByCategory} />
        ) : (
          ""
        )}
      </tbody>
    </table>
  );
};

export default Table;
