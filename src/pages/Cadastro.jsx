import { Link } from "react-router-dom";
import imgCadastro from "../assets/img/img-cadastro2.svg";
import { useState } from "react";

function Cadastro() {
  const [isActive, setActive] = useState(false);
  const prestador = () => {
    setActive(true);
  };

  const cliente = () => {
    setActive(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-content-center">
          <img src={imgCadastro} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column">
          <Link className="btn btn-primary btn-voltar" to="/">
            Voltar
          </Link>
          <p className="frase">
            Encontre <span>aqui</span>
            <br /> seu <span>serviço doméstico</span>!
          </p>

          <div className="tipo-cliente row text-center mt-4 mb-4">
            <div className="col-6" onClick={cliente}>
              Cliente
            </div>
            <div className="col-6 prestador" onClick={prestador}>
              Prestador
            </div>
          </div>

          <form action="">
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Nome
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Informe seu nome"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Informe seu e-mail"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Senha
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Informe sua senha"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Confirmar senha
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Confirmar senha"
              />
            </div>
            {isActive ? (
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  CPF
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Informe seu CPF"
                />
              </div>
            ) : (
              <span></span>
            )}
            <button className="btn btn-primary w-100">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
