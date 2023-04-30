/** @format */

import NotificacaoAccordion from "../components/NotificacaoPrestador/NotificacaoAccordion";

function NotificacoesPrestador() {
  let notificacoes = [];
  for (let i = 0; i < 10; i++) {
    notificacoes.push(
      <NotificacaoAccordion key={i} id={"elemento" + i} sub={"sub" + i} />
    );
  }

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
              {/* <NotificacaoAccordion />
            <NotificacaoAccordion />
            <NotificacaoAccordion />
            <NotificacaoAccordion /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificacoesPrestador;
