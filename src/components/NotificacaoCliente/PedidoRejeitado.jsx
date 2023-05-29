/** @format */

import React from "react";
import { GrClose } from "react-icons/gr";
import axiosApi from "../../api/api";

function PedidoRejeitado(props) {
  const encerrarPedido = () => {
    axiosApi
      .put(`notificacoes/cliente/aprovar/${props.id}?aprovado=${false}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        window.location.reload(false);
      });
  };

  return (
    <div className="item-notificacao d-flex mb-3 bg-danger border-dark">
      <div className="col-md-5 d-flex align-items-center">
        {/* <div className="foto-perfil "></div> */}
        <h4 className="ml-3">{props.prestador} recusou o seu pedido</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        {/* <h4>Orçamento: R$ {props.orcamento}</h4> */}
        <GrClose
          size={30}
          onClick={encerrarPedido}
          style={{ cursor: "pointer" }}
        ></GrClose>
      </div>
    </div>
  );
}

export default PedidoRejeitado;
