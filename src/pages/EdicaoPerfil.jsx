/** @format */

import React from "react";

function EdicaoPerfil() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h2 className="title titulo-cards">Edite seu perfil</h2>
        <form className="d-flex flex-column w-50">
          <label htmlFor="" className="mt-2">
            Nome:
          </label>
          <input type="text" />

          <label htmlFor="" className="mt-2">
            E-mail:
          </label>
          <input type="text" />

          <label htmlFor="" className="mt-2">
            Telefone:
          </label>
          <input type="text" />

          <button className="btn btn-primary mt-4">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EdicaoPerfil;
