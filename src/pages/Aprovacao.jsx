/** @format */

import React, { useState } from "react";
import ItemAprovacao from "../components/Aprovacao/ItemAprovacao";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import "../assets/css/aprovacao.css";
import axiosApi from "../api/api";
import { useEffect } from "react";

function Aprovacao() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosApi.get(`/usuarios/naoAprovados`).then((res) => {
      let vetor = [];
      for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        console.log(element);
        vetor.push(
          <ItemAprovacao
            key={i}
            nome={element.nome}
            id={element.id}
            objeto={element}
          />
        );
        console.log(vetor);
      }
      setItems(vetor);
    });
  }, []);

  return (
    <>
      <NavbarLogado />
      <div className="container aprovacao-container mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards">Aprovação</h2>
          {items}
          {/* <button className="btn btn-primary w-25" onClick={baixarCsv}>
            Baixar CSV
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aprovacao;
