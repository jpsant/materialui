import React from "react";
import "./App.scss";

import Inputs from "../inputs";
import Form from "../Form";

function Home() {
  return (
    <div className="app">
      <h1>Testes de Inputs:</h1>
      <Inputs />
      <div className="app__form">
        <h1>Exemplo de Form: (utilizando a grid do Material-ui)</h1>
        <Form />
      </div>
    </div>
  );
}

export default Home;
