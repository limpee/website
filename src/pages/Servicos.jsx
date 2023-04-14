import Footer from "../components/Footer";
import NavbarLogado from "../components/NavbarLogado";
import "../assets/css/servicos.css";
import Card from "../components/Servicos/Card";

function Servicos() {
  return (
    <div>
      <NavbarLogado />
      <div className="container mt-5 mb-5">
        <div className="row">
          <h2 className="title titulo-cards mb-3">Prestadores de serviços</h2>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Servicos;
