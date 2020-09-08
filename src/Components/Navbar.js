import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <Link to="/" style={{ textDecoration: "none", color: "white" }} className="contentLogo">
            <img
              className="logo"
              src="https://res.cloudinary.com/robcg1102/image/upload/v1597512330/teams_nba/ball_fopkzm.png"
              alt="..."
            />NBA APP
        </Link>
        <Link
          to="/allplayers"
          style={{ textDecoration: "none", color: "white" }}
        >
          Jugadores
        </Link>
        <Link to="/allteams" style={{ textDecoration: "none", color: "white" }}>
          Equipos
        </Link>
      </div>
    );
  }
}
