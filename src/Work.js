import React, { Component, Fragment } from "react"
import "bootstrap/dist/css/bootstrap.css"
import Box from "./Box"
import "./Box.css"

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      designboxObj: [
        {
          name: "Product strategy @ Trip.com",
          img: process.env.PUBLIC_URL + "/resources/boximg/tripfinbox.png",
          url: "/tripfin",
        },
        {
          name: "Senseless parking @ NIO",
          img: process.env.PUBLIC_URL + "/resources/boximg/parkingbox.png",
          url: "/nio",
        },
        {
          name: "Groushop",
          img: process.env.PUBLIC_URL + "/resources/boximg/groubox.png",
          url: "/groushop",
        },
        
        // {
        //   name: "Course registration system",
        //   img: process.env.PUBLIC_URL+"/resources/boximg/courseBOX.png",
        //   url: "",
        // },
        // {
        //   name: "AR tourism map for historical architectures",
        //   img: process.env.PUBLIC_URL+"/resources/boximg/ARBOX.png",
        //   url: "/ar",
        // },
      ],
      visboxObj: [
        {
          name: "Tennis great slam data visualization",
          img: process.env.PUBLIC_URL + "/resources/boximg/sportsbox.png",
          url: "/tennis",
        },
        {
          name: "Covid-19 trend chart in China (2020.1.20-2020.3.8)",
          img: process.env.PUBLIC_URL + "/resources/boximg/epidemicbox.png",
          url: "/covid",
        },
      ],
    }
  }

  render () {
    return (
      <Fragment>
        <div className="boxes">
          <div className="row">
            <div className="col-md-4">
              <p className="category">Product Design</p>
            </div>
          </div>
          <div className="row">
            {this.state.designboxObj.map((item, index) => {
              return (
                <Box
                  key={index + item}
                  title={item.name}
                  img={item.img}
                  url={item.url}
                />
              )
            })}
          </div>
        </div>
        <div className="boxes">
          <div className="row">
            <div className="col-md-4" style={{ textAlign: "left" }}>
              <p className="category">Data Visualization</p>
              <span>
                Recommended to watch on the computer
              </span>
            </div>
          </div>
          <div className="row">
            {this.state.visboxObj.map((item, index) => {
              return (
                <Box
                  key={index + item}
                  title={item.name}
                  img={item.img}
                  url={item.url}
                />
              )
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Work
