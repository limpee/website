import { Outlet } from "react-router-dom";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import PrestadorContext from "../context/PrestadorContext";
import { useState } from "react";
import axios from "../api/api";

function Logado() {
  const [prestador, setPrestador] = useState([]);
  const [idPrestador, setIdPrestador] = useState(null);
  const [prestadorEscolhido, setPrestadorEscolhido] = useState({});

  const response = axios.get("/usuarios/lista");

  function carregar() {
    response.then((resp) => {
      let vetor = resp.data;
      setPrestador(vetor);
    });
  }

  return (
    <div onLoad={carregar}>
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
        <NavbarLogado />
        <Outlet />
        <Footer />
      </PrestadorContext.Provider>
    </div>
  );
}

export default Logado;
