/** @format */

import { Outlet } from "react-router-dom";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import PrestadorContext from "../context/PrestadorContext";
import { useEffect, useState } from "react";
import axios from "../api/api";

function Logado() {
  const [prestador, setPrestador] = useState([]);
  const [idPrestador, setIdPrestador] = useState();
  const [prestadorEscolhido, setPrestadorEscolhido] = useState(null);
  const [isActive, setIsActive] = useState("ranking");

  useEffect(() => {});

  function carregando() {
    const getPrestadores = async () => {
      try {
        const response = await axios.get(
          //"/usuarios/lista/tipoUsuario?tipoUsuario=prestador",
          "usuarios/lista",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setPrestador(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPrestadores();
  }

  return (
    <div onLoad={carregando}>
      <PrestadorContext.Provider
        value={{
          prestador,
          setPrestador,
          idPrestador,
          setIdPrestador,
          prestadorEscolhido,
          setPrestadorEscolhido,
        }}
      >
        <NavbarLogado isActive={isActive} setIsActive={setIsActive} />
        <Outlet />
        <Footer />
      </PrestadorContext.Provider>
    </div>
  );
}

export default Logado;
