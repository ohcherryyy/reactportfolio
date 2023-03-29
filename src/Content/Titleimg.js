import React, { Component, Fragment } from "react";
import "./Content.css";
import "../Portfolio.css";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Titleimg(props) {
  return (
    <Fragment>
      <section id={props.id}>
        <h2 className="title" id={props.id}>
          {props.title}
        </h2>

        <div className="row">
          <div className="col-md-12">
            <Zoom>
            <img
              src={props.img}
              className="col-md-12 img-responsive"
              style={{ maxWidth: props.width + "px" }}
            />
            </Zoom>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Titleimg;
