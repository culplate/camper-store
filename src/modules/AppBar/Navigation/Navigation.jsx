import { NavLink } from "react-router-dom";
// import css from "./Navigation.scss";

export const Navigation = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/catalogue"}>Catalogue</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </nav>
  );
};
