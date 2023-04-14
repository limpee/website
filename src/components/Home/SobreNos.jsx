import imgSobre from "../../assets/img/img-sobre.svg";

function SobreNos() {
  return (
    <div id="sobre" className="block">
      <div className="container mt-5 mb-md-5 mb-0">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2 className="title text-uppercase efeito-titulos">Sobre nós</h2>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h4>Projeto</h4>
            <p>
              Somos um grupo de alunos que teve a ideia de criar um site para
              ajudar as pessoas a encontrar prestadores de serviços de limpeza
              confiáveis e acessíveis. Nós acreditamos que todo mundo merece ter
              uma casa limpa e organizada, mas sabemos que pode ser difícil
              encontrar alguém em quem você possa confiar para fazer o trabalho
              bem feito.
            </p>
            <p>
              Nosso objetivo é tornar mais fácil para as pessoas encontrar
              prestadores de serviços de limpeza que atendam às suas
              necessidades e orçamento.
            </p>
          </div>
          <div className="col-md-6">
            <img src={imgSobre} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
