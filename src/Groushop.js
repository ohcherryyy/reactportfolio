import React, { Component } from "react";
import Header from "./Content/Header";
import Nav from "./Content/Nav";
import "./Content/Content.css";
import "./Portfolio.css";
import Img from "./Content/Image";
import Titleimg from "./Content/Titleimg";
import Work from "./Work";
import Footer from "./Content/Footer";
import { Link } from "react-router-dom";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: [
        { title: "Problem Statement", href: "#bg" },
        { title: "Story mapping", href: "#story" },
        { title: "Paper prototype", href: "#paper" },
        { title: "QOC", href: "#qoc" },
        { title: "Prototyping", href: "#prototype" },
      ],
      href: ["bg", "story", "paper", "qoc","prototype"],
    };
  }

  render() {
    return (
      <div>
        <Header img="../resources/Groushop/groushopbanner.png" />
        <div className="gridlayout">
          <Nav title={this.state.navtitle} href={this.state.href} />
          <div className="container majorcontent">
            <div className="content">
              <div className="introduction">
                <p>
                  This is a course project. Groupshop is a platform to
                  find/create group order for online shopping. The platform
                  provides convenience in
                  <strong style={{ color: "#72a6b4" }}>
                    finding groups buying together to share/avoid delivery fees
                  </strong>
                  , and
                  <strong style={{ color: "#72a6b4" }}>
                    combines different retail brands
                  </strong>
                  so that users don’t need to create different accounts on each
                  brand. <br />
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <section id="bg">
                <h2 className="title">Problem Statement</h2>

                <div className="row">
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/problem.png"
                      style={{ maxWidth: 900 + "px" }}
                    ></img>
                  </div>
                  <div className="col-md-12">
                    <p className="imgtitle" style={{ color: "#72a6b4" }}>
                      Sketching alternatives
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="description">
                      There are several approaches to solve this problem.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/Approaches.png"
                      style={{ maxWidth: 500 + "px" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="description">And their user stories...</p>
                  </div>
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/Flows.png"
                      style={{ maxWidth: 900 + "px" }}
                    />
                  </div>
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/Flows1.png"
                      style={{ maxWidth: 900 + "px" }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="description">
                      It turns out that the first approach is the best one with
                      fewer frustrations during the process to reach the goal!
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 30 + "px" }}>
                  <Img
                    title="Annoying group issues"
                    img="../resources/Groushop/decision.png"
                    width={900}
                  />
                </div>
                <br />
                <div className="row">
                  <p className="imgtitle" style={{ color: "#72a6b4" }}>
                    Design goal
                  </p>
                  <div className="col-md-12">
                    <p className="description">
                      A platform to gather those people with the same needs to
                      form a group and check out together so that each member
                      can either share the delivery cost or avoid the delivery
                      cost.
                      <br />
                      <br />
                      <strong>
                        Avoid the annoying group issues and make the overall
                        shopping experience more convenient and efficient.
                      </strong>
                    </p>
                    <ul>
                      <li className="description">
                        1. Increase the success rate of the group order
                      </li>
                      <li className="description">
                        2. Decrease the time spent on the overall process
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <Titleimg
                id="story"
                title="Storymapping"
                img="../resources/Groushop/storymapping.png"
                width={1000}
              />
              <Titleimg
                id="paper"
                title="Paper Prototype"
                img="../resources/Groushop/paper.jpg"
                width={800}
              />
              <div className="row">
                <div className="col-md-12">
                  <p
                    className="imgtitle"
                    style={{ color: "#72a6b4", marginTop: 30 + "px" }}
                  >
                    Feedback
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="description">
                    1. Make prepayments before joining the group in order to
                    avoid the failure in finishing the group order. <br />
                    2. Display the current amount the group has already reached
                    to better inform users and help them make decisions in
                    joining the group.
                    <br />
                    3. Let the system automatically calculate the current lowest
                    amount needed for the group to avoid delivery cost. If a
                    user didn’t meet that amount, he/she cannot join the group.
                    The group organizer can open/close this setting of whether
                    his/her group needs this limitation.
                    <br />
                  </p>
                </div>
              </div>
              <section id="qoc">
                <h2 className="title">QOC</h2>
                <div className="row">
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/paymentqoc.png"
                      style={{ maxWidth: 800 + "px" }}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: 30 + "px" }}>
                  <div className="col-md-12">
                    <img
                      src="../resources/Groushop/joinleave.png"
                      style={{ maxWidth: 800 + "px" }}
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: 30 + "px" }}>
                    <p className="imgtitle" style={{ color: "#72a6b4" }}>
                      Checking availability before joining the group
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="description">
                      There would be a lowest amount for each group to join. It
                      is calculated by the equation: target amount to avoid the
                      delivery cost - current amount / preset group member.
                      Setting this limitation is to improve the success rate of
                      avoiding the delivery cost for the group.
                    </p>
                  </div>
                  <div className="col-md-2">
                    <img
                      src="../resources/Groushop/low.png"
                      style={{ maxWidth: 150 + "px" }}
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      src="../resources/Groushop/part.png"
                      style={{ maxWidth: 150 + "px" }}
                    />
                  </div>
                  <div className="col-md-2">
                    <img
                      src="../resources/Groushop/zero.png"
                      style={{ maxWidth: 150 + "px" }}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: 30 + "px" }}>
                  <div className="col-md-12">
                    <img
                      src="../Resources/Groushop/group.png"
                      style={{ maxWidth: 800 + "px" }}
                    />
                  </div>
                </div>
              </section>
              <section id="prototype">
                <h2 className="title">Prototyping</h2>

                <Img
                  title="Final workflow"
                  img="../resources/Groushop/workflow.png"
                  width={800}
                />
                <div className="row" style={{ marginTop: 40 + "px" }}>
                  <div className="col-md-12">
                    <iframe
                      style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                      width="900"
                      height="600"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNdYcRloz3mvQVJ6mxlP6aO%2Fgroushop%3Fnode-id%3D1%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </section>
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

export default Group;
