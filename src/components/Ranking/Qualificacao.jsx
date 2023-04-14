import fullStar from "../../assets/img/full-star.svg";
import halfStar from "../../assets/img/half-star.svg";
function Qualificacao(props) {
  return (
    <div className="d-flex justify-content-between w-100 qualificacao p-2 rounded mb-2 mr-2">
      <span>{props.posicao} - Fulano</span>
      <div className="avaliacao-card">
        <img src={fullStar} alt="" />
        <img src={fullStar} alt="" />
        <img src={fullStar} alt="" />
        <img src={fullStar} alt="" />
        <img src={halfStar} alt="" />
      </div>
    </div>
  );
}

export default Qualificacao;
