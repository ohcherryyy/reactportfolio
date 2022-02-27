import React, { Component } from "react"
import Header from "./Content/Header"
import Img from "./Content/Image"
import Nav from "./Content/Nav"
import "./Content/Content.css"
import "./Portfolio.css"
import Titleimg from "./Content/Titleimg"
import Work from "./Work"
import { Link } from "react-router-dom"
import Footer from "./Content/Footer"
import "bootstrap/dist/css/bootstrap.css"
import Imgleft from "./Content/Imgleft"
import Imgright from "./Content/Imgright"
import Imglefttwo from "./Content/Imglefttwo"

class Nio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navtitle: [
        { title: "Value", href: "#bg" },
        { title: "Define", href: "#problem" },
        { title: "Structure", href: "#prep" },
        { title: "Business process", href: "#workflow" },
        { title: "Wireframing", href: "#wireframe" },
        { title: "Prototyping", href: "#prototype" },
      ],
      href: ["bg", "problem", "prep", "workflow", "wireframe", "prototype"],
    }
  }

  render () {
    return (
      <div>
        <Header img={process.env.PUBLIC_URL + "/resources/senseparking/parkingbanner.png"} />
        <div className="gridLayout">
          <Nav title={this.state.navtitle} href={this.state.href} />
          <div className="container majorcontent">
            <div className="content">
              <div className="introduction">
                <p>
                  This is a project during{" "}
                  <strong style={{ color: "#287dfa" }}>
                    my internship in Digital Cockpit department of NIO
                  </strong>
                  . Through smart parking, we will further create a complete
                  travel experience chain for car owners, and enhance the
                  intelligence capabilities of NIO's automotive scenes. I
                  participated in the process of the project from 0 to 1,
                  responsible for product design, including sorting out product
                  structure, business processes, business scenarios, and
                  outputting interactive pages.
                </p>
              </div>
              <section id="bg">
                <h2 className="title">Value</h2>
              </section>

              <div className="row">
                <div className="col-md-12">
                  <p className="description">
                    1.
                    <strong>User value:</strong> Creating a more complete car
                    travelling experience for NIO users, and letting them enjoy
                    the convenience brought by intelligence technology
                    <br />
                    2. <strong>Business value:</strong> Enriching smart
                    interconnection scenarios of NIO - vehicle to parking
                    service <br />
                    3.
                    <strong>Ecological value:</strong> Help Niopay expand more
                    payment scenarios, establish more connections with car
                    owners, and build a brand ecosystem of NIO
                  </p>
                </div>
              </div>
              <Titleimg
                title="Define"
                id="problem"
                img={process.env.PUBLIC_URL + "/resources/senseparking/moodboard.png"}
                width={1200}
              />
              <section id="prep">
                <h2 className="title">Structure</h2>
                <Img
                  title="Function diagram"
                  img={process.env.PUBLIC_URL + "/resources/senseparking/structure.png"}
                  width={900}
                />
                <Img
                  title="Experience loop"
                  img={process.env.PUBLIC_URL + "/resources/senseparking/userexp.png"}
                  width={1000}
                />
              </section>
              <Titleimg
                title="Business process"
                id="workflow"
                img={process.env.PUBLIC_URL + "/resources/senseparking/process.png"}
                width={800}
              />

              <section id="wireframe">
                <h2 className="title">Wireframe</h2>

                <div className="row" style={{ textAlign: "center", marginBottom: 30 + "px" }}>
                  <div className="col-md-12">
                    <p className="description">
                      Notifications(including entrances, departures, payment
                      finished)
                    </p>
                  </div>

                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/firstnote.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 450 + "px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/entrance.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 450 + "px" }}
                    />
                  </div>

                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/aftpaynote.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 450 + "px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/out.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 450 + "px" }}
                    />
                  </div>
                </div>

                <div className="row" style={{ textAlign: "center", marginBottom: 30 + "px" }}>
                  <div className="col-md-12">
                    <p className="description">
                      Notifications(when payment is ready, timing out,
                      rebilling)
                    </p>
                  </div>

                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/leavingnote.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 400 + "px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/leaving-autopay.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 400 + "px" }}
                    />
                  </div>

                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/leaving-autopaysuc.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 400 + "px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src={process.env.PUBLIC_URL + "/resources/senseparking/payagain.png"}
                      className="col-md-12 img-responsive"
                      style={{ maxWidth: 400 + "px" }}
                    />
                  </div>
                </div>
                <Img
                  title="Searching destinations page"
                  img={process.env.PUBLIC_URL + "/resources/senseparking/searchpage.png"}
                  width={800}
                />
                <Img
                  title="Billing page"
                  img={process.env.PUBLIC_URL + "/resources/senseparking/paypage.png"}
                  width={800}
                />
              </section>
              <section id="prototype">
                <h2 className="title">Prototype</h2>

                <Imgright
                  des={
                    <p className="description">
                      <br />
                      <br />
                      1<br />
                      After navigating to the destination, ask if searching for
                      near parking lots is needed or not.
                      <br />
                      <br />
                      Providing certain information of parking lots including
                      support to sense parking.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/mapsearch.gif"}
                  width={400}
                />
                <Imgleft
                  des={
                    <p className="description">
                      2<br />
                      The first time when you entered a parking lot supporting
                      digital payment, there will be a hint to subscribe to the
                      service. <br />
                      <br />
                      Through pre-registration, number plates and phone numbers
                      will automatically fill in the blank, leading to a faster
                      process.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/registration.gif"}
                  width={400}
                />
                <Imgright
                  des={
                    <p className="description">
                      3<br />
                      Password-free payment service can also be opened on the
                      payment page.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/registration-autopay.gif"}
                  width={400}
                />
                <Imgleft
                  des={
                    <p className="description">
                      <br />
                      <br />
                      4<br />
                      After confirmation of departure, there will be a
                      notification of payment.
                      <br />
                      <br />
                      If password-free payment service is already subscribed,
                      there will be a direct deduction withou any action.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/leaving-auto.gif"}
                  width={400}
                />
                <Imglefttwo
                  img={[
                    process.env.PUBLIC_URL + "/resources/senseparking/leaving.gif",
                    process.env.PUBLIC_URL + "/resources/senseparking/autopay.gif",
                  ]}
                  width={[400, 400]}
                  des={
                    <p className="description">
                      <br />
                      5<br />
                      Support both scan-code payment and automatic password-free
                      payment deduction
                    </p>
                  }
                />

                <Imgleft
                  des={
                    <p className="description">
                      <br />
                      <br />
                      6<br />A notification will be pushed 5 minutes before
                      timeout. After that, it will automatically start
                      re-billing.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/payagain.gif"}
                  width={400}
                />

                <Imgright
                  des={
                    <p className="description">
                      7<br />
                      History orders and personal information can be found in
                      the service page.
                      <br />
                      <br />
                      In this page, you can open or close the service,
                      add/delete your number plates, modify payment channels.
                      <br />
                      <br />
                      Invoicing can be viewed in historical orders, and
                      electronic invoices can be issued.
                    </p>
                  }
                  img={process.env.PUBLIC_URL + "/resources/senseparking/info.gif"}
                  width={400}
                />
              </section>
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
        <Footer />
      </div>
    )
  }
}

export default Nio
