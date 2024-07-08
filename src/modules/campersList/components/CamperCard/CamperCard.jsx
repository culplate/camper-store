import { Button } from "shared/components";
import css from "./CamperCard.module.scss";
import { icons } from "shared/icons";
import { FeaturedList } from "../FeaturedList/FeaturedList";
import { useModal } from "hooks/useModal";
import { useCallback } from "react";
import { CamperModal } from "../CamperModal/CamperModal";

export const CamperCard = ({ item }) => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback((initTab) => {
    setModal(
      <CamperModal item={item} onClose={closeModal} initTab={initTab} />
    );
  });

  return (
    <li className={css.card}>
      <img
        className={css.img}
        src={item.gallery[0]}
        alt={`${item.name} photo`}
      />
      <div>
        <div className={css.headingWrap}>
          <h2 className={css.title}>{item.name}</h2>
          <h2 className={css.title}>{`€${item.price}.00`}</h2>
        </div>

        <button onClick={() => openModal("reviews")}>
          <svg width={16} height={16} className={css.icon}>
            <use xlinkHref={`${icons}#rating`}></use>
          </svg>
          {`${item.rating}(${item.reviews.length} Reviews)`}
        </button>

        <span className={css.locationText}>{item.location}</span>

        <p className={css.description}>{item.description}</p>

        <FeaturedList item={item} />
        <Button title={"Show More"} onClick={() => openModal("features")} />
      </div>
    </li>
  );
};
