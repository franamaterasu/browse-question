import {
  AiOutlineSearch,
  AiOutlineQuestion,
  AiOutlineDeploymentUnit,
  AiOutlineGlobal,
  AiOutlineLock,
} from "react-icons/ai";

import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <AiOutlineSearch className="navigation__item-icon" />
          <span className="navigation__item-name">Browse</span>
        </li>
        <li className="navigation__list-item">
          <AiOutlineQuestion className="navigation__item-icon" />
          <span className="navigation__item-name">Add new question</span>
        </li>
        <li className="navigation__list-item">
          <AiOutlineDeploymentUnit className="navigation__item-icon" />
          <span className="navigation__item-name">API</span>
        </li>
        <li className="navigation__list-item">
          <AiOutlineGlobal className="navigation__item-icon" />
          <span className="navigation__item-name">Discuss</span>
        </li>
        <li className="navigation__list-item">
          <AiOutlineLock className="navigation__item-icon" />
          <span className="navigation__item-name">Login</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
