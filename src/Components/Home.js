import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeInfo">
          <h1>Bienvenido a mi NBA App</h1>
          <p>
            Aquí encontrarás tarjetas de información de 33 jugadores y de los 30
            equipos actuales de la NBA
          </p>
          <div>
            <h3>Jugadores</h3>
            <ul>
              <li>Datos personales</li>
              <li>Número de campeonatos</li>
              <li>Estadísticas de juego</li>
            </ul>
            <h3>Equipos</h3>
            <ul>
              <li>Datos del equipo</li>
              <li>Estadio del equipo</li>
              <li>Conferencia en la que juega</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
