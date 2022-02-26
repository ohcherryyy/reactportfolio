import React, { Component, Fragment } from 'react';
import './Content.css'

class Img extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <Fragment>
                <div className="col-md-12">
              <p
                className='imgtitle'
              >
                {this.props.title}
              </p>
              <br />
              <img
                src={this.props.img}
                className="col-md-12 img-responsive"
                style={{maxWidth:this.props.width+'px'}}
              />
            </div>
            </Fragment>
            
         );
    }
}
 
export default Img;