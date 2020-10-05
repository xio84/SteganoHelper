import React, { Component } from "react";
import "./BottomBar.css";

class BottomBar extends Component {
  render() {
    return (
      <div className="bottombar">
        <div className="bottombar-wrapper">
          <footer>
            Copyright &copy; 2020 -&nbsp; Frontend based on 
            <a className="bottombar-a" href="https://github.com/vincentbudianto/Crypto-Helper"> Crypto Helper</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default BottomBar;
