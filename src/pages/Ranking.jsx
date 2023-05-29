/** @format */

import Qualificacao from "../components/Ranking/Qualificacao";
import podio from "../assets/img/podio.svg";
import "../assets/css/ranking.css";
import axios from "../api/api";
import { useState, useEffect } from "react";

function Ranking() {
  let [posicoes, setPosicoes] = useState([]);

  useEffect(() => {
    const response = axios.get("/usuarios/lista/ranking", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    response.then((resp) => {
      let vetor = resp.data;
      let cardsTemp = [];
      for (let i = 0; i < vetor.length; i++) {
        cardsTemp.push(
          <Qualificacao
            key={i}
            posicao={i + 1}
            // img={vetor[i].avatar}
            nome={vetor[i].nome}
            nota={vetor[i].media}
          />
        );
      }
      setPosicoes(cardsTemp);
    });
  }, []);

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row mb-3">
          <div className="col-md-12">
            <h2 className="title titulo-cards">Ranking</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div className="todas-qualificacoes">{posicoes}</div>
          </div>
          <div className="col-md-6">
            <div className="container-podio">
              <img src={podio} alt="" className="img-fluid" />
              <div className="primeiro">
                <span>
                  {posicoes[0] !== undefined ? posicoes[0].props.nome : ""}
                </span>
              </div>
              <div className="segundo">
                <span>
                  {posicoes[1] !== undefined ? posicoes[1].props.nome : ""}
                </span>
              </div>
              <div className="terceiro">
                <span>
                  {posicoes[2] !== undefined ? posicoes[2].props.nome : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
