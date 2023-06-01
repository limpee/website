/** @format */

import React from "react";
import axiosApi from "../../api/api";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";

function ItemAprovacao({ nome, id, objeto }) {
  const aprovar = () => {
    axiosApi
      .put(`/usuarios/admin/aprovar/${id}?isAprovado=true`, objeto)
      .then((res) => {
        console.log(res);
        toast.success("O usuario foi aprovado", {
          autoClose: 1500,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      });
  };

  const reprovar = () => {
    axiosApi
      .put(`/usuarios/admin/aprovar/${id}?isAprovado=false`, objeto)
      .then((res) => {
        console.log(res);
        toast.success("O usuario foi reprovado", {
          autoClose: 1500,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      });
  };

  const baixar = () => {
    const downloadFile = () => {
      axiosApi({
        url: `/documentos/download/${id}`, // Substitua pelo URL correto do seu endpoint Java
        method: "GET",
        responseType: "blob", // Define a resposta como um objeto Blob
      })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));

          // Cria um link de download
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "download.pdf"); // Substitua pelo nome e extensão desejados
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Limpa o URL temporário
          window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error("Erro ao baixar o arquivo:", error);
        });
    };
    downloadFile();
  };

  return (
    <div className="item-notificacao d-flex mb-3 mt-3">
      <div className="col-md-5 d-flex align-items-center">
        <h4 className="ml-3">{nome}</h4>
      </div>
      <div className="col-md-7 d-flex justify-content-end align-items-center aceitar-recusar">
        <button className="btn btn-primary" onClick={aprovar}>
          Aprovar
        </button>
        <button className="btn btn-secundary btn-recusar" onClick={reprovar}>
          Reprovar
        </button>
        <button className="btn btn-info" onClick={baixar}>
          Baixar
        </button>

        {/* <Link
          to={`/logado/avaliacao/${props.idPrestador}/${props.idNotificacao}`}
          className="btn btn-primary"
        >
          Finalizar
        </Link> */}
      </div>
    </div>
  );
}

export default ItemAprovacao;
