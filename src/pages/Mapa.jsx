/** @format */
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import axios from "axios";

const Mapa = (props) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const apiMapsLocalizacao = axios.create({
    baseURL: "https://maps.googleapis.com",
  });

  useEffect(() => {
    const loader = new Loader({
      apiKey: "",
      version: "weekly",
      libraries: ["places"],
    });

    let endereco = props.endereco;

    let params = {
      address: endereco,
      key: "",
    };
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
          const map = new google.maps.Map(document.getElementById(props.id), {
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
  }, [apiMapsLocalizacao, lat, lng, loaded, props.endereco]);

  if (!loaded) {
    return (
      <div>
        <div id={props.id}>Carregando...</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="col-md-12">
          <div className="mapa" id={props.id}></div>
        </div>
      </div>
    );
  }
};

export default Mapa;
