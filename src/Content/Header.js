import React, { Component, Fragment } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <header className="banner">
          <div className="bannerimg">
            <img
              src={this.props.img}
              className="img-responsive"
            />
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
