/** @format */

import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function NavbarLogado() {
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
            <span style={{ color: "#00a3dc", fontWeight: "bold" }}>
              Bem-vindo(a), {JSON.parse(localStorage.getItem("usuario")).nome}
            </span>
            <ul className="navbar-nav">
              {localStorage.getItem("tipoUsuario") === "cliente" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/logado/servicos">
                    Serviços
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/logado">
                  Ranking
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/logado/orcamento/:id">
                  Orçamento
                </Link>
              </li> */}
              {localStorage.getItem("tipoUsuario") === "cliente" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/logado/notificacoes-cliente">
                    Notificações
                  </Link>
                </li>
              )}
              {localStorage.getItem("tipoUsuario") === "prestador" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logado/notificacoes-prestador"
                  >
                    Notificações prestador
                  </Link>
                </li>
              )}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/logado/avaliacao">
                  Avaliação
                </Link>
              </li> */}
              {/* 
              <li className="nav-item">
                <Link className="nav-link" to="/logado/perfil-prestador">
                  Prestador
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className="nav-link btn-cadastrar btn-sair mt-2 text-center"
                  to="/"
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
