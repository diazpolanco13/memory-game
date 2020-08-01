import React, { Component } from "react";
import "./styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo">React - Memory</div>
        <div>
          <button className="boton-reiniciar">Reiniciar</button>
        </div>
        <div className="titulo">Intentos: </div>
      </header>
    );
  }
}
