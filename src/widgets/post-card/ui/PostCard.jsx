import React from "react";
import { useGetPostByIdQuery } from "../../../shared/api/api";
import { useParams } from "react-router-dom";
import { Post } from "../../../entities/post/ui";

export const PostCard = () => {
  const params = useParams();
  const { data } = useGetPostByIdQuery(params.post);

  return <>{data && <Post key={data.id} post={data} />}</>;
};
