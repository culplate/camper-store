import { useState } from "react";
import css from "./CamperModal.module.scss";
import { icons } from "shared/icons";
import clsx from "clsx";

export const CamperModal = ({ item, onClose, initTab }) => {
  const [activeTab, setActiveTab] = useState(initTab);

  return (
    <div className={css.modalWrap}>
      <h2>{item.name}</h2>
      <button>
        <svg width={16} height={16} className={css.icon}>
          <use xlinkHref={`${icons}#rating`}></use>
        </svg>
        {`${item.rating}(${item.reviews.length} Reviews)`}
      </button>
      <span className={css.locationText}>{item.location}</span>

      <div className={css.imgWrap}>
        <img
          className={css.img}
          src={item.gallery[0]}
          alt={`${item.name} photo`}
        />
        <img
          className={css.img}
          src={item.gallery[1]}
          alt={`${item.name} photo`}
        />
        <img
          className={css.img}
          src={item.gallery[2]}
          alt={`${item.name} photo`}
        />
      </div>
      <p>{item.description}</p>

      <div className={css.tabs}>
        <button
          className={clsx(
            css.tabBtn,
            activeTab === "features" ? css.active : ""
          )}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={clsx(
            css.tabBtn,
            activeTab === "reviews" ? css.active : ""
          )}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div className={css.tabContent}>
        {activeTab === "features" ? (
          <div className={css.tabWrap}>Features</div>
        ) : (
          <div className={css.tabWrap}>Reviews</div>
        )}
        <div className={css.formWrap}>
          <p>Contact form</p>
        </div>
      </div>
    </div>
  );
};
