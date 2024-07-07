import css from "./AppBar.module.scss";
import { Navigation } from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
