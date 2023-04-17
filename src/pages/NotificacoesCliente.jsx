/** @format */

import Footer from "../components/Footer";
import NavbarLogado from "../components/NavbarLogado";
import ItemNotificacao from "../components/NotificacaoCliente/ItemNotificacao";

function NotificacoesCliente() {
  return (
    <div>
      <NavbarLogado />
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
            <ItemNotificacao />
            <ItemNotificacao />
            <ItemNotificacao />
            <ItemNotificacao />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotificacoesCliente;
