/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a id="dest-sobre" className="nav-link">Destaques</a>
              </li>
              <li className="nav-item">
                <a id="dest-sobre" className="nav-link">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn-entrar" to="/login">
                  Entrar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cadastro" className="nav-link btn-cadastrar">
                  Cadastre-se
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
