import { Button } from "shared/components";
import { FilterButton } from "../FilterButton/FilterButton";
import css from "./SideBar.module.scss";
import { useDispatch } from "react-redux";
import { clearFilters, setForm } from "@redux/filters/slice";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <aside className={css.sideBar}>
      <h2 className={css.title}>Location</h2>

      <h2 className={css.title}>Filters</h2>

      <h3 className={css.filterTitle}>Vehicle equipment</h3>
      <div className={css.buttonsContainer}>
        <FilterButton
          title={"AC"}
          iconName={"ac"}
          filterType={"airConditioner"}
        />
        <FilterButton
          title={"Automatic"}
          iconName={"automatic"}
          filterType={"automatic"}
        />
        <FilterButton
          title={"Kitchen"}
          iconName={"kitchen"}
          filterType={"kitchen"}
        />
        <FilterButton title={"TV"} iconName={"tv"} filterType={"TV"} />
        <FilterButton
          title={"Shower/WC"}
          iconName={"shower"}
          filterType={"shower"}
        />
      </div>

      <h3 className={css.filterTitle}>Vehicle type</h3>
      <div className={css.buttonsContainer}>
        <FilterButton
          width={40}
          height={28}
          title={"Van"}
          iconName={"van"}
          form={"panelTruck"}
        />
        <FilterButton
          width={40}
          height={28}
          title={"Fully Integrated"}
          iconName={"fullyint"}
          form={"fullyIntegrated"}
        />
        <FilterButton
          width={40}
          height={28}
          title={"Alcove"}
          iconName={"alcove"}
          form={"alcove"}
        />
      </div>
    </aside>
  );
};

export default SideBar;
