import { NavLink } from "react-router-dom";
import "./side-bar.css";

export const SideBar = ({ children }) => {
  return (
    <div className="containerSideBar">
      <div className="containerSideBar__Bar">
        <div className="containerSideBar__title">
          <p>
            <span>Dev</span>Challenges.io
          </p>
        </div>
        <div className="containerSideBar__link">
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#090F31" : "",
              };
            }}
            className="containerSideBar__link__item"
            to="/button"
          >
            Buttons
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "#090F31" : "",
              };
            }}
            className="containerSideBar__link__item"
            to="/input"
          >
            Inputs
          </NavLink>
          <p className="containerSideBar__link__item">Typography</p>
          <p className="containerSideBar__link__item">Grid</p>
        </div>
      </div>
      <div className="containerSideBarContent">{children}</div>
    </div>
  );
};
