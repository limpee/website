/** @format */

import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import PrestadorContext from "../context/PrestadorContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axiosApi from "../api/api";

function Orcamento() {
  const { prestador } = useContext(PrestadorContext);
  const idPrestador = useParams();
  const navigate = useNavigate();
  const prestadorEscolhido = prestador.filter(
    (item) => item.id === parseInt(idPrestador.id)
  )[0];
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log(prestadorEscolhido);
  }, []);

  const submit = async (e) => {
    let armario = false;
    let janelas = false;
    let geladeira = false;
    let areaExterna = false;

    if (e.servicos.filter((item) => item === "armario").length !== 0) {
      armario = true;
    }

    if (e.servicos.filter((item) => item === "janelas").length !== 0) {
      janelas = true;
    }

    if (e.servicos.filter((item) => item === "areaExterna").length !== 0) {
      areaExterna = true;
    }

    if (e.servicos.filter((item) => item === "geladeira").length !== 0) {
      geladeira = true;
    }

    let formularioObjeto = {
      tipoServico: e.tipoServico,
      localServico: e.local,
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

    console.log(formularioObjeto);
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
        console.log(res);
        navigate("/logado/servicos");
      });
  };

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
                <form onSubmit={handleSubmit(submit)}>
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Informe o tipo de serviço
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("tipoServico")}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Qual é o local do serviço
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("local")}
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      Quantidade de comodos
                    </label>
                    <input
                      type="number"
                      className="form-control"
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
                        value="armario"
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
                        value="geladeira"
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
                        value="janelas"
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
                        value="geladeira"
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
                        value="areaExterna"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orcamento;
