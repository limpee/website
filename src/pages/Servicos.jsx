/** @format */

import "../assets/css/servicos.css";
import PrestadorContext from "../context/PrestadorContext";
import Card from "../components/Servicos/Card";
import { useState, useEffect, useContext } from "react";

function Servicos() {
  const { prestador } = useContext(PrestadorContext);

  let [cards, setCards] = useState([]);
  // const response = axiosApi.get("/usuarios/lista");

  useEffect(() => {
    let cardsTemp = [];
    console.log(prestador);
    for (let i = 0; i < prestador.length; i++) {
      // console.log(cardsTemp);
      cardsTemp.push(
        <Card
          key={i}
          // img={prestador[i].avatar}
          nome={prestador[i].nome}
          id={prestador[i].id}
          especializacoes={prestador[i].especializacoes}
        />
      );
    }
    setCards(cardsTemp);
    console.log(cardsTemp);
  }, [prestador]);

  return (
    <div>
      <div className="container conteudo mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards mb-3">Prestadores de serviços</h2>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Servicos;
