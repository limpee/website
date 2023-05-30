/** @format */

import React from "react";
import ItemAprovacao from "../components/Aprovacao/ItemAprovacao";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import "../assets/css/aprovacao.css";

function Aprovacao() {
  return (
    <>
      <NavbarLogado />
      <div className="container aprovacao-container mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards">Aprovação</h2>
          <ItemAprovacao />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aprovacao;
