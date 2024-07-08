import { lazy } from "react";

export const MainPage = lazy(() => import("./MainPage/MainPage.jsx"));
export const FavoritesPage = lazy(() =>
  import("./FavoritesPage/FavoritesPage.jsx")
);
export const CataloguePage = lazy(() =>
  import("./CataloguePage/CataloguePage.jsx")
);
