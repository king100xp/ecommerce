import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/productAPI";
import { userAPI } from "./api/userAPI";
import { userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { orderAPI } from "./api/orderAPI";
import { dashboardAPI } from "./api/dashboardAPI";

export const server = import.meta.env.VITE_SERVER;
export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [userReducer.name]: userReducer.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [cartReducer.name]: cartReducer.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [dashboardAPI.reducerPath]: dashboardAPI.reducer,
  },
  // middleware: (mid) => [
  //   ...mid(),
  //   userAPI.middleware,
  //   productAPI.middleware,
  //   orderAPI.middleware,
  // ],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      productAPI.middleware,
      orderAPI.middleware,
      dashboardAPI.middleware
    ),
});

export type RootType = ReturnType<typeof store.getState>;
