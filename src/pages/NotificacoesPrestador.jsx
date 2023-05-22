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

  // for (let i = 0; i < 3; i++) {
  //   notificacoes.push(
  //     <NotificacaoAccordion
  //       key={i}
  //       id={"elemento" + i}
  //       sub={"sub" + i}
  //       endereco={enderecos[i]}
  //     />
  //   );
  // }

  useEffect(() => {
    axiosApi
      .get(`notificacoes/prestador/${localStorage.getItem("id")}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let vetor = [];
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
              endereco={`${item.cliente.endereco.logradouro}, ${item.cliente.endereco.numero}`}
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
            <div className="col-md-12">
              {notificacoes}
              {/* <p>{notificacoes.length < 2 ? notificacoes.id : "1"}</p> */}
              {/* {notificacoes} */}
              {/* {notificacoes.map((item, index) => {
                <NotificacaoAccordion
                  key={index}
                  // id={"elemento" + i}
                  // sub={"sub" + i}
                  // endereco={enderecos[i]}
                />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mapa;
