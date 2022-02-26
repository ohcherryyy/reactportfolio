import React, { Component } from 'react';
import './Content.css'

class Imgleft extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className="row proimg" style={{textAlign: "center"}}>
                <div className="col-md-6">
                    {this.props.des}
                  
                  {/* <p className='description'>
                    <br />
                    <br />
                    1<br />
                    After navigating to the destination, ask if searching for
                    near parking lots is needed or not.
                    <br />
                    <br />
                    Providing certain information of parking lots including
                    support to sense parking.
                  </p> */}
                </div>
                <div className="col-md-6">
                  <img
                    src={this.props.img}
                    className="col-md-12 img-responsive"
                    style={{display: "inline-block", maxWidth: this.props.width+"px"}}
                  />
                </div>
              </div>
         );
    }
}
 
export default Imgleft;