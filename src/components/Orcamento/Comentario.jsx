import React from "react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../assets/css/comentario.css";

function Comentario(props) {
  const [avaliacao, setAvaliacao] = useState();

  useEffect(() => {
    let vetorTeste = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.round(props.nota))
        vetorTeste.push(<FaStar size={25} color="#ffc107" />);

      if (i >= Math.round(props.nota)) vetorTeste.push(<FaStar size={25} />);
    }
    setAvaliacao(vetorTeste);
  }, []);

  return (
    <div className="mb-4 box-comentario">
      <h5>{avaliacao}</h5>
      <h6>{props.comentario}</h6>
    </div>
  );
}

export default Comentario;
