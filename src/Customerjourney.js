import React, { Component } from "react";
import Header from "./Content/Header";
import Img from "./Content/Image";
import Nav from "./Content/Nav";
import "./Content/Content.css";
import "./Portfolio.css";
import Titleimg from "./Content/Titleimg";
import Work from "./Work";
import { Link } from "react-router-dom";
import Footer from "./Content/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Imgleft from "./Content/Imgleft";
import Imgright from "./Content/Imgright";
import Imglefttwo from "./Content/Imglefttwo";
import Bullet from "./Content/Bullet";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: [
        { title: "The Story", href: "#bg" },
        { title: "The Problem", href: "#problem" },
        { title: "Project Objective", href: "#prep" },
        { title: "Methodology", href: "#workflow" },
        { title: "Findings - Customer journey maps", href: "#wireframe" },
        { title: "Recommendations", href: "#prototype" },
      ],
      href: ["bg", "problem", "prep", "workflow", "wireframe", "prototype"],
    };
  }

  render() {
    return (
      <div>
        <Header
          img={process.env.PUBLIC_URL + "/resources/boximg/customerbox.png"}
        />
        <div className="gridLayout">
          <Nav title={this.state.navtitle} href={this.state.href} />
          <div className="container majorcontent">
            <div className="content">
              <div className="introduction">
                <p>
                  This is a UX research project working with Blom Meadworks{" "}
                  <strong style={{ color: "#D3A029" }}>
                    to dentify key touch points of their customer path and
                    develop marketing strategies to effectively reach customers
                    at each stage of the customer journey.
                  </strong>
                </p>
              </div>
              <section id="bg">
                <h2 className="title">The Story</h2>
              </section>

              <div className="row">
                <div className="col-md-12">
                  <p className="description">
                    Bløm Meadworks is an Ann Arbor brewery specializing in mead,
                    cider, and beer. Bløm currently offers two product
                    experiences:
                    <ul>
                      <li>
                        <strong style={{ color: "#D3A029" }}>
                          Taproom Experience
                        </strong>{" "}
                        - enjoy beverages in Bløm’s physical location in
                        downtown Ann Arbor
                      </li>
                      <li>
                        <strong style={{ color: "#D3A029" }}>
                          Retail Experience
                        </strong>{" "}
                        - grab beverages to go in local partnered grocery stores
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <section id="problem">
                <h2 className="title">The Problem</h2>
              </section>

              <div className="row">
                <div className="col-md-12">
                  <p className="description">
                    Bløm is trying to drive more taproom customers to increase
                    profit margins. We therefore are looking into:
                    <br />
                    <br />
                    <strong style={{ color: "#D3A029", fontSize: "130%" }}>
                      How might we identify existing customer journey
                      bottlenecks and increase taproom customers?
                    </strong>
                  </p>
                </div>
              </div>

              <section id="prep">
                <h2 className="title">Project Objective</h2>
              </section>

              <div className="row">
              <div className="col-md-12">
              <ul className='compete'>
                  <li>1. Evaluate existing customer journeys</li>
                  <li>2. Identify touchpoints for opportunities to convert audience into taproom customers</li>
                  <li>3. Increase customer channels especially for the retail to taproom journey</li>
              </ul>
            </div>
              </div>
              
              <Titleimg
                title="Methodology"
                id="workflow"
                img={
                  process.env.PUBLIC_URL +
                  "/resources/customer/Timeline.png"
                }
                width={1500}
              />
              <section id="wireframe">
                <h2 className="title">Findings - Cutomer journey map</h2>
                <Img
                  title="Taproom users"
                  img={
                    process.env.PUBLIC_URL +
                    "/resources/customer/User Journey Map - Taproom.png"
                  }
                  width={1000}
                />
                <br/><br/>
                <Img
                  title="Retail users"
                  img={
                    process.env.PUBLIC_URL +
                    "/resources/customer/User Journey Map - Retail.png"
                  }
                  width={1000}
                />
              </section>
              

              <section id="prototype">
                <h2 className="title">Recommendations</h2>
                </section>
               <div className="row">
                <div className="col-md-12">
                    <img src={process.env.PUBLIC_URL + "/resources/customer/recommendationsposter.png"} alt="recommendations" width="1000px"/>
                    </div>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Customer;
