import "./table.scss";

const Table = () => {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row">
          <td className="table__cell">ID</td>
          <td className="table__cell">Category</td>
          <td className="table__cell">Type</td>
          <td className="table__cell">Difficulty</td>
          <td className="table__cell">Questions / Statements</td>
          <td className="table__cell">Created By</td>
        </tr>
      </thead>
      <tbody className="table__body">
        <tr>
          <td className="table__cell">x</td>
          <td className="table__cell">x</td>
          <td className="table__cell">x</td>
          <td className="table__cell">x</td>
          <td className="table__cell">x</td>
          <td className="table__cell">x</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
