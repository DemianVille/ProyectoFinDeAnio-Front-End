import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import AboutThisProyect from "./pages/AboutThisProject";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import Error404 from "./components/Error404";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/productos/:id",
      element: <Product />,
    },
    {
      path: "/usuario",
      element: <User />,
    },
    {
      path: "/categoria/:id",
      element: <Category />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/carrito",
      element: <Cart />,
    },
    {
      path: "/iniciar-sesion",
      element: <Login />,
    },
    {
      path: "/registrarse",
      element: <Register />,
    },
    {
      path: "/sobre-este-proyecto",
      element: <AboutThisProyect />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  return (
    <>
      <ScrollToTop />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
