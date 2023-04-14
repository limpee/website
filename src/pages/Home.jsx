import Introducao from "../components/Introducao";
import Navbar from "../components/Navbar";
import Destaques from "../components/Destaques";
import SobreNos from "../components/SobreNos";
import Footer from "../components/Footer";
// import { Router } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <Introducao />
      <Destaques />
      <SobreNos />
      <Footer />
    </div>
  );
}

export default Home;
