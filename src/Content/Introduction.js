import React, { Component, Fragment } from 'react';

class Intro extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div className='introduction'>
                {this.props.intro}
            </div>
         );
    }
}
 
export default Intro;