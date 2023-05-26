/** @format */

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import PrestadorContext from "../context/PrestadorContext";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosApi from "../api/api";
import Comentario from "../components/Orcamento/Comentario";
import { ToastContainer, toast } from "react-toastify";

function Orcamento() {
  const { prestador } = useContext(PrestadorContext);
  const idPrestador = useParams();
  const navigate = useNavigate();
  const prestadorEscolhido = prestador.filter(
    (item) => item.id === parseInt(idPrestador.id)
  )[0];
  const { register, handleSubmit } = useForm();
  const [comentarios, setComentarios] = useState();

  useEffect(() => {
    axiosApi
      .get("avaliacao", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        let v = [];
        for (let i = 0; i < res.data.length; i++) {
          const item = res.data[i];
          v.push(item);
        }
        let melhoresAvaliacoes = v.sort((a, b) => b.nota - a.nota).slice(0, 3);
        let comentariosTemp = [];

        melhoresAvaliacoes.forEach((item, i) => {
          comentariosTemp.push(
            <Comentario key={i} nota={item.nota} comentario={item.comentario} />
          );
        });
        setComentarios(comentariosTemp);
        console.log(comentarios);
      });
  }, []);

  const submit = async (e) => {
    let armario = false;
    let janelas = false;
    let geladeira = false;
    let areaExterna = false;
    console.log(Array.isArray(e.servicos));

    if (e.servicos === "Armário") {
      armario = true;
    } else if (e.servicos.filter((item) => item === "Armário").length !== 0) {
      armario = true;
    }

    if (
      Array.isArray(e.servicos) &&
      e.servicos.filter((item) => item === "Janelas").length !== 0
    ) {
      janelas = true;
    } else if (e.servicos === "Janelas") {
      janelas = true;
    }

    if (
      Array.isArray(e.servicos) &&
      e.servicos.filter((item) => item === "Área externa").length !== 0
    ) {
      areaExterna = true;
    } else if (e.servicos === "Área externa") {
      areaExterna = true;
    }

    if (
      Array.isArray(e.servicos) &&
      e.servicos.filter((item) => item === "Geladeira").length !== 0
    ) {
      geladeira = true;
    } else if (e.servicos === "Geladeira") {
      geladeira = true;
    }

    let formularioObjeto = {
      tipoServico: e.tipoServico,
      localServico: "",
      qtdComodos: e.comodos,
      qtdBanheiro: e.banheiros,
      cliente: localStorage.getItem("id"),
      prestador: idPrestador.id,
      geladeira: geladeira,
      janelas: janelas,
      armario: armario,
      lavarRoupa: false,
      passarRoupa: false,
      areaExterna,
    };

    await axiosApi
      .post(
        `/formulario-servico?idCliente=${localStorage.getItem(
          "id"
        )}&idPrestador=${idPrestador.id}`,
        formularioObjeto,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        toast.success("O formulário foi enviado para avaliação", {
          autoClose: 1500,
          progress: undefined,
        });
        setTimeout(() => {
          navigate("/logado/notificacoes-cliente");
        }, 1800);
      });
  };

  return (
    <div>
      <ToastContainer />
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
                <form onSubmit={handleSubmit(submit)}>
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Informe o tipo de serviço
                    </label>

                    <select
                      name=""
                      className="form-select"
                      {...register("tipoServico")}
                      required
                    >
                      <option value="Limpeza empresarial">
                        Limpeza empresarial
                      </option>
                      <option value="Limpeza doméstica">
                        Limpeza doméstica
                      </option>
                    </select>
                    {/* 
                    <input
                      type="text"
                      className="form-control"
                      {...register("tipoServico")}
                      required
                    /> */}
                  </div>

                  {/* <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Qual é o local do serviço
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("local")}
                      required
                    />
                  </div> */}

                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Quantidade de comodos
                    </label>
                    <input
                      type="number"
                      placeholder="Ex: 3"
                      className="form-control"
                      min={1}
                      {...register("comodos")}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Quantidade de banheiros
                    </label>
                    <input
                      type="number"
                      min={0}
                      placeholder="Ex: 1"
                      className="form-control"
                      {...register("banheiros")}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="">Selecione:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Armário"
                        {...register("servicos")}
                        id="flexCheckDefault"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Armário
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Geladeira"
                        {...register("servicos")}
                        id="flexCheckDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault2"
                      >
                        Geladeira
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Janelas"
                        {...register("servicos")}
                        id="flexCheckDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault3"
                      >
                        Janelas
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Geladeira"
                        {...register("servicos")}
                        id="flexCheckDefault4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault4"
                      >
                        Geladeira
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Área externa"
                        id="flexCheckDefault5"
                        {...register("servicos")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault5"
                      >
                        Área externa
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Orçamento</button>
                    {/* <Link className="btn btn-primary" role="button">
                      Orçamento
                    </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="perfil-prestador p-3 d-flex justify-content-center align-items-center flex-column">
              <div className="foto-perfil foto-card">
                {/* <img src={prestadorEscolhido.avatar} alt="" /> */}
              </div>
              <div className="divisoria mt-3 mb-3">
                {/* {prestadorEscolhido.nome} */}
              </div>
              {/* <div className="descricao d-flex align-self-start flex-column "> */}
              <div className="descricao  ">
                {prestadorEscolhido && <h2>{prestadorEscolhido.nome}</h2>}
                <p>Especialidades:</p>
                <ul>
                  {prestadorEscolhido.especializacoes.map((item, i) => (
                    <li key={i}>{item.especialidade.descricao}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              style={{
                border: "1px solid #000",
                borderRadius: "5px",
                padding: "10px",
              }}
              className="mt-3"
            >
              <h3 className="title titulo-cards mt-3">Avaliações</h3>
              {comentarios}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
