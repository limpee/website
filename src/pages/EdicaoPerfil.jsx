/** @format */

import { useForm } from "react-hook-form";
import React from "react";
import axiosApi from "../api/api";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function EdicaoPerfil() {
  const { register, setValue, handleSubmit } = useForm();
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    axiosApi
      .get(`/usuarios/${localStorage.getItem("id")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUsuario(res.data);
      });
  }, []);

  const onSubmit = (e) => {
    let usuarioObjeto = usuario;
    console.log(usuario, usuarioObjeto);

    if (e.telefone !== "") {
      usuarioObjeto.telefone = e.telefone;
    }

    if (e.email !== "") {
      usuarioObjeto.email = e.email;
    }

    if (e.nome !== "") {
      usuarioObjeto.nome = e.nome;
    }

    axiosApi
      .put(`usuarios/perfil/editar/${usuario.id}`, usuarioObjeto, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      });
  };

  return (
    <div className="container container-edicao mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <h2 className="title titulo-cards mb-5">Edite seu perfil</h2>
        <form
          className="d-flex flex-column w-50"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="" className="mt-2">
            Nome:
          </label>
          <input type="text" {...register("nome")} />

          <label htmlFor="" className="mt-2">
            E-mail:
          </label>
          <input type="text" {...register("email")} />

          <label htmlFor="" className="mt-2">
            Telefone:
          </label>
          <input type="text" {...register("telefone")} />

          <button className="btn btn-primary mt-4">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EdicaoPerfil;
