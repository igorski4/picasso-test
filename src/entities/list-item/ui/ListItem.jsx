import React from "react";
import s from "./styles.module.scss";
import { Button } from "../../../shared/ui/button";
import { Link } from "react-router-dom";

export const ListItem = ({ post, style }) => {
  return (
    <li className={s.item} style={style}>
      <p className={s.text}>{`${post.id} ${post.title} ${post.body}`}</p>
      <Link to={`${post.id}`}>
        <Button>Просмотр</Button>
      </Link>
    </li>
  );
};
