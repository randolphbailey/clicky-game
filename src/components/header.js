/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Counter from "./counter";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar">
          <a className="brand">Clicky Game</a>
          <a className="navbar-nav">Click an image to begin!</a>
          <a className="navbar-nav">
            Score: <Counter /> | Top Score: <Counter />
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
