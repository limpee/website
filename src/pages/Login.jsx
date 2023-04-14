function Login() {
  return (
    <div className="row">
      <div className="col-md-6">
        <p>Entre e saiba o que aconteceu enquanto você estava fora!</p>

        <form action="">
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="Informe seu e-mail" />
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="Informe sua senha" />
          <button>Entrar</button>
        </form>
      </div>
      <div className="col-md-6">
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Login;
