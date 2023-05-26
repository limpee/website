/** @format */

import "./App.css";
import "./assets/css/main.css";
import "./assets/css/login.css";
import "./assets/css/orcamento.css";
import "./assets/css/notificacao-cliente.css";
import "./assets/css/notificacao-prestador.css";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default App;
