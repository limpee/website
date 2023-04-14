import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function NavbarLogado() {
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
                <Link className="nav-link" to="/servicos">
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ranking">
                  Ranking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orcamento">
                  Orçamento
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn-cadastrar" to="/">
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
