/** @format */

import { useState } from "react";
import Mapa from "../../pages/Mapa";

function NotificacaoAccordion(props) {
  const [isOpen, setIsOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);

  async function handleMapa(id) {
    await setIsOpen(id);
    console.log(id, isOpen);
  }

  return (
    <div className="accordion-item mb-3">
      <h2 className="accordion-header">
        <button
          onClick={() => handleMapa(props.id)}
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + props.sub}
          aria-expanded="false"
          aria-controls={props.sub}
        >
          <div className="col-md-5 d-flex align-items-center">
            <div className="foto-perfil "></div>
            <h4 className="ml-3">Fulano - Cliente</h4>
          </div>
        </button>
      </h2>
      <div
        id={props.sub}
        className="accordion-collapse collapse"
        data-bs-parent="#notificacoesId"
      >
        <div className="accordion-body d-flex">
          <div className="col-md-6">
            <h3>Informações do cliente:</h3>
            <p>Tipo de serviço:</p>
            <p>Limpar vidros</p>

            <div className="localizacao">
              {isOpen === props.id && <Mapa endereco={props.endereco} />}
            </div>
          </div>
          <div className="col-md-6">
            <form action="">
              <label htmlFor="" className="form-label">
                Valor do orçamento
              </label>
              <input type="text" className="form-control" />
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary mt-3 ">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificacaoAccordion;
