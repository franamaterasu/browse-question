import Navigation from "../nav/navigation";

import "./header.scss";

const Header = ({ handleOnChange }) => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" onChange={handleOnChange} />
      <Navigation />
    </header>
  );
};

export default Header;
