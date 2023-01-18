import { Route, RouterProvider, Routes } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/*",
    element: <h1>Esta página não existe.</h1>
  }
]);

const Router = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default Router;
