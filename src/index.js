import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Servicos from "./pages/Servicos";
import Ranking from "./pages/Ranking";
import Orcamento from "./pages/Orcamento";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
  {
    path: "/orcamento",
    element: <Orcamento />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
