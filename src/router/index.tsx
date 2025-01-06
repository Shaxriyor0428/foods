import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Likes from "../pages/Likes";
import Layout from "../pages/Layout";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/likes", element: <Likes /> },
      ],
    },
  ]);
};

export default Router;
