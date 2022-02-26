import React, { Component } from "react";
import Work from "./Work";
import './index.css'
import Footer from "./Content/Footer";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="gridlayout">
          <div className="navbar">
            <div className="switchlan">
              <p>
                <a href="../Chinese/index.html">Chinese</a>/En
              </p>
            </div>
          </div>
          <header className="pos">
            <div className="topbanner">
              <h1 className="bannertext">
                <a href="#me">
                  Hi, this is Xiaoyan
                  <img
                    src="../resources/icon.png"
                    alt="letter w"
                    className="titleicon"
                  />
                  u
                </a>
              </h1>
              <div className="shortinfo">
                <p>
                  She is currently studying MSI program (UX track) @ University
                  of Michigan, Ann Arbor
                  <br />
                  previously worked as product manager interns @
                  <strong>Trip.com Group, NIO, PingAn Technology</strong>
                </p>
              </div>
              <div className="button">
                <div>
                  <a href="#portfolio">
                    <button className="btnstyle">Works</button>
                  </a>
                </div>

                <div>
                  <a href="../Resources/XiaoyanWu_Umich_UX.pdf" target="_blank">
                    <button className="btnstyle">Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </header>
          <div className="content" id="portfolio">
            <h1 className="contenttitle">Works</h1>
            <Work />
          </div>
          <div className="aboutme" id="me">
            <div className="myinfo">
              <div className="col-md-12">
                <div className="imgrounded"></div>
              </div>

              <div
                className="col-md-12"
                style={{color: "#8b8b8b",fontSize: 180+"%"}}
              >
                <p>Xiaoyan Wu</p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <svg
                    t="1593534489209"
                    className="icon col-md-12"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3773"
                    width="50"
                    height="50"
                  >
                    <path
                      d="M574.4 824c22.4 8 43.2 9.6 62.4 9.6 30.4 0 54.4-8 68.8-16 35.2-20.8 41.6-49.6 41.6-68.8 0-20.8-9.6-44.8-27.2-75.2-14.4-25.6-59.2-102.4-132.8-59.2 0 0-22.4 12.8-40 25.6-22.4-24-49.6-57.6-73.6-97.6-22.4-40-38.4-80-48-112 19.2-8 41.6-20.8 41.6-20.8 35.2-20.8 41.6-49.6 41.6-68.8 0-20.8-9.6-44.8-27.2-75.2-17.6-30.4-33.6-49.6-52.8-60.8-17.6-11.2-44.8-19.2-80 1.6-6.4 4.8-171.2 102.4 4.8 406.4 68.8 113.6 142.4 185.6 220.8 211.2zM371.2 238.4c6.4-3.2 14.4-8 22.4-8 14.4 0 32 11.2 56 52.8 35.2 62.4 19.2 78.4 0 89.6-11.2 6.4-43.2 22.4-51.2 25.6-4.8 1.6-9.6 4.8-12.8 9.6s-3.2 11.2-1.6 16c11.2 35.2 27.2 86.4 57.6 137.6 28.8 51.2 65.6 91.2 91.2 118.4 3.2 3.2 9.6 6.4 14.4 6.4 6.4 0 11.2-1.6 14.4-6.4 4.8-4.8 35.2-25.6 46.4-32 19.2-11.2 41.6-17.6 78.4 44.8 14.4 24 20.8 43.2 20.8 56 0 9.6-1.6 22.4-20.8 33.6-1.6 1.6-40 22.4-99.2 3.2-67.2-22.4-136-89.6-196.8-195.2-155.2-268.8-19.2-350.4-19.2-352z"
                      fill="#8b8b8b"
                      p-id="3774"
                    ></path>
                  </svg>
                  <p
                    className="col-md-12 contactinfo"
                  >
                    734 882 1102
                  </p>
                </div>
                <div className="col-md-6 mail">
                  <svg
                    t="1593534705806"
                    className="icon col-md-12"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5031"
                    width="40"
                    height="40"
                  >
                    <path
                      d="M891.904 145.92H128.512c-55.808 0-101.376 45.568-101.376 101.376v573.952c0 55.808 45.568 101.376 101.376 101.376h763.392c55.808 0 101.376-45.568 101.376-101.376V247.296c0-55.808-45.568-101.376-101.376-101.376z m-10.24 68.096l-352.768 285.184c-1.024 0.512-2.048 1.536-2.56 2.56-8.704 8.704-23.04 8.704-31.744 0l-2.56-2.56-352.768-285.184h742.4z m10.24 640.512H128.512c-18.432 0-32.768-14.848-32.768-32.768V266.752l351.744 284.672c17.408 16.896 39.936 25.088 62.464 25.088 22.528 0 45.056-8.192 62.464-25.088l351.744-284.672v554.496c0.512 18.432-13.824 33.28-32.256 33.28z"
                      p-id="5032"
                      fill="#8b8b8b"
                    ></path>
                  </svg>
                  <a className="col-md-12" href="mailto:xiaoyanw@umich.edu">
                    <p className="contactinfo mail">
                      xiaoyanw@umich.edu
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
