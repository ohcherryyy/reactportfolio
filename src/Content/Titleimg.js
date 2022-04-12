import React, { Component, Fragment } from "react";
import "./Content.css";
import "../Portfolio.css";

function Titleimg(props){
  return (
    <Fragment>
      <section id={props.id}>
        <h2 className="title" id={props.id}>
          {props.title}
        </h2>
      
      <div className="row">
        <div className="col-md-12">
          <img
            src={props.img}
            className="col-md-12 img-responsive"
            style={{ maxWidth: props.width + "px" }}
          />
        </div>
      </div>
      </section>
    </Fragment>
  );
}

export default Titleimg;
