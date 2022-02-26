import React, { Component } from "react";
import "../Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import Scrollspy from "react-scrollspy";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="infobox">
        <div id="prelist" style={{ visibility: "hidden" }}>
          
            <Scrollspy items={this.props.href} className="nav nav-pills nav-stacked" currentClassName="active">
              {this.props.title.map((item, index) => {
                return (
                  <li key={index + item}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                );
              })}
            </Scrollspy>
          
          <p></p>
        </div>
        <div className="returnbtn">
          <Link to="/home">
            <div id="return"></div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
