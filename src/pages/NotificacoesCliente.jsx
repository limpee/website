/** @format */

import ItemNotificacao from "../components/NotificacaoCliente/ItemNotificacao";
import axiosApi from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import PedidoAceito from "../components/NotificacaoCliente/PedidoAceito";
import PedidoRejeitado from "../components/NotificacaoCliente/PedidoRejeitado";

function NotificacoesCliente() {
  const [notificacoes, setNotificacoes] = useState();
  const [aprovados, setAprovados] = useState();
  const [reprovados, setReprovados] = useState();

  useEffect(() => {
    axiosApi
      .get(`notificacoes/cliente/${localStorage.getItem("id")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let vetor = [];
        let vetorAprovado = [];
        let vetorReprovado = [];
        res.data.forEach((item, i) => {
          console.log(item);
          if (item.recusadoByPrestador) {
            vetorReprovado.push(
              <PedidoRejeitado
                key={i}
                id={item.id}
                prestador={item.nomePrestador}
              />
            );
          } else if (item.aprovadoByCliente === false) {
            vetor.push(
              <ItemNotificacao
                key={i}
                id={item.id}
                prestador={item.nomePrestador}
                orcamento={item.valorOrcamento}
                analise={item.aprovadoByPrestador}
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
            // console.log(item.aprovadoByPrestador);
          }
        });

        setReprovados(vetorReprovado);
        setAprovados(vetorAprovado);
        setNotificacoes(vetor);
      });
  }, [setAprovados]);

  return (
    <div>
      <div className="container conteudo mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12">{reprovados}</div>

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
