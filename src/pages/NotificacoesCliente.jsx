/** @format */

import ItemNotificacao from "../components/NotificacaoCliente/ItemNotificacao";
import axiosApi from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import PedidoAceito from "../components/NotificacaoCliente/PedidoAceito";

function NotificacoesCliente() {
  const [notificacoes, setNotificacoes] = useState();
  const [aprovados, setAprovados] = useState();

  useEffect(() => {
    axiosApi
      .get(`notificacoes/cliente/${localStorage.getItem("id")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let vetor = [];
        let vetorAprovado = [];
        console.log(res.data);
        res.data.forEach((item, i) => {
          console.log(item);
          if (item.aprovadoByCliente === false) {
            vetor.push(
              <ItemNotificacao
                key={i}
                id={item.id}
                prestador={item.nomePrestador}
                orcamento={item.valorOrcamento}
              />
            );
          } else {
            // console.log(item);
            vetorAprovado.push(
              <PedidoAceito
                key={i}
                idNotificacao={item.id}
                idPrestador={item.idPrestador}
                prestador={item.nomePrestador}
                // orcamento={item.valorOrcamento}
              />
            );
            console.log(vetorAprovado);
          }
        });

        setAprovados(vetorAprovado);
        setNotificacoes(vetor);
      });
  }, [setAprovados]);

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

        <div className="row">
          <div className="col-md-12">
            <h2 className="title titulo-cards mb-4">Pedidos aceitos</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">{aprovados}</div>
        </div>
      </div>
    </div>
  );
}

export default NotificacoesCliente;
