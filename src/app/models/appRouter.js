import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../pages/main";
import { PostPage } from "../../pages/post-card";
import { FullPageWrapper } from "../../shared/ui/full-page-wrapper";

export const appRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <FullPageWrapper />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        { path: "/:post", element: <PostPage /> },
      ],
    },
  ]);
