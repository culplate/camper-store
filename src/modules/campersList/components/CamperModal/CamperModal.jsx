import { useState } from "react";
import css from "./CamperModal.module.scss";
import { icons } from "shared/icons";
import clsx from "clsx";
import { FeaturedList } from "../FeaturedList/FeaturedList";
import { capitalize } from "helpers/index";

export const CamperModal = ({ item, onClose, initTab }) => {
  const [activeTab, setActiveTab] = useState(initTab);

  return (
    <div className={css.modalWrap}>
      <button className={css.closeBtn} onClick={onClose}>
        +
      </button>
      <h2>{item.name}</h2>
      <button>
        <svg width={16} height={16} className={css.icon}>
          <use xlinkHref={`${icons}#rating`}></use>
        </svg>
        {`${item.rating}(${item.reviews.length} Reviews)`}
      </button>
      <span className={css.locationText}>{item.location}</span>

      <div className={css.modalContent}>
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
            <div className={css.tabWrap}>
              <FeaturedList item={item} />
              <h3 className={css.title}>Vehicle details</h3>
              <div className={css.vehicleDetails}>
                <div className={css.detailItem}>
                  <span className={css.label}>Form</span>
                  <span className={css.value}>{capitalize(item.form)}</span>
                </div>
                <div className={css.detailItem}>
                  <span className={css.label}>Length</span>
                  <span className={css.value}>{item.length}</span>
                </div>
                <div className={css.detailItem}>
                  <span className={css.label}>Width</span>
                  <span className={css.value}>{item.width}</span>
                </div>
                <div className={css.detailItem}>
                  <span className={css.label}>Height</span>
                  <span className={css.value}>{item.height}</span>
                </div>
                <div className={css.detailItem}>
                  <span className={css.label}>Tank</span>
                  <span className={css.value}>{item.tank}</span>
                </div>
                <div className={css.detailItem}>
                  <span className={css.label}>Consumption</span>
                  <span className={css.value}>{item.consumption}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className={css.tabWrap}>
              <ul>
                {item.reviews.map((it) => {
                  return (
                    <li key={it.reviewer_name}>
                      <h3>{it.reviewer_name}</h3>
                      <p>Rating: {it.reviewer_rating}</p>
                      <p>{it.comment}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          <div className={css.formWrap}>
            <p>Contact form</p>
          </div>
        </div>
      </div>
    </div>
  );
};
