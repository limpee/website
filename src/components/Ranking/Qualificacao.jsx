/** @format */

import fullStar from "../../assets/img/full-star.svg";
import halfStar from "../../assets/img/half-star.svg";
import { FaStar } from "react-icons/fa";

function Qualificacao(props) {
  return (
    <div className="d-flex justify-content-between w-100 qualificacao p-2 rounded mb-2 mr-2">
      <span>
        {props.posicao} - {props.nome}
      </span>
      <div className="avaliacao-card">
        <FaStar size={25} color="#ffc107" />
        <FaStar size={25} color="#ffc107" />
        <FaStar size={25} color="#ffc107" />
        <FaStar size={25} color="#ffc107" />
        <FaStar size={25} />
      </div>
    </div>
  );
}

export default Qualificacao;
