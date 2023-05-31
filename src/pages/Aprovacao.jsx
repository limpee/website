/** @format */

import React from "react";
import ItemAprovacao from "../components/Aprovacao/ItemAprovacao";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import "../assets/css/aprovacao.css";
import axiosApi from "../api/api";

function Aprovacao() {
  function baixarCsv() {}

  return (
    <>
      <NavbarLogado />
      <div className="container aprovacao-container mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards">Aprovação</h2>
          <ItemAprovacao />
          <button className="btn btn-primary w-25" onClick={baixarCsv}>
            Baixar CSV
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aprovacao;
