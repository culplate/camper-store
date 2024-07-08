import { selectCampers } from "@redux/campers/selectors";
import { selectFavorites } from "@redux/favorites/selectors";
import { CamperCard } from "modules/campersList/components/CamperCard/CamperCard";
import { useSelector } from "react-redux";
import css from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const campers = useSelector(selectCampers);
  const favorited = useSelector(selectFavorites);
  const filtered = campers.filter((camper) => {
    if (favorited.includes(camper._id)) return true;
  });

  return (
    <div>
      <h1>Favorites</h1>
      {filtered.length > 0 ? (
        <ul className={css.list}>
          {filtered.map((item) => {
            return <CamperCard item={item} key={item._id} />;
          })}
        </ul>
      ) : (
        <p className={css.emptyText}>
          Your favorites list is empty. Like a camper and it will appear here!
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
//   const filteredCampers = campers.filter((camper) => {
// if (filters.form.length > 0 && !filters.form.includes(camper.form))
// return false;
