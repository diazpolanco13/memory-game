import React, { Component } from "react";
import Header from "./Header.jsx";
import Tablero from "./Tablero.jsx";
import "./styles/App.css";
import construirBaraja from "./utils/construirBaraja.jsx";

// Metodo que retorna el estado de la app
const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
  };
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Tablero baraja={this.state.baraja} />
      </div>
    );
  }
}
