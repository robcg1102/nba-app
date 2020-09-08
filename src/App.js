import React from "react";
import Home from "./Components/Home";
import AllPlayers from "./Components/AllPlayers";
import InfoPlayer from "./Components/InfoPlayer";
import NavBar from "./Components/Navbar";
import AllTeams from "./Components/AllTeams";
import InfoTeam from "./Components/InfoTeam";
import NotFound from "./Components/NotFound";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allplayers" component={AllPlayers} />
        <Route exact path="/allplayers/:id" component={InfoPlayer} />
        <Route exact path="/allteams" component={AllTeams} />
        <Route exact path="/allteams/:id" component={InfoTeam} />
        <Route component={NotFound} />
      </Switch>
      <div className="footer">
        <p>2020 | Made by <a href="https://robcg1102.netlify.app/" target="_blank" rel="noopener noreferrer">robcg1102</a></p>
      </div>
    </div>
  );
}

export default App;
