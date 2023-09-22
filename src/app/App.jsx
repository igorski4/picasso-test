import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./models/appRouter";

export const App = () => {
  return <RouterProvider router={appRouter()} />;
};
