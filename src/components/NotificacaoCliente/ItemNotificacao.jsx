/** @format */
import { useForm } from "react-hook-form";
import axiosApi from "../../api/api";

function ItemNotificacao(props) {
  const aprovar = () => {
    console.log(props);
    axiosApi
      .put(`notificacoes/cliente/aprovar/${props.id}?aprovado=${true}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="item-notificacao d-flex mb-3">
      <div className="col-md-5 d-flex align-items-center">
        <div className="foto-perfil "></div>
        <h4 className="ml-3">{props.prestador}</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        <h4>Orçamento: R$ {props.orcamento}</h4>
        <button className="btn btn-primary" onClick={() => aprovar()}>
          Aceitar
        </button>
        <button className="btn btn-secundary btn-recusar">Recusar</button>
      </div>
    </div>
  );
}

export default ItemNotificacao;
