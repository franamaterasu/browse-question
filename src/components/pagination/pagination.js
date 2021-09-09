import "./pagination.scss";

const Pagination = () => {
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">Prev</li>
        <li className="pagination__item">1</li>
        <li className="pagination__item">2</li>
        <li className="pagination__item">3</li>
        <li className="pagination__item">4</li>
        <li className="pagination__item">Next</li>
      </ul>
    </nav>
  );
};

export default Pagination;
