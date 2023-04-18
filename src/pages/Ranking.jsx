/** @format */

import Footer from "../components/Footer";
import NavbarLogado from "../components/NavbarLogado";
import Qualificacao from "../components/Ranking/Qualificacao";
import podio from "../assets/img/podio.svg";
import "../assets/css/ranking.css";
import axios from "../api/api";
import { useState, useEffect } from "react";

function Ranking() {
  let [posicoes, setPosicoes] = useState([]);

  useEffect(() => {
    const response = axios.get("/cards");

    response.then((resp) => {
      let vetor = resp.data;
      let cardsTemp = [];
      for (let i = 0; i < vetor.length; i++) {
        cardsTemp.push(
          <Qualificacao
            key={i}
            posicao={i + 1}
            img={vetor[i].avatar}
            nome={vetor[i].name}
          />
        );
      }
      setPosicoes(cardsTemp);
    });
  }, []);

  return (
    <div>
      <NavbarLogado></NavbarLogado>
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
                <span>Primeiro</span>
              </div>
              <div className="segundo">
                <span>Segundo</span>
              </div>
              <div className="terceiro">
                <span>Terceiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Ranking;
