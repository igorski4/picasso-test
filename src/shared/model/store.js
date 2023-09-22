import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "../api/api";
import pageReducer from "./pageSlice";

const rootReducer = combineReducers({
  [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  pageReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);
