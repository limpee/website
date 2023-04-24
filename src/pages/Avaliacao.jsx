/** @format */

import Footer from "../components/Footer";
import NavbarLogado from "../components/NavbarLogado";
import emptyStar from "../assets/img/empty-star.svg";
import "../assets/css/avaliacao.css";
import fullStar from "../assets/img/full-star.svg";
import { useRef } from "react";

function Avaliacao() {
  const estrela1 = useRef();
  const estrela2 = useRef();
  const estrela3 = useRef();
  const estrela4 = useRef();
  const estrela5 = useRef();

  function colocarEstrela(e, estrela) {
    if (estrela === 1) estrela1.current.src = fullStar;

    if (estrela === 2) {
      estrela1.current.src = fullStar;
      estrela2.current.src = fullStar;
    }

    if (estrela === 3) {
      estrela1.current.src = fullStar;
      estrela2.current.src = fullStar;
      estrela3.current.src = fullStar;
    }
    if (estrela === 4) {
      estrela1.current.src = fullStar;
      estrela2.current.src = fullStar;
      estrela3.current.src = fullStar;
      estrela4.current.src = fullStar;
    }
    if (estrela === 5) {
      estrela1.current.src = fullStar;
      estrela2.current.src = fullStar;
      estrela3.current.src = fullStar;
      estrela4.current.src = fullStar;
      estrela5.current.src = fullStar;
    }
  }

  function tirarEstrela(e, estrela) {
    if (estrela === 1) estrela1.current.src = emptyStar;

    if (estrela === 2) {
      estrela1.current.src = emptyStar;
      estrela2.current.src = emptyStar;
    }

    if (estrela === 3) {
      estrela1.current.src = emptyStar;
      estrela2.current.src = emptyStar;
      estrela3.current.src = emptyStar;
    }
    if (estrela === 4) {
      estrela1.current.src = emptyStar;
      estrela2.current.src = emptyStar;
      estrela3.current.src = emptyStar;
      estrela4.current.src = emptyStar;
    }
    if (estrela === 5) {
      estrela1.current.src = emptyStar;
      estrela2.current.src = emptyStar;
      estrela3.current.src = emptyStar;
      estrela4.current.src = emptyStar;
      estrela5.current.src = emptyStar;
    }
  }

  return (
    <div>
      <NavbarLogado />
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title titulo-cards">Avaliação</h2>
            <p>Deixe aqui a sua nota sobre o serviço do prestador</p>
          </div>

          <div className="col-md-6">
            <p>O serviço foi concluído?</p>
            <button>Sim</button>
            <button>Não/Parcialmente</button>
          </div>

          <div className="col-md-6">
            <h3>Nota</h3>
            <div className="d-flex justify-content-between">
              <img
                src={emptyStar}
                alt=""
                className="estrelas-avaliacao"
                ref={estrela1}
                onClick={(e) => colocarEstrela(e, 1)}
                onMouseLeave={(e) => tirarEstrela(e, 1)}
              />
              <img
                src={emptyStar}
                alt=""
                className="estrelas-avaliacao"
                ref={estrela2}
                onClick={(e) => colocarEstrela(e, 2)}
                onMouseLeave={(e) => tirarEstrela(e, 2)}
              />
              <img
                src={emptyStar}
                alt=""
                ref={estrela3}
                className="estrelas-avaliacao"
                onClick={(e) => colocarEstrela(e, 3)}
                onMouseLeave={(e) => tirarEstrela(e, 3)}
              />
              <img
                src={emptyStar}
                alt=""
                ref={estrela4}
                className="estrelas-avaliacao"
                onClick={(e) => colocarEstrela(e, 4)}
                onMouseLeave={(e) => tirarEstrela(e, 4)}
              />
              <img
                src={emptyStar}
                alt=""
                ref={estrela5}
                className="estrelas-avaliacao"
                onClick={(e) => colocarEstrela(e, 5)}
                onMouseLeave={(e) => tirarEstrela(e, 5)}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Avaliacao;
