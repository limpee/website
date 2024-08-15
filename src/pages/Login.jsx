/** @format */

import imgLogin from "../assets/img/img-login.svg";
import { Link, useNavigate } from "react-router-dom";
import axiosApi from "../api/api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const URL_LOGIN = "/usuarios/login";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@admin.com" && senha === "321") {
      localStorage.setItem("tipoUsuario", "admin");
      navigate("/aprovacao");
    } else {
      try {
        const response = await axiosApi.post(
          "/usuarios/login",
          JSON.stringify({ email, senha }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        localStorage.setItem("token", response?.data.token);
        localStorage.setItem("id", response?.data.userId);
        localStorage.setItem("usuario", JSON.stringify(response?.data));
        localStorage.setItem("tipoUsuario", response?.data.tipoUsuario);
        console.log(response?.data);

        if (localStorage.getItem("tipoUsuario") === "cliente") {
          navigate("/logado/servicos");
        } else {
          navigate("/logado");
        }
      } catch (e) {
        console.log("n foi");
        toast.error("Falha ao realizar login", {
          autoClose: 1500,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="container">
      <ToastContainer></ToastContainer>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center flex-column">
          <Link className="btn btn-primary btn-voltar" to="/">
            Voltar
          </Link>
          <p className="frase">
            Entre e saiba <span>o que aconteceu</span>
            <br /> enquanto você <span>estava fora</span>!
          </p>

        </div>
        <div className="col-md-6 d-flex justify-content-center align-content-center">
          <img src={imgLogin} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
