import React, { Component } from "react";
import Carta from "./Carta.jsx";
import "./styles/Tablero.css";

export default class Tablero extends Component {
  render() {
    return (
      <div className="tablero">
        {this.props.baraja.map((carta) => (
          <Carta icono={carta.icono} />
        ))}
      </div>
    );
  }
}
