/** @format */

import { useState } from "react";
import Mapa from "../../pages/Mapa";
import axiosApi from "../../api/api";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function NotificacaoAccordion(props) {
  const [isOpen, setIsOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [enviar, setEnviar] = useState(false);
  const [recusar, setRecusar] = useState(false);

  const { register, handleSubmit } = useForm();

  function handleMapa(id) {
    setIsOpen(id);
  }

  const submit = async (e) => {
    console.log(enviar);
    axiosApi
      .put(
        `/notificacoes/prestador/aprovar/${props.idNotificacao}?aprovado=${
          enviar ? enviar : false
        }&valorOrcamento=${e.valorOrcamento}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("Orçamento enviado para o cliente", {
          autoClose: 1500,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      });
  };

  const rejeitar = () => {
    setRecusar(true);
    setEnviar(false);
    axiosApi
      .put(
        `/notificacoes/prestador/aprovar/${
          props.idNotificacao
        }?aprovado=${false}&valorOrcamento=1`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("O pedido foi rejeitado", {
          autoClose: 1500,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      });
  };

  return (
    <div className="accordion-item mb-3">
      <ToastContainer></ToastContainer>
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
            {/* <div className="foto-perfil "></div> */}
            <h4 className="ml-3">{props.nome}</h4>
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
            <div className="row">
              <h3>Informações do cliente:</h3>
              <div className="col-md-6">
                <p>Tipo de serviço: {props.formulario.tipoServico}</p>
                <p>Local do serviço: {props.formulario.localServico}</p>
                <p>Comodos: {props.formulario.qtdComodos}</p>
                <p>Banheiros: {props.formulario.qtdBanheiros}</p>
              </div>
              <div className="col-md-6">
                <p>Possui:</p>
                {props.formulario.servicos.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </div>
            </div>

            <div className="localizacao">
              {isOpen === props.id && (
                <Mapa id={props.id} endereco={props.endereco} />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(submit)}>
              <label htmlFor="" className="form-label">
                Valor do orçamento
              </label>
              <input
                required
                type="number"
                className="form-control"
                {...register("valorOrcamento")}
              />
              <div className="d-flex justify-content-end">
                <div
                  className="btn btn-danger mt-3"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    rejeitar();
                  }}
                >
                  Rejeitar
                </div>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => {
                    setEnviar(true);
                    setRecusar(false);
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificacaoAccordion;
