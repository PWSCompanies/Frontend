import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { userReducer } from "./users/userSlice";
import { productReducer } from "./products/productSlice";
import { cartReducer } from "./cart/cartSlice";
// import adminReducer from "./admin/adminSlice";
// import userReducer from "./user/userSlice";
// import toggleReducer from "./toggleSlice";
// import featureReducer from "./user/featureSlice";
// import adminFeatureReducer from "./admin/featureSlice";
// import commonReducer from "./commons";
// import productReducer from "./products/productSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export const getRootState = store.getState;

export const getAppDispatch = store.dispatch;
