/** @format */
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Duvidas = () => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyALL64Q1I3R4QkSt-kbeG9HQGPAkSsUAq0",
  // });
  // if (!isLoaded) return <div>Carregando...</div>;
  // return <Map />;

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const apiMapsLocalizacao = axios.create({
    baseURL: "https://maps.googleapis.com",
  });

  const loader = new Loader({
    apiKey: "AIzaSyALL64Q1I3R4QkSt-kbeG9HQGPAkSsUAq0",
    version: "weekly",
    libraries: ["places"],
  });

  let endereco = "Rua Haddock Lobo";

  let params = {
    address: endereco,
    key: "AIzaSyALL64Q1I3R4QkSt-kbeG9HQGPAkSsUAq0",
  };

  useEffect(() => {
    async function carregarLocalizacao() {
      await apiMapsLocalizacao
        .get("/maps/api/geocode/json", { params: params })
        .then((response) => {
          setLat(response.data.results[0].geometry.location.lat);
          setLng(response.data.results[0].geometry.location.lng);
          setLoaded(true);
        });
    }

    async function carregarMapa() {
      await loader
        .load()
        .then((google) => {
          const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: lat, lng: lng },
            zoom: 20,
          });

          const marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            title: "Minha localização",
          });
        })
        .catch((e) => {
          console.log("Erro: " + e);
        });
    }

    if (!loaded) {
      carregarLocalizacao();
    } else {
      carregarMapa();
    }
  }, [loaded]);

  function carregarMapa() {}

  if (!loaded) {
    return (
      <div className="container">
        <div id="map">Carregando...</div>
      </div>
    );
  } else {
    return (
      <div onLoad={carregarMapa}>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title titulo-cards">Dúvidas</h3>
              <p>Tire suas dúvidas aqui:</p>

              <div className="col-md-12">
                <div className="mapa" id="map"></div>
                <h3>teste</h3>
                {/* <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}></GoogleMap> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Duvidas;
