/** @format */

import { Link } from "react-router-dom";
import imgCadastro from "../assets/img/img-cadastro2.svg";
import React, { useState } from "react";
import axios from "../api/api";

const URL_CLIENTE = "/cliente";

function Cadastro() {
  const [isActive, setActive] = useState(false);
  const prestador = () => {
    setActive(false);
  };

  const cliente = () => {
    setActive(true);
  };

  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const [senhaVerificacao, setSenhaVerificacao] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [genero, setGenero] = useState();
  const [telefone, setTelefone] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        URL_CLIENTE,
        JSON.stringify({
          name: nome,
          email,
          senha,
          cpf,
          rg,
          genero,
          telefone,
          cep,
          logradouro,
          numero,
          bairro,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response?.data);
      console.log(JSON.stringify(response));
    } catch (e) {}
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

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="" className="form-label">
                Nome
              </label>
              <input
                onChange={(e) => setNome(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Informe seu nome"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                E-mail
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setSenha(e.target.value)}
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
                onChange={(e) => setSenhaVerificacao(e.target.value)}
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
                onChange={(e) => setCpf(e.target.value)}
                type="text"
                max={14}
                className="form-control campo-cpf"
                placeholder="Informe seu CPF"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="" className="form-label">
                RG
              </label>
              <input
                onChange={(e) => setRg(e.target.value)}
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
                onChange={(e) => setGenero(e.target.value)}
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
                onChange={(e) => setTelefone(e.target.value)}
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
                    onChange={(e) => setCep(e.target.value)}
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
                      onChange={(e) => setLogradouro(e.target.value)}
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
                      onChange={(e) => setNumero(e.target.value)}
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
                    onChange={(e) => setBairro(e.target.value)}
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
