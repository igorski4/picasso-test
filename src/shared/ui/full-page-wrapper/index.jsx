import React from "react";
import s from "./styles.module.scss";
import { Outlet } from "react-router-dom";

export const FullPageWrapper = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Outlet />
    </div>
  );
};
