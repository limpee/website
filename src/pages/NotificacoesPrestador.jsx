/** @format */

import NotificacaoAccordion from "../components/NotificacaoPrestador/NotificacaoAccordion";
import axiosApi from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
function Mapa() {
  let enderecos = [
    "Rua José Antônio Fontes,778",
    "Avenida Paulista, 100",
    "Saldanho Marinho",
  ];
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    axiosApi
      .get(`notificacoes/prestador/${localStorage.getItem("id")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let vetor = [];
        console.log(res);
        res.data.forEach((item, i) => {
          console.log(item);
          vetor.push(
            <NotificacaoAccordion
              key={i}
              id={"elemento" + i}
              sub={"sub" + i}
              formulario={item.formulario}
              nome={item.cliente.nome}
              idNotificacao={item.id}
              endereco={
                item.formulario.localServico === null
                  ? `${item.cliente.endereco.logradouro}, ${item.cliente.endereco.numero}`
                  : item.formulario.localServico
              }
            />
          );
        });

        setNotificacoes(vetor);
      });
  }, [setNotificacoes]);

  return (
    <div>
      <div className="accordion" id="notificacoesId">
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
    </div>
  );
}

export default Mapa;
