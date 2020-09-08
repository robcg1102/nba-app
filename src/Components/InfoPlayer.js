import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

export default class InfoPlayer extends Component {
  state = {
    player: {
      estadisticas: "",
    },
    loading: true,
  };

  componentDidMount() {
    const playerID = this.props.match.params.id;
    axios
      .get(`https://mynba-api.herokuapp.com/api/players/${playerID}`)
      .then((player) => {
        const dataPlayer = player.data;
        this.setState({
          player: dataPlayer,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="content">
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="infoCard">
            <img
              src={`${this.state.player.imgUrl}`}
              alt="..."
              className="imgInfo"
            />
            <div>
              <h3>Nombre:</h3> {this.state.player.nombre}
            </div>
            <div>
              <h3>Nombre completo:</h3> {this.state.player.nombreCompleto}
            </div>
            <hr />
            <p>Temporadas jugadas: {this.state.player.temporadas}</p>
            <p>Altura: {this.state.player.altura} m</p>
            <p>Peso: {this.state.player.peso} kg</p>
            <p>Nacionalidad: {this.state.player.nacionalidad}</p>
            <p>Titulos NBA: {this.state.player.titulos}</p>
            <hr />
            <div>
              <h3>Estadísticas</h3>
              <ul>
                <li>
                  <p>Minutos jugados: {this.state.player.estadisticas.MJ}</p>
                </li>
                <li>
                  <p>
                    Promedio de puntos: {this.state.player.estadisticas.PTS}
                  </p>
                </li>
                <li>
                  <p>Asistencias: {this.state.player.estadisticas.AS}</p>
                </li>
                <li>
                  <p>Rebotes: {this.state.player.estadisticas.RB}</p>
                </li>
                <li>
                  <p>Tiros de tres: {this.state.player.estadisticas.T3}</p>
                </li>
                <li>
                  <p>Tiros de campo: {this.state.player.estadisticas.TC}</p>
                </li>
                <li>
                  <p>Tiros libres: {this.state.player.estadisticas.TL}</p>
                </li>
              </ul>
            </div>

            <Link to="/allplayers" style={{ textDecoration: "none" }}>
              Regresa
            </Link>
          </div>
        </div>
      );
    }
  }
}
