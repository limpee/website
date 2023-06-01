/** @format */

import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function NavbarLogado({ isActive, setIsActive }) {
  return (
    <div id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <span className="navbar-brand">
            <img src={logo} className="img-fluid" alt="logo" />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-end"
            id="navbarNav"
          >
            {localStorage.getItem("tipoUsuario") !== "admin" && (
              <span style={{ color: "#00a3dc", fontWeight: "bold" }}>
                Bem-vindo(a), {JSON.parse(localStorage.getItem("usuario")).nome}
              </span>
            )}
            <ul className="navbar-nav">
              {localStorage.getItem("tipoUsuario") === "cliente" && (
                <li
                  className="nav-item"
                  onClick={() => {
                    setIsActive("servicos");
                  }}
                >
                  <Link
                    className={
                      isActive === "servicos" ? "nav-link ativo" : "nav-link"
                    }
                    to="/logado/servicos"
                  >
                    Serviços
                  </Link>
                </li>
              )}
              {localStorage.getItem("tipoUsuario") !== "admin" && (
                <li
                  className="nav-item"
                  onClick={() => {
                    setIsActive("ranking");
                  }}
                >
                  <Link
                    className={
                      isActive === "ranking" ? "nav-link ativo" : "nav-link"
                    }
                    to="/logado"
                  >
                    Ranking
                  </Link>
                </li>
              )}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/logado/orcamento/:id">
                  Orçamento
                </Link>
              </li> */}
              {localStorage.getItem("tipoUsuario") === "cliente" && (
                <li
                  className="nav-item"
                  onClick={() => {
                    setIsActive("cliente");
                  }}
                >
                  <Link
                    className={
                      isActive === "cliente" ? "nav-link ativo" : "nav-link"
                    }
                    to="/logado/notificacoes-cliente"
                  >
                    Meus pedidos
                  </Link>
                </li>
              )}
              {localStorage.getItem("tipoUsuario") === "prestador" && (
                <li
                  className="nav-item"
                  onClick={() => {
                    setIsActive("prestador");
                  }}
                >
                  <Link
                    className={
                      isActive === "prestador" ? "nav-link ativo" : "nav-link"
                    }
                    to="/logado/notificacoes-prestador"
                  >
                    Notificações prestador
                  </Link>
                </li>
              )}

              {localStorage.getItem("tipoUsuario") !== "admin" && (
                <li
                  className="nav-item"
                  onClick={() => {
                    setIsActive("perfil");
                  }}
                >
                  <Link
                    to="/logado/editar"
                    className={
                      isActive === "perfil" ? "nav-link ativo" : "nav-link"
                    }
                  >
                    Editar perfil
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link btn-cadastrar btn-sair mt-2 text-center"
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Sair
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarLogado;
