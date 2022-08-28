import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { categorySlice } from "./category/categoryReducers";
import { taskSlice } from "./task/taskReducers";
import { userSlice } from "./user/taskReducers";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    user: userSlice.reducer,
    category: categorySlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useStoreDispatch = () => useDispatch<AppDispatch>();

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
