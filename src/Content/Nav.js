import React from "react";
import "../Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link} from "react-router-dom";
import Scrollspy from "react-scrollspy";

function Nav(props){
  return (
    <nav className="infobox">
      <div id="prelist" style={{ visibility: "hidden" }}>
        
          <Scrollspy items={props.href} className="nav nav-pills nav-stacked" currentClassName="active">
            {props.title.map((item, index) => {
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

export default Nav;
