import React, { Component } from "react";
import Header from "./Content/Header";
import Img from "./Content/Image";
import Nav from "./Content/Nav";
import "./Content/Content.css";
import "./Portfolio.css";
import Titleimg from "./Content/Titleimg";
import Bullet from "./Content/Bullet";
import ARcharts from "./Echarts/archarts";
import Imgright from "./Content/Imgright";
import Imgleft from "./Content/Imgleft";
import Imglefttwo from "./Content/Imglefttwo";
import Work from "./Work"
import { Link } from "react-router-dom"
import Footer from "./Content/Footer"

class ARtour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: [
        { title: "Competitive analysis", href: "#bg" },
        { title: "Research", href: "#research" },
        { title: "Solutions", href: "#prep" },
        { title: "UX Workflow", href: "#workflow" },
        { title: "Prototyping", href: "#prototype" },
      ],
      href: [
        "bg",
        "research",
        "prep",
        "workflow",
        "prototype",
      ],
    };
  }
  state = {};

  render() {
    return (
      <div>
        <Header
          img={process.env.PUBLIC_URL + "/resources/ar/arbanner.png"}
          width={550}
        />
        <div className="gridLayout">
          <Nav title={this.state.navtitle} href={this.state.href} />
          <div className="container majorcontent">
          <div className="content">
            <div className="introduction">
              <p>
                <strong style={{ color: "#eab12d" }}>AR tourism map </strong>is
                an app with the theme of preservation of Shanghai historical
                buildings, trying to solve the problem of
                <strong style={{ color: "#eab12d" }}>
                  lacking attetions to historical buildings, fewer tourists
                  routes of historical buildings and single and tedious spot
                  interpretations.
                </strong>
                Users can choose their interested maps to start the journey;
                utilizing AR technology to recognize the plaque and then to
                achieve the models and VR videos. After the journey, a route
                check-in card will be generated that can be shared to social
                platforms.
                <br />
                <br />
                It was a group work. I was mainly responsible for conducting
                competitor research, user research, designing functions and UX
                workflow of the system. I also developed AR functions with
                Unity. You can check the
                <a
                  href="https://www.bilibili.com/video/BV1fT4y177LC/"
                  target="_blank"
                >
                  <strong style={{ color: "#8b8b8b" }}>
                    <u>link</u>
                  </strong>
                </a>
                to know more about the work.
              </p>
            </div>
            <section id="bg">
              <h2 className="title">Competitive analysis</h2>
            </section>
            <Img
              title="The travel apps currently on the market are divided into the following categories"
              img={process.env.PUBLIC_URL + "/resources/ar/mrket.png"}
            />
            <Img
              title="Among them, there are three types of apps that can offer information services of scenic spots,
                which is scenic spot tour apps, map navigation apps and OTA apps.
                So we will analyze these three kinds of apps."
              img={process.env.PUBLIC_URL + "/resources/ar/table.png"}
            />
            {"\n"}
            {"\n"}
            <Bullet
              title="Common features"
              point={[
                "1. Map navigation is a must.",
                "2. The route planning function will recommend preset travel routes or scenic spots for tourists to customize",
                "3. The form of spot interpretations is single and tedious，mainly with words and voice explantions.",
              ]}
            />
            <Bullet
              title="Improvements"
              point={[
                "1. Designing several tourist routes with the theme of a city’s historical and cultural preservation buildings",
                "2. Enriching forms of spot interpretations",
                "3. Introducing some emerging technologies to increase intersts and more realistic experiences.",
              ]}
            />
            <section id="research">
            <h2 className="title">User research</h2>
          </section>
          <ARcharts />
          {"\n"}
          {"\n"}
          <Bullet
            title="Tourists will meet those problems"
            point={[
              "1. Unclear about the location of historically protected buildings in the city",
              "2. Some historical buildings have access restrictions",
              "3. Difficult to obtain relevant information about historically protected buildings(mostly text information is boring)",
            ]}
          />
          <Bullet
            title="Possible solutions"
            point={[
              "1. Introduce maps and navigation",
              "2. Enrich the interpretations of scenic spots, add viewing models, videos, to solve the problem of access restrictions",
              "3. Generate route check-in maps to satisfy the desire for social sharing",
            ]}
          />
          <Titleimg
            title="Solutions"
            id="prep"
            img={process.env.PUBLIC_URL + "/resources/ar/solutions.png"}
            width={950}
          />
          <Titleimg
            title="UX Workflow"
            id="workflow"
            img={process.env.PUBLIC_URL + "/resources/ar/workflow@2x.png"}
            width={950}
          />
          <section id="prototype">
            <h2 className="title">Prototyping</h2>
          
          <Imgright
            img={
              process.env.PUBLIC_URL +
              "/resources/ar/prototype/mapselection.gif"
            }
            width={250}
            des={
              <p className="description">
                <br />
                <br />
                <br />
                <br />
                <br />
                Selecting the scenic area
              </p>
            }
          />
          <Imgleft
            img={process.env.PUBLIC_URL + "/resources/ar/prototype/spot.gif"}
            width={250}
            des={
              <p className="description">
                <br />
                <br />
                <br />
                <br />
                <br />
                Customizing scenie spots, and getting navegation information.
                The camera is ready by clicking the button on the top right
                corner.
              </p>
            }
          />
          <Imgright
            img={process.env.PUBLIC_URL + "/resources/ar/prototype/AR.gif"}
            width={250}
            des={
              <p className="description">
                <br />
                <br />
                <br />
                <br />
                <br />
                Utilizing AR to recognize the plaque, then to awake the brief
                introductions of the building and entries of each
                interpretations
              </p>
            }
          />
          <Imglefttwo img={[process.env.PUBLIC_URL + "/resources/ar/prototype/model.gif",process.env.PUBLIC_URL + "/resources/ar/prototype/vr.gif"]} width={[250,250]}
          des={
            <p className="description">
              <br/><br/><br/>
              Checking the exterior of the building
              and some detail information
              <br/><br/><br/>
              There are three buttons in the tool box
              to play videos, screenshots,
              and select interested parts.
            </p>
          }/>
          <Imgleft img={process.env.PUBLIC_URL+"/resources/ar/prototype/share.gif"} width={250}
          des={
            <p className="description">
              <br/><br/><br/><br/>
              After ending the journey,
              a route clock-in card will be generated.
              It can be shared to social platforms with all the photos taken during the journey.
            </p>
          }/>
          <Imgright img={process.env.PUBLIC_URL+"/resources/ar/prototype/gallery.gif"} width={250}
          des={
            <p className="description">
              <br/><br/><br/><br/>
              Entering the gallery and checking all the histories.
              They can be shared again.
            </p>
          }/>
          </section>
          </div>
          <div
            className="container-fluid"
            style={{ gridRow: 2 / 3, gridColumn: 2 / 3 }}
          >
            <div className="other" style={{ marginBottom: 50 + "px" }}>
              <section id="other">
                <h2 className="title">Other works</h2>
              </section>

              <Work />
              <div className="row">
                <div className="col-md-12" style={{ textAlign: "center" }}>
                  <Link to="/home">
                    <button className="btnstyle">Back</button>
                  </Link>
                </div>
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

export default ARtour;
