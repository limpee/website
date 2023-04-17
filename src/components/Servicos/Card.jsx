/** @format */

import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="col-md-3 mb-3">
      <div className="card-servico p-3 d-flex justify-content-center flex-column align-items-center">
        <div className="perfil">
          <div className="foto"></div>
          <h2>Mariana</h2>
        </div>
        <div className="especialidades">
          <h5>Especialidades</h5>
          <ul>
            <li>Vidros</li>
            <li>Tapetes</li>
          </ul>
        </div>
        <Link className="btn btn-primary w-75" to="/orcamento">
          Orçamento
        </Link>
      </div>
    </div>
  );
}

export default Card;
