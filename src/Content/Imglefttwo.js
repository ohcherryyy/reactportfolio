import React from 'react';
import './Content.css'

function Imglefttwo(props){
  return ( 
    <div className="row proimg" >
        <div className="col-md-4" style={{textAlign: "center"}}>
          <img
            src={props.img[0]}
            className="col-md-12 img-responsive"
            style={{display: "inline-block", maxWidth: props.width[0]+"px"}}
          />
        </div>
        <div className="col-md-4" style={{textAlign: "center"}}>
          <img
            src={props.img[1]}
            className="col-md-12 img-responsive"
            style={{display: "inline-block", maxWidth: props.width[1]+"px"}}
          />
        </div>
        <div className="col-md-4">
        {props.des}
        </div>
      </div>
 );
}
 
export default Imglefttwo;