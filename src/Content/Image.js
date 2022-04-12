import React, { Fragment } from 'react';
import './Content.css'

function Img(props){
  return ( 
    <Fragment>
        <div className="col-md-12">
      <p
        className='imgtitle'
      >
        {props.title}
      </p>
      <br />
      <img
        src={props.img}
        className="col-md-12 img-responsive"
        style={{maxWidth:props.width+'px'}}
      />
    </div>
    </Fragment>
    
 );
}
 
export default Img;