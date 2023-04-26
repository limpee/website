import imgLogin from "../assets/img/img-login.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center flex-column">
          <Link className="btn btn-primary btn-voltar" to="/">
            Voltar
          </Link>
          <p className="frase">
            Entre e saiba <span>o que aconteceu</span>
            <br /> enquanto você <span>estava fora</span>!
          </p>

          <form action="">
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
            <div className="mb-4">
              <label htmlFor="" className="form-label">
                Senha
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Informe sua senha"
              />
            </div>
            <Link className="btn btn-primary w-100" to="/logado">
              Entrar
            </Link>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-content-center">
          <img src={imgLogin} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
