import React from "react";
import s from "./styles.module.scss";
import clsx from "clsx";
import { Button } from "../../../shared/ui/button";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>{`${post.id} ${post.title}`} </p>
      <p className={clsx(s.title, s.text)}>{post.body}</p>
      <Link to={"/"}>
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
