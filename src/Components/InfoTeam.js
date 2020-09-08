import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

export default class InfoTeam extends Component {
  state = {
    team: {},
    loading: true,
  };

  componentDidMount() {
    const teamID = this.props.match.params.id;
    axios
      .get(`https://mynba-api.herokuapp.com/api/teams/${teamID}`)
      .then((team) => {
        const dataTeam = team.data;
        this.setState({
          team: dataTeam,
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
          <div className="infoCardTeam">
            <div className="imgteamInfo">
              <img src={`${this.state.team.imgurl}`} alt="..." />
            </div>
            <div>
              <p>Nombre del equipo: {this.state.team.nombre}</p>
              <p>Ciudad: {this.state.team.ciudad}</p>
              <p>Fundación: {this.state.team.fundado}</p>
              <p>Conferencia: {this.state.team.conferencia}</p>
              <p>Pabellón: {this.state.team.pabellon}</p>
            </div>
            <Link to="/allteams" style={{ textDecoration: "none" }}>
              Regresa
            </Link>
          </div>
        </div>
      );
    }
  }
}
