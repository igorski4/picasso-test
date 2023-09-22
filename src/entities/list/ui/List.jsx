import React from "react";
import s from "./styles.module.scss";
import { FixedSizeList } from "react-window";

export const List = ({ children, data, onScroll, height, itemSize }) => {
  return (
    <FixedSizeList
      innerElementType="ul"
      itemData={data}
      itemCount={data.length}
      itemSize={itemSize}
      height={height}
      width={600}
      className={s.list}
      onScroll={onScroll}
    >
      {children}
    </FixedSizeList>
  );
};
