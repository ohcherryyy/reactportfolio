import React, { Component, Fragment } from "react";
import "./Content.css";
import "../Portfolio.css";

class Titleimg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <section id={this.props.id}>
          <h2 className="title" id={this.props.id}>
            {this.props.title}
          </h2>
        
        <div className="row">
          <div className="col-md-12">
            <img
              src={this.props.img}
              className="col-md-12 img-responsive"
              style={{ maxWidth: this.props.width + "px" }}
            />
          </div>
        </div>
        </section>
      </Fragment>
    );
  }
}

export default Titleimg;
