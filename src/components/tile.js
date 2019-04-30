import React from "react";

class Tile extends React.Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  };

  render() {
    return this.state.numbers.map(number => (
      <div className="col-3 text-center mb-3">
        <img
          src={"/assets/img/img" + number + ".png"}
          alt="test"
          className="img-thumbnail"
          onClick={() => this.props.clickme()}
          key={number}
        />
      </div>
    ));
  }
}

export default Tile;
