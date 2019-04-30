import React from "react";
import "./bootstrap.min.css";
import Header from "./components/header";
import Jumbotron from "./components/jumbotron";
import Game from "./components/game";

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <Game />
    </>
  );
}

export default App;
