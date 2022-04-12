import React from 'react';
import './Content.css'

function Imgright(props){
  return ( 
    <div className="row proimg" style={{textAlign: "center"}}>
        
        <div className="col-md-6">
          <img
            src={props.img}
            className="col-md-12 img-responsive"
            style={{display: "inline-block", maxWidth: props.width+"px"}}
          />
        </div>
        <div className="col-md-6">
            {props.des}
        </div>
      </div>
 );
}
 
export default Imgright;