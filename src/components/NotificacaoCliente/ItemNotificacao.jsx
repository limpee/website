/** @format */
import { Link } from "react-router-dom";

function ItemNotificacao() {
  return (
    <div className="item-notificacao d-flex mb-3">
      <div className="col-md-5 d-flex align-items-center">
        <div className="foto-perfil "></div>
        <h4 className="ml-3">Fulano - Prestador</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        <Link className="btn btn-primary" to="" id="btn-aceitar">
          Aceitar
        </Link>
        <button className="btn btn-secundary btn-recusar">Recusar</button>
      </div>
    </div>
  );
}

export default ItemNotificacao;
