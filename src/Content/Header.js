import React, { Fragment } from "react";
import "./Content.css";
import "../Portfolio.css"

function Header(props){
  return (
    <Fragment>
      <header className="banner">
        <div className="bannerimg">
          <img
            src={props.img}
            className="img-responsive"
            style={{maxWidth:props.width+'px'}}
          />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
