/** @format */

import axios from "axios";

const apiProjeto = axios.create({
  baseURL: "https://643deb7a6c30feced81c335f.mockapi.io",
});

export default apiProjeto;
