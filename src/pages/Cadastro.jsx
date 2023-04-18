import { Link } from "react-router-dom";
import imgCadastro from "../assets/img/img-cadastro2.svg";
import React, { useRef, useState } from "react";

function Cadastro() {
  const cpf = useRef();

  const [isActive, setActive] = useState(false);
  const prestador = () => {
    setActive(false);
  };

  const cliente = () => {
    setActive(true);
  };

  const mascaraCpf = () => {
    console.log(cpf.current.value.length);
    if (cpf.current.value.length === 3 || cpf.current.value.length === 7)
      cpf.current.value += ".";

    if (cpf.current.value.length === 3 || cpf.current.value.length === 11)
      cpf.current.value += "-";
  };

  return (
    <div className="container mb-3">
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
                type="text"
                className="form-control"
                placeholder="Informe seu nome"
                onChange={mascaraCpf}
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
                type="password"
                className="form-control"
                placeholder="Informe sua senha"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Confirmar senha
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar senha"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                CPF (apenas números)
              </label>
              <input
                type="text"
                onChange={mascaraCpf}
                ref={cpf}
                max={14}
                className="form-control campo-cpf"
                placeholder="Informe seu CPF"
                disabled={cpf.length === 14 ? "true" : "false"}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                RG
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Informe seu RG"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Gênero
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Informe seu CPF"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Informe seu telefone"
              />
            </div>
            {isActive ? (
              <>
                <h3 className="mt-3">Endereço</h3>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    CEP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Informe seu logradouro"
                  />
                </div>

                <div className="row">
                  <div className="mb-2 col-md-8">
                    <label htmlFor="" className="form-label">
                      Logradouro
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Informe seu logradouro"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="" className="form-label">
                      Número
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="nº"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Bairro
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Informe seu bairro"
                  />
                </div>
              </>
            ) : (
              <span></span>
            )}
            <button className="btn btn-primary w-100 mt-3">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
