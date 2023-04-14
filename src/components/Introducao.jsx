import imgIntro from "../assets/img/toma.svg";
function Introducao() {
  return (
    <div id="introducao" className="block">
      <div className="container pt-5 mb-5 mb-md-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={imgIntro}
              className="img-fluid img-apresentacao"
              id="img-balde"
              alt="introdução"
            />
          </div>
          <div className="col-md-6 align-self-center mb-md-0 mb-4 p-4">
            <h1
              className="title titulo-intro"
              style={{ marginTop: "1.5rem", width: "450px" }}
            >
              Pronto para começar?
            </h1>
            <h4 className="mb-4">Fale Conosco</h4>
            <p id="text-sobre">
              Se cadastre gratuitamente ou contate-nos caso tenha alguma dúvida
              sobre nosso serviço.
            </p>
            <a
              href="cadastro.html"
              className="btn button-primary btn-primary button d-md-inline-block d-block"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducao;
