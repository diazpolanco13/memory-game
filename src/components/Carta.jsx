import React, { Component } from "react";
import "./styles/Carta.css";
import FlipCard from "react-flipcard-2";

export default class Carta extends Component {
  render() {
    return (
      <div className="carta">
        <FlipCard>
          <div className="portada"></div>
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
        </FlipCard>
      </div>
    );
  }
}
