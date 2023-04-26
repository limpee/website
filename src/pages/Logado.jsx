import { Outlet } from "react-router-dom";
import NavbarLogado from "../components/NavbarLogado";
import Footer from "../components/Footer";
import PrestadorContext from "../context/PrestadorContext";
import { useState, useEffect } from "react";
import axios from "../api/api";

function Logado() {
  const [prestador, setPrestador] = useState([]);
  // const [idPrestador, setIdPrestador] = useState(null);
  const response = axios.get("/cards");

  function carregar() {
    response.then((resp) => {
      let vetor = resp.data;
      // console.log(vetor);
      setPrestador(vetor);
      // let cardsTemp = [];
      // for (let i = 0; i < vetor.length; i++) {
      //   cardsTemp.push(
      //     <Card key={i} img={vetor[i].avatar} nome={vetor[i].name} />
      //   );
      // }
      // setCards(cardsTemp);
    });
  }
  // useEffect(() => {
  //   response.then((resp) => {
  //     let vetor = resp.data;
  //     setPrestador(vetor);
  //     // let cardsTemp = [];
  //     // for (let i = 0; i < vetor.length; i++) {
  //     //   cardsTemp.push(
  //     //     <Card key={i} img={vetor[i].avatar} nome={vetor[i].name} />
  //     //   );
  //     // }
  //     // setCards(cardsTemp);
  //   });
  // }, [response]);
  return (
    <div onLoad={carregar}>
      <PrestadorContext.Provider value={{ prestador, setPrestador }}>
        <NavbarLogado />
        <Outlet />
        <Footer />
      </PrestadorContext.Provider>
    </div>
  );
}

export default Logado;
