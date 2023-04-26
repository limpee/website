/** @format */

import { Link } from "react-router-dom";
import fotoPerfil from "../assets/img/foto-perfil.jpg";
import { useContext } from "react";
import PrestadorContext from "../context/PrestadorContext";

function Orcamento() {
  const user = useContext(PrestadorContext);

  return (
    <div>
      <div className="container conteudo mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title titulo-cards mb-4">Informações pessoais</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="container-formulario">
              <div className="formulario">
                <form action="">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Uma pergunta qualquer
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="">Escolha um:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Default checkbox
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Default checkbox
                      </label>
                    </div>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Uma pergunta qualquer
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="" className="form-label">
                      Uma pergunta qualquer
                    </label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary">Orçamento</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="perfil-prestador p-3 d-flex justify-content-center align-items-center flex-column">
              <div className="foto-perfil foto-card">
                <img src={fotoPerfil} alt="" />
              </div>
              <div className="divisoria mt-3 mb-3"></div>
              {/* <div className="descricao d-flex align-self-start flex-column "> */}
              <div className="descricao  ">
                <p>Maria Fátima</p>
                <p>Especialidades:</p>
                <ul>
                  <li>Vidros</li>
                  <li>Vidros</li>
                  <li>Vidros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
