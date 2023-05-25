import React from "react";
import { Link } from "react-router-dom";

function PedidoAceito(props) {
  return (
    <div className="item-notificacao d-flex mb-3">
      <div className="col-md-5 d-flex align-items-center">
        {/* <div className="foto-perfil "></div> */}
        <h4 className="ml-3">{props.prestador}</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        {/* <h4>Orçamento: R$ {props.orcamento}</h4> */}
        <Link
          to={`/logado/avaliacao/${props.idPrestador}/${props.idNotificacao}`}
          className="btn btn-primary"
        >
          Finalizar
        </Link>
      </div>
    </div>
  );
}

export default PedidoAceito;
