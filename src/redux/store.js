import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campers/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./favorites/slice";
import { filtersReducer } from "./filters/slice";

const favPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["items"],
};

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistReducer(favPersistConfig, favoritesReducer),
    filters: filtersReducer,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
