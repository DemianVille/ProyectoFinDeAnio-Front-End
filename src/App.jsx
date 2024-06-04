import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import AboutThisProyect from "./pages/AboutThisProyect";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/category",
      element: <Category />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about-this-proyect",
      element: <AboutThisProyect />,
    },
    {
      path: "*",
      element: <div>Error 404</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
