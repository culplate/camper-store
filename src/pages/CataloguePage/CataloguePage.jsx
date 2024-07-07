import { SideBar } from "modules/sideBar";
import css from "./CataloguePage.module.scss";
import { CamperList } from "modules/campersList";

const CataloguePage = () => {
  return (
    <div className={css.container}>
      <SideBar />
      <CamperList />
    </div>
  );
};

export default CataloguePage;
