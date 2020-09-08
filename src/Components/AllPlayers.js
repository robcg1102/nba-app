import React, { Component } from "react";
import axios from "axios";
import "./Allplayers.css";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class AllPlayers extends Component {
  state = {
    allplayers: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("https://mynba-api.herokuapp.com/api/players").then((players) => {
      this.setState({
        allplayers: players.data,
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
            {this.state.allplayers.map((player, index) => {
              return (
                <Link
                  key={index}
                  to={`/allplayers/${player._id}`}
                  className="cardPlayer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>{player.nombre}</p>
                  <img src={player.imgUrl} alt="..." />
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
