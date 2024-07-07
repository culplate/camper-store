import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./FilterButton.module.scss";
import { icons } from "shared/icons";
import clsx from "clsx";
import { setForm, toggleFilter } from "@redux/filters/slice";

export const FilterButton = ({
  width = 32,
  height = 32,
  iconName,
  title,
  filterType,
  form,
}) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const toggleBtn = () => {
    setActive((prev) => !prev);
    if (filterType) {
      dispatch(toggleFilter({ filterType }));
    } else {
      dispatch(setForm(form));
    }
  };

  return (
    <button
      onClick={toggleBtn}
      type="button"
      className={clsx(css.button, active && css.active)}
    >
      <svg width={width} height={height} className={css.icon}>
        <use xlinkHref={`${icons}#${iconName}`}></use>
      </svg>
      <span className={css.title}>{title}</span>
    </button>
  );
};
