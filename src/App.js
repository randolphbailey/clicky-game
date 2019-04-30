/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./bootstrap.min.css";
import Counter from "./components/counter";
import Tile from "./components/tile";

class App extends React.Component {
  state = {
    counter: 0,
    topScore: 0
  };

  countIncrement() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        <div className="container">
          <nav className="navbar">
            <a className="brand">Clicky Game</a>
            <a className="navbar-nav">Click an image to begin!</a>
            <a className="navbar-nav">
              Score: <Counter count={this.state.counter} /> | Top Score:{" "}
              <Counter count={this.state.topScore} />
            </a>
          </nav>
        </div>
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">
              Click on an image to earn points, but don't click on any more than
              once!
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mb-3">
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
          </div>
          <div className="row mb-3">
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
          </div>
          <div className="row">
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
            <Tile clickme={() => this.countIncrement()} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
