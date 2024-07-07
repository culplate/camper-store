import { AppBar } from "modules/appBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
