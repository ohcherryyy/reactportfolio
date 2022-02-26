import React, { Component } from "react";
import "./Content.css";
import "../Portfolio.css"

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <p>Designed and developed by Xiaoyan Wu © 2022</p>
      </footer>
    );
  }
}

export default Footer;
