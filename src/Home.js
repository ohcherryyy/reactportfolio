import React, { Component, useState } from "react";
import Work from "./Work";
import "./index.css";
import Footer from "./Content/Footer";
import Ability from "./Echarts/forcegraph";

function Home() {
  const [view, setview] = useState(0);
  return (
    <div className="container-fluid">
      <div className="gridlayout">
        <div className="navbar"></div>
        <header className="pos">
          <div className="topbanner">
            <h1 className="bannertext">
              <a href="#me">
                Hi, this is Xiaoyan
                <img
                  src={process.env.PUBLIC_URL + "/resources/icon.png"}
                  alt="letter w"
                  className="titleicon"
                />
                u
              </a>
            </h1>
            <div className="shortinfo">
              <p>
                I'm a master student passionate about UX design and fronend
                development @ <strong>University of Michigan, Ann Arbor</strong>
                .
                <br />
                The best part? <strong>I built this website myself</strong>, so
                you can see firsthand how I turn my passion into reality.
                <br />
                I've also previously interned as product manager and UX designer
                @<strong>Microsoft, Trip.com Group and NIO</strong>
              </p>
            </div>
            <div className="button">
              <div>
                <a href="#portfolio">
                  <button className="btnstyle">Works</button>
                </a>
              </div>

              <div>
                <a
                  href={
                    process.env.PUBLIC_URL + "/resources/XiaoyanWu_Umich_UX.pdf"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btnstyle">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="content" id="portfolio">
          <h1 className="contenttitle">Works</h1>
          {/* <button
            className="btnstylec"
            onClick={() => (view === 0 ? setview(1) : setview(0))}
          >
            <svg
              t="1650298265967"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1979"
              width="20"
              height="20"
            >
              <path
                d="M886.2 604.8H137.8c-22.1 0-40 17.9-40 40 0 8.4 2.6 16.2 7 22.6 1.9 4.5 4.8 8.7 8.4 12.4L289.5 856c7.8 7.8 18 11.7 28.3 11.7s20.5-3.9 28.3-11.7c15.6-15.6 15.6-40.9 0-56.6L231.3 684.8h654.8c22.1 0 40-17.9 40-40s-17.8-40-39.9-40zM137.8 419.2h748.4c22.1 0 40-17.9 40-40 0-8.4-2.6-16.2-7-22.6-1.4-3.3-3.4-6.5-5.8-9.5L769.2 170.9c-14-17.1-39.2-19.6-56.3-5.6-17.1 14-19.6 39.2-5.6 56.3l96.3 117.6H137.8c-22.1 0-40 17.9-40 40s17.9 40 40 40z"
                p-id="1980"
              ></path>
            </svg>
           Change View
          </button> */}
          <Work />
        </div>
        <div className="aboutme" id="me">
          <div className="myinfo">
            <div className="col-md-12">
              <div className="imgrounded"></div>
            </div>

            <div
              className="col-md-12"
              style={{ color: "#8b8b8b", fontSize: 180 + "%" }}
            >
              <p>Xiaoyan Wu</p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={"#888888"}
                  className="col-md-12"
                  width={40}
                  height={40}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <p className="col-md-12 contactinfo">734-596-1251</p>
              </div>
              <div className="col-md-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={"#888888"}
                  className="col-md-12"
                  width={40}
                  height={40}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <a href="mailto:xiaoyanw@umich.edu">
                  <p className="contactinfo col-md-12">xiaoyanw@umich.edu</p>
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

export default Home;
