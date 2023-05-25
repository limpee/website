/** @format */

import ItemNotificacao from "../components/NotificacaoCliente/ItemNotificacao";
import axiosApi from "../api/api";
import { useEffect } from "react";
import { useState } from "react";

function NotificacoesCliente() {
  const [notificacoes, setNotificacoes] = useState();

  useEffect(() => {
    axiosApi
      .get(`notificacoes/cliente/${localStorage.getItem("id")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let vetor = [];
        console.log(res.data);
        res.data.forEach((item, i) => {
          console.log(item);
          vetor.push(
            <ItemNotificacao
              key={i}
              id={item.idCliente}
              prestador={item.nomeCliente}
              orcamento={item.valorOrcamento}
            />
          );
          // console.log(item);
        });

        setNotificacoes(vetor);
      });

    // console.log(notificacoes.cliente);
  }, []);

  return (
    <div>
      <div className="container conteudo mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title titulo-cards mb-4">
              Notificações de orçamento
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{notificacoes}</div>
        </div>
      </div>
    </div>
  );
}

export default NotificacoesCliente;
