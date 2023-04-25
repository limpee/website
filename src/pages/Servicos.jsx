/** @format */

import Footer from "../components/Footer";
import NavbarLogado from "../components/NavbarLogado";
import "../assets/css/servicos.css";
import Card from "../components/Servicos/Card";
import axios from "../api/api";
import { useState, useEffect } from "react";

function Servicos() {
  let [cards, setCards] = useState([]);
  const response = axios.get("/cards");

  useEffect(() => {
    response.then((resp) => {
      let vetor = resp.data;
      let cardsTemp = [];
      for (let i = 0; i < vetor.length; i++) {
        cardsTemp.push(
          <Card key={i} img={vetor[i].avatar} nome={vetor[i].name} />
        );
      }
      setCards(cardsTemp);
    });
  }, [response]);

  return (
    <div>
      <NavbarLogado />
      <div className="container conteudo mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards mb-3">Prestadores de serviços</h2>
          {cards}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Servicos;
