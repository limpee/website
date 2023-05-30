/** @format */

import React from "react";

function ItemAprovacao() {
  return (
    <div className="item-notificacao d-flex mb-3 mt-3">
      <div className="col-md-5 d-flex align-items-center">
        <h4 className="ml-3">Fulano</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        {/* <Link
          to={`/logado/avaliacao/${props.idPrestador}/${props.idNotificacao}`}
          className="btn btn-primary"
        >
          Finalizar
        </Link> */}
      </div>
    </div>
  );
}

export default ItemAprovacao;
