/** @format */

import "../assets/css/servicos.css";
import PrestadorContext from "../context/PrestadorContext";
import Card from "../components/Servicos/Card";
import { useState, useEffect, useContext } from "react";
import axiosApi from "../api/api";

function Servicos() {
  const { prestador } = useContext(PrestadorContext);

  let [cards, setCards] = useState([]);
  let [imageUrl, setImageUrl] = useState([]);
  let [imagens, setImagens] = useState([]);
  // const response = axiosApi.get("/usuarios/lista");

  useEffect(() => {
    let cardsTemp = [];
    let vetorPrestador = prestador.filter(
      (item) => item.tipoUsuario === "prestador"
    );

    axiosApi
      .get("/imagens", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // let byte = res.data[0].foto;
        // setByte(byte);
        let vetorImg = [];
        for (let i = 0; i < res.data.length; i++) {
          let item = res.data[i];
          vetorImg.push(item);
        }

        setImagens(vetorImg);
      });

    for (let i = 0; i < vetorPrestador.length; i++) {
      console.log(i + 1, vetorPrestador.length);
      if (!(i + 1 > vetorPrestador.length)) {
        i++;

        console.log(i);
        let infoImg = imagens.filter((item) => item.id === i);
        console.log(infoImg);

        i--;
        console.log(infoImg[0]);
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
      // console.log(imagens);
    }
    setCards(cardsTemp);
  }, [prestador]);

  return (
    <div>
      <div className="container conteudo mt-5 mb-5">
        {/* <img
          src={`data:image/jpeg;base64,${byte}`}
          alt=""
          style={{ width: "500px", height: "500px" }}
        /> */}
        <div className="row">
          <h2 className="title titulo-cards mb-3">Prestadores de serviços</h2>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default Servicos;
