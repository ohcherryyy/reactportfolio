import React, { Component } from 'react';
import './Content.css'

class Imglefttwo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div className="row proimg" >
                <div className="col-md-4" style={{textAlign: "center"}}>
                  <img
                    src={this.props.img[0]}
                    className="col-md-12 img-responsive"
                    style={{display: "inline-block", maxWidth: this.props.width[0]+"px"}}
                  />
                </div>
                <div className="col-md-4" style={{textAlign: "center"}}>
                  <img
                    src={this.props.img[1]}
                    className="col-md-12 img-responsive"
                    style={{display: "inline-block", maxWidth: this.props.width[1]+"px"}}
                  />
                </div>
                <div className="col-md-4">
                {this.props.des}
                </div>
              </div>
         );
    }
}
 
export default Imglefttwo;