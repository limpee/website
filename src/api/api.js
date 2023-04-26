/** @format */

import axios from "axios";

const apiProjeto = axios.create({
  // baseURL: "https://643deb7a6c30feced81c335f.mockapi.io",
  baseURL: "http://localhost:8080",
});

apiProjeto.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`; // adiciona o cabeçalho de autorização com o token JWT
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiProjeto;
