/** @format */

import { useEffect } from "react";
import "../assets/css/avaliacao.css";
import StarRating from "../components/Avaliacao/StarRating";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../api/api";

function Avaliacao() {
  const [nota, setNota] = useState(false);
  const [btnConcluir, setBtnConcluir] = useState(false);
  const [valorNota, setValorNota] = useState(0);
  const [comentario, setComentario] = useState("");
  const idPrestador = useParams();

  useEffect(() => {
    console.log(idPrestador);
  }, []);

  const finalizar = () => {
    if (btnConcluir) {
      let avaliacaoObjeto = {
        comentario,
        usuario: idPrestador.id,
        nota: valorNota,
      };
      axiosApi
        .post(
          `avaliacao?idUsuario=${localStorage.getItem("id")}`,
          avaliacaoObjeto,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title titulo-cards">Avaliação</h2>
            <p>Deixe aqui a sua nota sobre o serviço do prestador</p>
          </div>

          <div className="col-md-6">
            <h3>Serviço</h3>
            <p>O serviço foi concluído?</p>
            <button
              className="btn btn-primary d-inline-block me-3"
              onClick={() => {
                setNota(true);
                setBtnConcluir(true);
              }}
            >
              Sim
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setBtnConcluir(true);
                setNota(false);
              }}
            >
              Não
            </button>
          </div>

          <div className={nota ? "col-md-12 mt-4" : "d-none"}>
            <h3>Nota</h3>
            <div>
              <div className="d-flex justify-content-between">
                <StarRating setValorNota={setValorNota} />
              </div>
              <label className="d-block mt-3" onClick={console.log(valorNota)}>
                Comentário:
              </label>
              <textarea
                name=""
                id=""
                cols="52"
                rows="10"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className={btnConcluir ? "col-md-6 mt-4" : "d-none"}>
              <p>
                <b>Clique em concluir para finalizar</b>
              </p>
              <button
                className="btn btn-primary w-100"
                onClick={() => finalizar()}
              >
                Concluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avaliacao;
