/** @format */

import { Link } from "react-router-dom";
import imgCadastro from "../assets/img/img-cadastro2.svg";
import React, { useState } from "react";
import axiosApi from "../api/api";
import axios from "axios";
import { useForm } from "react-hook-form";

const URL_CLIENTE = "/usuarios";

function Cadastro() {
  const [isActive, setActive] = useState(false);
  const prestador = () => {
    setActive(false);
    console.log("virou prestador", isActive);
    setEnderecoActive(false);
  };

  const cliente = () => {
    setActive(true);
    console.log("virou cliente", isActive);
    setEnderecoActive(false);
  };

  const { register, setValue, handleSubmit } = useForm();

  // const [nome, setNome] = useState();
  // const [senha, setSenha] = useState();
  // const [senhaVerificacao, setSenhaVerificacao] = useState();
  // const [email, setEmail] = useState();
  // const [cpf, setCpf] = useState();
  // const [rg, setRg] = useState();
  // const [genero, setGenero] = useState();
  // const [telefone, setTelefone] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [numero, setNumero] = useState();
  const [bairro, setBairro] = useState();
  const [isEnderecoActive, setEnderecoActive] = useState();

  const onSubmit = async (e) => {
    // e.preventDefault();
    let tipoUsuarioFinal = isActive ? "cliente" : "prestador";

    try {
      const response = await axiosApi.post(
        URL_CLIENTE,
        JSON.stringify({
          name: e.nome,
          email: e.email,
          senha: e.senha,
          // cpf: e.cpf,
          // rg: e.rg,
          genero: e.genero,
          // telefone: e.telefone,
          // cep: e.cep,
          // logradouro: e.logradouro,
          // numero: e.numero,
          // bairro: e.bairro,
          // image: e.image,
          tipoUsuario: tipoUsuarioFinal,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response?.data);
      console.log(JSON.stringify(response));
    } catch (e) {}
  };

  const procurarCep = (e) => {
    if (e.target.value.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${e.target.value}/json/`)
        .then((response) => {
          setValue("logradouro", response.data.logradouro);
          setValue("bairro", response.data.bairro);
          setValue("cidade", response.data.localidade);
          setValue("cidade", response.data.localidade);
          setValue("uf", response.data.uf);
          setValue("complemento", response.data.complemento);
        });
    }
    setCep(e.target.value);
  };

  function mostrarCliente() {
    setActive(true);
  }

  function ativarEndereco() {
    setEnderecoActive(true);
  }
  function desativarEndereco() {
    setEnderecoActive(false);
  }

  return (
    <div className="container mb-3" onLoad={mostrarCliente}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-content-center">
          <img src={imgCadastro} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-center flex-column">
          <Link className="btn btn-primary btn-voltar" to="/">
            Voltar
          </Link>
          {/* <p className="frase">
            Encontre <span>aqui</span>
            <br /> seu <span>serviço doméstico</span>!
          </p> */}

          <div className="tipo-cliente row text-center mt-4 mb-4">
            <div id="cliente"
              className={isActive ? "col-6 cliente-ativo" : "col-6"}
              onClick={cliente}
            >
              Cliente
            </div>
            <div
              className={isActive ? "col-6 prestador" : "col-6 prestador-ativo"}
              onClick={prestador}
            >
              Prestador
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row navegacao-form">
              <div
                className={
                  isEnderecoActive ? "d-flex justify-content-start" : "esconde"
                }
              >
                <div onClick={desativarEndereco} className="btn btn-primary">
                  Anterior
                </div>
              </div>
              <span className="contador-pagina">
                {isEnderecoActive ? "2" : "1"}/2
              </span>
              <div
                className={
                  isEnderecoActive ? "esconde" : " d-flex justify-content-end"
                }
              >
                <div onClick={ativarEndereco} className="btn btn-primary">
                  Próximo
                </div>
              </div>
            </div>
            <div className={isEnderecoActive ? "esconde-geral" : ""}>
              <h3 className="mt-3">Geral</h3>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Nome
                    </label>
                    <input
                      {...register("nome")}
                      // onChange={(e) => setNome(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu nome"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      E-mail
                    </label>
                    <input
                      {...register("email")}
                      // onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      placeholder="Informe seu e-mail"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Senha
                    </label>
                    <input
                      {...register("senha")}
                      // onChange={(e) => setSenha(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Informe sua senha"
                    />
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Confirmar senha
                    </label>
                    <input
                      {...register("genero")}
                      onChange={(e) => setSenhaVerificacao(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Confirmar senha"
                    />
                  </div>
                </div> */}
              </div>

              <div className="d-none">
                <input
                  type="text"
                  {...register("tipo")}
                  value={isActive ? "cliente" : "prestador"}
                />
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      CPF (apenas números)
                    </label>
                    <input
                      {...register("cpf")}
                      // onChange={(e) => setCpf(e.target.value)}
                      type="text"
                      max={14}
                      className="form-control campo-cpf"
                      placeholder="Informe seu CPF"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      RG
                    </label>
                    <input
                      {...register("rg")}
                      // onChange={(e) => setRg(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu RG"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Gênero
                    </label>
                    <input
                      {...register("genero")}
                      // onChange={(e) => setGenero(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu CPF"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Telefone
                    </label>
                    <input
                      {...register("telefone")}
                      // onChange={(e) => setTelefone(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu telefone"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <h2>Imagem</h2>
                <input type="file" name="image" {...register("image")} />
              </div>
            </div>

            <div className={isEnderecoActive ? "" : "info-endereco"}>
              <h3 className="mt-3">Endereço</h3>
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  CEP
                </label>
                <input
                  onBlur={(e) => procurarCep(e)}
                  // onKeyDown={pegarCep(cep)}
                  type="text"
                  className="form-control"
                  placeholder="Informe seu logradouro"
                  {...register("cep")}
                />
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Bairro
                    </label>
                    <input
                      onChange={(e) => setBairro(e.target.value)}
                      {...register("bairro")}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu bairro"
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Complemento
                    </label>
                    <input
                      // onChange={(e) => setBairro(e.target.value)}
                      {...register("complemento")}
                      type="text"
                      className="form-control"
                      placeholder="Informe o complemento"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-2 col-md-8">
                  <label htmlFor="" className="form-label">
                    Logradouro
                  </label>
                  <input
                    onChange={(e) => setLogradouro(e.target.value)}
                    {...register("logradouro")}
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
                    {...register("numero")}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Cidade
                    </label>
                    <input
                      // onChange={(e) => setBairro(e.target.value)}
                      {...register("cidade")}
                      type="text"
                      className="form-control"
                      placeholder="Informe sua cidade"
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Estado
                    </label>
                    <input
                      // onChange={(e) => setBairro(e.target.value)}
                      {...register("uf")}
                      type="text"
                      className="form-control"
                      placeholder="Informe seu estado"
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-3">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
