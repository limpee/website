/** @format */
import { Link } from "react-router-dom";

import fullStar from "../../assets/img/full-star.svg";
import halfStar from "../../assets/img/half-star.svg";

function Destaques() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="titulo-cards">Destaques</h2>
          <p>
            Coloque sua localização e veja as pessoas disponíveis em sua
            proximidade
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3 mb-md-0">
          <div className="card d-flex align-items-center p-4 justify-content-around">
            <div className="perfil-card">
              <div className="foto-card"></div>
              <h2 className="text-light mt-1">Maria</h2>
            </div>
            <ul className="lista-card mt-3">
              <li>
                <span>Especialidade:</span> Vidros
              </li>
              <li>
                <span>Experiência:</span> 3 anos
              </li>
              <li>
                <span>Serviços realizados:</span> 400 serviços
              </li>
            </ul>
            <div className="avaliacao-card">
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={halfStar} alt="" />
            </div>
            <Link to="/login" className="btn-orcamento-card btn-block mt-4">
              Orçamento
            </Link>
          </div>
        </div>
        <div className="col-md-3 mb-3 mb-md-0">
          <div className="card d-flex align-items-center p-4 justify-content-around">
            <div className="perfil-card">
              <div className="foto-card"></div>
              <h2 className="text-light mt-1">Maria</h2>
            </div>
            <ul className="lista-card mt-3">
              <li>
                <span>Especialidade:</span> Vidros
              </li>
              <li>
                <span>Experiência:</span> 3 anos
              </li>
              <li>
                <span>Serviços realizados:</span> 400 serviços
              </li>
            </ul>
            <div className="avaliacao-card">
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={halfStar} alt="" />
            </div>
            <Link to="/login" className="btn-orcamento-card btn-block mt-4">
              Orçamento
            </Link>
          </div>
        </div>
        <div className="col-md-3 mb-3 mb-md-0">
          <div className="card d-flex align-items-center p-4 justify-content-around">
            <div className="perfil-card">
              <div className="foto-card"></div>
              <h2 className="text-light mt-1">Maria</h2>
            </div>
            <ul className="lista-card mt-3">
              <li>
                <span>Especialidade:</span> Vidros
              </li>
              <li>
                <span>Experiência:</span> 3 anos
              </li>
              <li>
                <span>Serviços realizados:</span> 400 serviços
              </li>
            </ul>
            <div className="avaliacao-card">
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={halfStar} alt="" />
            </div>
            <Link to="/login" className="btn-orcamento-card btn-block mt-4">
              Orçamento
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card d-flex align-items-center p-4 justify-content-around">
            <div className="perfil-card">
              <div className="foto-card"></div>
              <h2 className="text-light mt-1">Maria</h2>
            </div>
            <ul className="lista-card mt-3">
              <li>
                <span>Especialidade:</span> Vidros
              </li>
              <li>
                <span>Experiência:</span> 3 anos
              </li>
              <li>
                <span>Serviços realizados:</span> 400 serviços
              </li>
            </ul>
            <div className="avaliacao-card">
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={fullStar} alt="" />
              <img src={halfStar} alt="" />
            </div>
            <Link to="/login" className="btn-orcamento-card btn-block mt-4">
              Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destaques;
