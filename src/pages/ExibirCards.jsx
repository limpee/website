/** @format */

import React from "react";

function ExibirCards({ cards }) {
  return <>{cards.length ? cards : <p>"Não há prestadores"</p>}</>;
}

export default ExibirCards;
