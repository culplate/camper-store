import { selectCampers } from "@redux/campers/selectors";
import { useSelector } from "react-redux";
import { CamperCard } from "../CamperCard/CamperCard";
import css from "./CamperList.module.scss";
import { useState } from "react";
import { Button } from "shared/components";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const filters = useSelector((state) => state.filters);
  const [visibleCampers, setVisibleCampers] = useState(4);
  const loadMore = () => setVisibleCampers((prev) => prev + 4);

  const filteredCampers = campers.filter((camper) => {
    if (filters.form.length > 0 && !filters.form.includes(camper.form))
      return false;
    if (filters.airConditioner && !camper.details.airConditioner) return false;
    if (filters.TV && !camper.details.TV) return false;
    if (filters.kitchen && !camper.details.kitchen) return false;
    if (filters.automatic && camper.transmission !== "automatic") return false;
    return true;
  });

  return filteredCampers.length > 0 ? (
    <div className={css.wrap}>
      <ul>
        {filteredCampers.slice(0, visibleCampers).map((camper) => {
          return <CamperCard item={camper} key={camper._id} />;
        })}
      </ul>
      {visibleCampers < filteredCampers.length && (
        <Button
          title={"Load more"}
          onClick={loadMore}
          className={css.loadBtn}
        />
      )}
    </div>
  ) : (
    <p className={css.noResults}>No results corresponding your filters.</p>
  );
};

export default CamperList;
