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

  shuffle = () => {
    if (characters) {
      const shuffledChars = characters.slice();
      for (let i = shuffledChars.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [shuffledChars[i], shuffledChars[rand]] = [
          shuffledChars[rand],
          shuffledChars[i]
        ];
      }
      this.setState({
        characters: shuffledChars
      });
    }
  };
  checkIfClicked = id => {
    this.state.characters.forEach(char => {
      if (char.id === id) {
        if (char.clicked === false) {
          this.handleCorrect(id);
        } else {
          this.handleIncorrect();
        }
      }
    });
  };
  handleCorrect = id => {
    const { characters, score, topScore } = this.state;
    const clickAdjusted = characters.map(char => {
      if (char.id === id) {
        char.clicked = true;
      }
      return char;
    });
    const updatedScore = score + 1;
    const updatedTopScore = updatedScore > topScore ? updatedScore : topScore;
    this.setState(
      {
        characters: clickAdjusted,
        score: updatedScore,
        topScore: updatedTopScore,
        userMessage: "You guessed correctly!"
      },
      () => {
        if (this.state.topScore === 12) {
          this.winGame();
        }
      }
    );
    this.shuffle();
  };
  handleIncorrect = () => {
    const allUnclicked = this.state.characters.map(char => {
      char.clicked = false;
      return char;
    });
    this.setState(
      {
        score: 0,
        characters: allUnclicked,
        userMessage: "You already clicked that one... Resetting score!"
      },
      () => {
        this.shuffle();
      }
    );
  };
  winGame = () => {
    const allUnclicked = this.state.characters.map(char => {
      char.clicked = false;
      return char;
    });
    this.setState({
      characters: allUnclicked,
      instructionsMessage: "You got all 12 in a row, you win!!!",
      topScore: 0,
      score: 0
    });
  };

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
          <div className="row">
            <Tile clickme={() => this.countIncrement()} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
