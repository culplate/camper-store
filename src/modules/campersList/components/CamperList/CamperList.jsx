import { selectCampers } from "@redux/campers/selectors";
import { useSelector } from "react-redux";
import { CamperCard } from "../CamperCard/CamperCard";

const CamperList = () => {
  const campers = useSelector(selectCampers);
  const filters = useSelector((state) => state.filters);

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
    <ul>
      {filteredCampers.map((camper) => {
        return <CamperCard item={camper} key={camper._id} />;
      })}
    </ul>
  ) : (
    <p>No results corresponding your filters.</p>
  );
};

export default CamperList;
