import React from "react";

class Tile extends React.Component {
  state = {};

  render() {
    return (
      <div className="col-3 align-content-center">
        <img
          src="fff.png"
          alt="test"
          className="img-thumbnail"
          onClick={() => this.props.clickme()}
        />
      </div>
    );
  }
}

export default Tile;
