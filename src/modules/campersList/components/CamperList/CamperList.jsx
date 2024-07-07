import { selectCampers } from "@redux/campers/selectors";
import { useSelector } from "react-redux";
import { CamperCard } from "../CamperCard/CamperCard";

const CamperList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map((camper) => {
        return <CamperCard item={camper} key={camper._id} />;
      })}
    </ul>
  );
};

export default CamperList;
