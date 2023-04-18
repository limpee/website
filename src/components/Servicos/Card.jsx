/** @format */

import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="col-md-3 mb-3">
      <div className="card-servico p-3 d-flex justify-content-center flex-column align-items-center">
        <div className="perfil">
          <div className="foto-perfil foto-card m-auto">
            <img src={props.img} alt="" />
          </div>
          <h2>{props.nome}</h2>
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
