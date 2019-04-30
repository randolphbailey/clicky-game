import React from "react";
import Tile from "./tile";

class Game extends React.Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row mb-3">
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
        </div>
        <div className="row mb-3">
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
        </div>
        <div className="row">
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
          <Tile className="col-3" />
        </div>
      </div>
    );
  }
}

export default Game;
