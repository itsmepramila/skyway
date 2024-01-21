import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import userSlice from "../reducers/userSllice";
// import notifySlice from "../reducers/notifySlice";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["location"],
};

const reducer = combineReducers({
  user: userSlice,
//   notify: notifySlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
