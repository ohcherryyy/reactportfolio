import React, { Fragment } from 'react';
import './Content.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
      <Zoom>
        <img
        src={props.img}
        className="col-md-12 img-responsive"
        style={{maxWidth:props.width+'px'}}
      />
      </Zoom>
      
    </div>
    </Fragment>
    
 );
}
 
export default Img;