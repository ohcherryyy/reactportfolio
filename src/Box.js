import React, { Component } from "react";
import "./Box.css";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
import Content from "./Content";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";

class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="col-md-4 boximg">
          <p>{this.props.title}</p>
          <Link to={`/content${this.props.url}`}>
            <img src={this.props.img} className="col-md-12" alt="" />
          </Link>
        </div>
    );
  }
}

Box.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Box;
