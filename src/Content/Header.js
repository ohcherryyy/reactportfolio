import React, { Fragment } from "react";

function Header(props){
  return (
    <Fragment>
      <header className="banner">
        <div className="bannerimg">
          <img
            src={props.img}
            className="img-responsive"
          />
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
