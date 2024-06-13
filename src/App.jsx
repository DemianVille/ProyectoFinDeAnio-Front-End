import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import AboutThisProyect from "./pages/AboutThisProyect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/category/:id",
      element: <Category />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
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
      path: "/about-this-project",
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
