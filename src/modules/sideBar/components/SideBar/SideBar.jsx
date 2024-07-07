import { FilterButton } from "../FilterButton/FilterButton";
import css from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <aside className={css.sideBar}>
      <div>
        <h2 className={css.title}>Location</h2>

        <h2 className={css.title}>Filters</h2>

        <h3 className={css.filterTitle}>Vehicle equipment</h3>
        <div className={css.buttonsContainer}>
          <FilterButton title={"AC"} />
          <FilterButton title={"Automatic"} iconName={"automatic"} />
          <FilterButton title={"Kitchen"} iconName={"kitchen"} />
          <FilterButton title={"TV"} iconName={"tv"} />
          <FilterButton title={"Shower/WC"} iconName={"shower"} />
        </div>

        <h3 className={css.filterTitle}>Vehicle type</h3>
        <div className={css.buttonsContainer}>
          <FilterButton width={40} height={28} title={"Van"} iconName={"van"} />
          <FilterButton
            width={40}
            height={28}
            title={"Fully Integrated"}
            iconName={"fullyint"}
          />
          <FilterButton
            width={40}
            height={28}
            title={"Alcove"}
            iconName={"alcove"}
          />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
