import React, { Component } from "react";
import Carta from "./Cartas.jsx";
import "./styles/Tablero.css";

export default class Tablero extends Component {
  render() {
    const cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div className="tablero">
        {cartas.map((carta) => (
          <Carta></Carta>
        ))}
      </div>
    );
  }
}