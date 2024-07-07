import { useState } from "react";
import css from "./FilterButton.module.scss";
import { icons } from "shared/icons";
import clsx from "clsx";

export const FilterButton = ({
  width = 32,
  height = 32,
  iconName,
  title,
  onClick,
}) => {
  const [active, setActive] = useState(false);

  const toggleBtn = () => {
    setActive((prev) => !prev);
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
