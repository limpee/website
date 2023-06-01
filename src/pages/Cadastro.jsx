/** @format */

import { Link, useNavigate } from "react-router-dom";
import imgCadastro from "../assets/img/img-cadastro2.svg";
import React, { useState } from "react";
import axiosApi from "../api/api";
import axios from "axios";
import { useForm } from "react-hook-form";

const URL_CLIENTE = "/usuarios";

function Cadastro() {
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

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

  const [cep, setCep] = useState();
  const [isEnderecoActive, setEnderecoActive] = useState();

  const onSubmit = async (e) => {
    console.log(e.image[0]);
    let contadorEspecializacao = 0;
    // e.preventDefault();
    let tipoUsuarioFinal = isActive ? "cliente" : "prestador";
    let especialidades = [];

    let formm = new FormData();
    let documentow = new FormData();
    documentow.append("file", e.documento[0]);
    formm.append("file", e.image[0]);

    if (
      e.especializacao1 !== "" &&
      e.especializacao2 === "" &&
      e.especializacao3 === ""
    ) {
      console.log("entrou1");
      contadorEspecializacao = 1;
    } else if (
      e.especializacao1 !== "" &&
      e.especializacao2 !== "" &&
      e.especializacao3 !== ""
    ) {
      contadorEspecializacao = 3;
    } else {
      console.log("entrou2");
      contadorEspecializacao = 2;
    }

    let valoresEspecializacoes = [
      e.especializacao1,
      e.especializacao2,
      e.especializacao3,
    ];

    console.log(valoresEspecializacoes, contadorEspecializacao);
    console.log(
      e.especializacao1 !== "" &&
        e.especializacao2 !== "" &&
        e.especializacao3 === "",
      e.especializacao1,
      e.especializacao2,
      e.especializacao3
    );

    for (let i = 0; i < contadorEspecializacao; i++) {
      especialidades.push(valoresEspecializacoes[i]);
    }

    const usuarioObjeto = {
      nome: e.nome,
      email: e.email,
      senha: e.senha,
      genero: e.genero,
      tipoUsuario: tipoUsuarioFinal,
      enderecoDTO: {
        cep: cep,
        complemento: e.complemento,
        logradouro: e.logradouro,
        bairro: e.bairro,
        numero: e.numero,
        cidade: e.cidade,
        estado: e.uf,
      },
      especialidades: especialidades,
    };
    console.log(JSON.stringify(usuarioObjeto));

    try {
      await axiosApi
        .post(URL_CLIENTE, usuarioObjeto, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (!isActive) {
            axiosApi
              .post(`/imagens/${res.data.id}`, formm, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((res) => {
                console.log(res);
              });
            console.log(formm, documentow);
            axiosApi
              .post(`/documentos/${res.data.id}`, documentow, {
                headers: { "Content-Type": "multipart/form-data" },
              })
              .then((res) => {
                console.log(res);
              });
          }
          navigate("/login");
        });
    } catch (e) {
      console.log(e);
    }
  };

  const procurarCep = (e) => {
    console.log(e.target.value);
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
            <div
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
                      placeholder="Informe seu gênero"
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

              {!isActive ? (
                <div className="row">
                  <h2>Imagem</h2>
                  <input type="file" name="image" {...register("image")} />
                  <h2>Documento</h2>
                  <input
                    type="file"
                    name="documento"
                    {...register("documento")}
                  />
                </div>
              ) : (
                ""
              )}
              <div className={isActive ? "info-endereco" : ""}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Especialização 1
                      </label>
                      <input
                        {...register("especializacao1")}
                        // onChange={(e) => setSenha(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Informe sua especialização"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Especialização 2 (Opcional)
                      </label>
                      <input
                        {...register("especializacao2")}
                        // onChange={(e) => setSenha(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Informe sua expecialização"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Especialização 3 (Opcioanl)
                      </label>
                      <input
                        {...register("especializacao3")}
                        // onChange={(e) => setSenha(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Informe sua especialização"
                      />
                    </div>
                  </div>
                </div>
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
                  onChange={(e) => setCep(e.target.value)}
                  // onKeyDown={pegarCep(cep)}
                  type="text"
                  className="form-control"
                  placeholder="Informe seu logradouro"
                  // {...register("cep")}
                />
              </div>

              <div className="row">
                <div className="col-md-8">
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Bairro
                    </label>
                    <input
                      //onChange={(e) => setBairro(e.target.value)}
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
                    //onChange={(e) => setLogradouro(e.target.value)}
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
                    //onChange={(e) => setNumero(e.target.value)}
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
