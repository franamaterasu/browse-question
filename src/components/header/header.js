import Navigation from "../nav/navigation";

import "./header.scss";

const Header = ({ questions, handleOnChange, handleCategoryOnChange }) => {
  return (
    <header className="header">
      <form className="header__form">
        <input
          className="header__input"
          type="text"
          placeholder="Search by questions title..."
          onChange={handleOnChange}
        />
        <select className="header__input" onChange={handleCategoryOnChange}>
          <option selected="selected" value="">
            Select one category
          </option>
          {questions.map((question) => (
            <option value={question.category}>{question.category}</option>
          ))}
        </select>
      </form>
      <Navigation />
    </header>
  );
};

export default Header;
