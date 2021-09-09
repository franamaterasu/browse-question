import Navigation from "../nav/navigation";

import "./header.scss";

const Header = ({ handleOnChange }) => {
  return (
    <header className="header">
      <input
        className="header__input"
        type="text"
        placeholder="Search by questions title..."
        onChange={handleOnChange}
      />
      <Navigation />
    </header>
  );
};

export default Header;
