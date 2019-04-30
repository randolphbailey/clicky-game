import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
