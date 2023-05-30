/** @format */

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
import NotificacoesCliente from "./pages/NotificacoesCliente";
import NotificacoesPrestador from "./pages/NotificacoesPrestador";
import Avaliacao from "./pages/Avaliacao";
import PerfilPrestador from "./pages/PerfilPrestador";
import Home from "./pages/Home";
import Logado from "./pages/Logado";
import EdicaoPerfil from "./pages/EdicaoPerfil";
import Aprovacao from "./pages/Aprovacao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/login", element: <Login /> },
      { path: "/aprovacao", element: <Aprovacao /> },
    ],
  },
  {
    path: "/logado",
    element: <Logado />,
    children: [
      { path: "/logado", element: <Ranking /> },
      {
        path: "/logado/servicos",
        element: <Servicos />,
      },
      {
        path: "/logado/orcamento/:id",
        element: <Orcamento />,
      },
      {
        path: "/logado/notificacoes-cliente",
        element: <NotificacoesCliente />,
      },
      {
        path: "/logado/notificacoes-prestador",
        element: <NotificacoesPrestador />,
      },
      {
        path: "/logado/avaliacao/:id/:idNotificacao",
        element: <Avaliacao />,
      },
      {
        path: "/logado/editar",
        element: <EdicaoPerfil />,
      },

      // {
      //   path: "/logado/perfil-prestador",
      //   element: <PerfilPrestador />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
