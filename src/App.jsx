import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "shared/components";
import { CataloguePage, FavoritesPage, MainPage } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampers } from "@redux/campers/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
