import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import coordinatesReducer from "./slices/coordinatesSlice"
import loaderReducer from "./slices/loaderSlice"

const rootReducer = combineReducers({
  position: coordinatesReducer,
  loader: loaderReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["position"]
};

const persistedReducer = persistReducer({
  persistConfig,
  rootReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store)

export {persistor}
export default store



// export default () => {
//   let store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   });

 
//   return{store, persistor}
// }
