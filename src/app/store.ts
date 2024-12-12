"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import inviteCardSlice from "@/app/invite/upsert/invite-cardSlice";
import navigationButtonSlice from "@/app/gatherings/[gatheringId]/participants/_roomInfo/navigationButton/navigationButtonSlice";

export const store = configureStore({
  reducer: { inviteCardSlice, navigationButtonSlice },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
