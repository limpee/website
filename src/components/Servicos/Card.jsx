/** @format */

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imgPerfil from "../../assets/img/perfil.jpg";

function Card(props) {
  const [esp, setEsp] = useState([]);

  useEffect(() => {
    const especia = [];
    props.especializacoes.forEach((item) => {
      especia.push(item.especialidade.descricao);
    });
    setEsp(especia);
  }, []);

  return (
    <div className="col-md-3 mb-3">
      <div className="card-servico p-3 d-flex justify-content-between flex-column align-items-center">
        <div className="perfil">
          <div className="foto-perfil foto-card m-auto">
            {props.img !== "" && (
              <img src={`data:image/jpeg;base64,${props.img}`} alt="" />
            )}
            {props.img === "" && <img src={imgPerfil} alt="" />}
          </div>
          <h2>{props.nome}</h2>
        </div>
        <div className="especialidades">
          <h5>Especialidades</h5>
          <ul>
            {esp.map((item) => (
              <li key={item + "1"}>{item}</li>
            ))}
          </ul>
        </div>
        <Link
          className="btn btn-primary w-75"
          to={`/logado/orcamento/${props.id}`}
        >
          Orçamento
        </Link>
      </div>
    </div>
  );
}

export default Card;
