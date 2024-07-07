import css from "./FeaturedList.module.scss";
import { icons } from "shared/icons";

export const FeaturedList = ({ item }) => {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className={css.container}>
      <div className={css.detailWrap}>
        <svg width={20} height={20} className={css.filledIcon}>
          <use xlinkHref={`${icons}#person`}></use>
        </svg>
        <span>{`${item.adults} adults`}</span>
      </div>

      <div className={css.detailWrap}>
        <svg width={20} height={20} className={css.icon}>
          <use xlinkHref={`${icons}#automatic`}></use>
        </svg>
        <span>{capitalize(item.transmission)}</span>
      </div>

      <div className={css.detailWrap}>
        <svg width={20} height={20} className={css.filledIcon}>
          <use xlinkHref={`${icons}#gas`}></use>
        </svg>
        <span>{capitalize(item.engine)}</span>
      </div>

      {item.details.kitchen !== 0 && (
        <div className={css.detailWrap}>
          <svg width={20} height={20} className={css.icon}>
            <use xlinkHref={`${icons}#kitchen`}></use>
          </svg>
          <span>{"Kitchen"}</span>
        </div>
      )}

      <div className={css.detailWrap}>
        <svg width={20} height={20} className={css.icon}>
          <use xlinkHref={`${icons}#bed`}></use>
        </svg>
        <span>{`${item.details.beds} ${
          item.details.beds === 1 ? "bed" : "beds"
        }`}</span>
      </div>

      {item.details.airConditioner !== 0 && (
        <div className={css.detailWrap}>
          <svg width={20} height={20} className={css.filledIcon}>
            <use xlinkHref={`${icons}#ac`}></use>
          </svg>
          <span>{`AC`}</span>
        </div>
      )}
    </div>
  );
};
