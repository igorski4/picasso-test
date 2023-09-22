import React from "react";
import s from "./styles.module.scss";

export const Button = ({ children, ...rest }) => {
  return (
    <button className={s.button} {...rest}>
      {children}
    </button>
  );
};
