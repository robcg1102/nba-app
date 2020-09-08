import React, { Component } from "react";
import axios from "axios";
import "./Allplayers.css";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class AllTeams extends Component {
  state = {
    allteams: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("https://mynba-api.herokuapp.com/api/teams").then((teams) => {
      this.setState({
        allteams: teams.data,
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
          <div className="contentPlayers">
            {this.state.allteams.map((team, index) => {
              return (
                <Link
                  key={index}
                  to={`/allteams/${team._id}`}
                  className="cardPlayer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>{team.nombre}</p>
                  <img src={team.imgurl} alt="..." />
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
