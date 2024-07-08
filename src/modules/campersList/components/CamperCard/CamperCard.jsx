import { Button } from "shared/components";
import css from "./CamperCard.module.scss";
import { icons } from "shared/icons";
import { FeaturedList } from "../FeaturedList/FeaturedList";
import { useModal } from "hooks/useModal";
import { useCallback } from "react";
import { CamperModal } from "../CamperModal/CamperModal";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@redux/favorites/slice";
import { selectFavorites } from "@redux/favorites/selectors";

export const CamperCard = ({ item }) => {
  const dispatch = useDispatch();
  const setModal = useModal();
  const favorites = useSelector(selectFavorites);
  const liked = favorites.includes(item._id);

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
          <div className={css.priceWrap}>
            <h2 className={css.title}>{`€${item.price}.00`}</h2>
            <button
              className={css.favBtn}
              onClick={() => dispatch(toggleFavorite(item._id))}
            >
              <svg
                width={24}
                height={24}
                className={clsx(css.favIcon, liked ? css.active : "")}
              >
                <use xlinkHref={`${icons}#heart`}></use>
              </svg>
            </button>
          </div>
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
