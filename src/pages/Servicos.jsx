/** @format */

import "../assets/css/servicos.css";
import PrestadorContext from "../context/PrestadorContext";
import Card from "../components/Servicos/Card";
import { useState, useEffect, useContext } from "react";
import axiosApi from "../api/api";

function Servicos() {
  // const { prestador } = useContext(PrestadorContext);

  let [prestador, setPrestador] = useState([]);
  let [cards, setCards] = useState([]);
  let [imagens, setImagens] = useState([]);
  // const response = axiosApi.get("/usuarios/lista");

  const getPrestadores = async () => {
    await axiosApi
      .get("usuarios/lista", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        prestador.push(res.data);
      });
  };

  const getImagem = async () => {
    await axiosApi
      .get("/imagens", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        let vetorImg = [];
        for (let i = 0; i < res.data.length; i++) {
          let item = res.data[i];
          vetorImg.push(item);
          imagens.push(item);
        }
      });
  };
  const getCards = async () => {
    let cardsTemp = [];
    let vetorPrestador = prestador[0].filter(
      (item) => item.tipoUsuario === "prestador"
    );

    for (let i = 0; i < vetorPrestador.length; i++) {
      if (!(i + 1 > vetorPrestador.length)) {
        i++;
        let infoImg = imagens.filter((item) => item.id === i);
        i--;

        cardsTemp.push(
          <Card
            key={i}
            img={infoImg[0].foto}
            nome={vetorPrestador[i].nome}
            id={vetorPrestador[i].id}
            especializacoes={vetorPrestador[i].especializacoes}
          />
        );
      }
    }
    setCards(cardsTemp);
  };
  const executar = async () => {
    await getPrestadores();
    await getImagem();
    await getCards();
  };
  useEffect(() => {
    executar();
  }, []);

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
