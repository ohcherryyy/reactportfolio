import React, { Fragment } from 'react';

function Bullet(props){
    return(
        <Fragment>
            <div className="row">
            <div className="col-md-12">
              <p className='description '>
                {props.title}
              </p>
            </div>
            <div className="col-md-12">
              <ul className='compete'>
                  {props.point.map((item,key)=>{
                      return(<li key={item+key}>{item}</li>)
                  })}
              </ul>
            </div>
          </div>
        </Fragment>
    )
}

export default Bullet