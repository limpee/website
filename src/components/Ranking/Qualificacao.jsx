/** @format */

import { useEffect } from "react";
import fullStar from "../../assets/img/full-star.svg";
import halfStar from "../../assets/img/half-star.svg";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function Qualificacao(props) {
  const [avaliacao, setAvaliacao] = useState();

  useEffect(() => {
    let vetorTeste = [];

    for (let i = 0; i < 5; i++) {
      if (i < Math.round(props.nota))
        vetorTeste.push(<FaStar key={i} size={25} color="#ffc107" />);

      if (i >= Math.round(props.nota))
        vetorTeste.push(<FaStar key={i} size={25} />);
    }
    setAvaliacao(vetorTeste);
  }, []);

  return (
    <div className="d-flex justify-content-between w-100 qualificacao p-2 rounded mb-2 mr-2">
      <span>
        {props.posicao} - {props.nome}
      </span>
      <div className="avaliacao-card">{avaliacao}</div>
    </div>
  );
}

export default Qualificacao;
