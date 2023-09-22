import React, { useRef } from "react";
import { useGetPostsQuery } from "../../../shared/api/api";
import { List } from "../../../entities/list";
import { ListItem } from "../../../entities/list-item";
import s from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../shared/model/pageSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.pageReducer);
  const listRef = useRef(null);

  const { data } = useGetPostsQuery(state.page);

  const handlerOnScrollList = (scroll) => {
    const tempHeight = initialHeight + scroll.scrollOffset;
    const height = itemSize * data.length;
    if (tempHeight >= height) {
      dispatch(setPage());
    }
  };

  const initialHeight = 600;
  const itemSize = 60;

  return (
    <div ref={listRef} className={s.wrapper}>
      {data && (
        <List data={data} onScroll={handlerOnScrollList} height={initialHeight} itemSize={itemSize}>
          {({ data, index, style }) => <ListItem key={data[index].id} post={data[index]} style={style} />}
        </List>
      )}
    </div>
  );
};
