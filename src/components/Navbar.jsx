import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href={false}>
            <img src={logo} className="img-fluid" alt="logo" />
          </a>
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
                <a className="nav-link" href={false}>
                  Destaques
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={false}>
                  Sobre Nós
                </a>
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
