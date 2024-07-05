import { NavLink } from "react-router-dom";
import css from "./Navigation.module.scss";
import clsx from "clsx";
import { Button } from "shared/components";

export const Navigation = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          clsx(css.link, isActive ? css.active : null)
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/catalogue"}
        className={({ isActive }) =>
          clsx(css.link, isActive ? css.active : null)
        }
      >
        Catalogue
      </NavLink>
      <Button title={"Search"} />
      <NavLink
        to={"/favorites"}
        className={({ isActive }) =>
          clsx(css.link, isActive ? css.active : null)
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
};