/** @format */

import "./App.css";
import "./assets/css/main.css";
import "./assets/css/login.css";
import "./assets/css/orcamento.css";
import "./assets/css/notificacao-cliente.css";
import "./assets/css/notificacao-prestador.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default App;
