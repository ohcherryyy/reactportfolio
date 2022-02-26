import React, { Component, Fragment } from "react";
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

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navtitle: [
        { title: "Background", href: "#bg" },
        { title: "Problem Statement", href: "#problem" },
        { title: "Research", href: "#research" },
        { title: "Explore", href: "#prep" },
        { title: "UX Workflow", href: "#workflow" },
        { title: "Wireframing", href: "#wireframe" },
        { title: "Prototyping", href: "#prototype" },
        { title: "Summary", href: "#final" },
      ],
      href:["bg","problem","research","prep","workflow","wireframe","prototype","final"]
    };
  }

  render() {
    return (
      <div>
        <Header img="../resources/tripfin/tripbanner.png" />
        <div className="gridLayout">
          <Nav title={this.state.navtitle} href={this.state.href}/>
          <div className="container majorcontent">
            <div className="content">
              <div className="introduction">
                <p>
                  This is an internship project in
                  <strong style={{ color: "#287dfa" }}>
                    Trip.com Group in Finance BU
                  </strong>
                  . As the product manager, I transformed requirements from the
                  business department into the actual landing project. The
                  purpose of the project is to gradually converse the current
                  20000+ DAU into users who buy products through relevant
                  operational activities and page revision. {"\n"}
                  {"\n"}
                  After the launch of this page,
                  <strong style={{ color: "#287dfa" }}>
                    the conversion rate from homepage to detail page increased
                    about 22%
                  </strong>
                  in one week. {"\n"}
                  {"\n"}
                </p>
              </div>
              <section id="bg">
                <h2 className="title">Background</h2>
              </section>

              {"\n"}
              {"\n"}
              <div className="row">
                <Img
                  title="Current Situation"
                  img="../resources/tripfin/现状.png"
                  width={800}
                />
              </div>
              <div
                className="col-md-12"
                style={{ paddingTop: 40 + "px", textAlign: "left" }}
              >
                <p className="description">
                  From the perspective of the overall process,
                  <strong style={{ color: "#287dfa" }}>
                    users are mainly lost during the process from the homepage
                    to the details page
                  </strong>
                  , and the conversion rate is the lowest among all steps, only
                  32%
                  {"\n"}
                  Although there are a large number of coupon recipients, the
                  final coupon usage rate is only 5%, and
                  <strong style={{ color: "#287dfa" }}>
                    about 30% of new users didn't use coupons to buy products
                  </strong>
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="description">
                    Requirements from the business department
                  </p>
                </div>
                <div className="col-md-12">
                  <p className="description">
                    1. Carry out new operational activity which is
                    <span style={{ color: "#287dfa" }}>
                      "double interest hike"
                    </span>
                    , in order to attract more newcomers through "double
                    interest" strategy {"\n"}
                    2. Attract users to invest in
                    <span style={{ color: "#287dfa" }}>
                      products that need to be held for a long time
                    </span>
                    {"\n"}
                    3. Only for new users who have not invested since the event
                    was launched
                  </p>
                </div>
                <section id="problem">
                  <h2 className="title" id="problem">
                    Problem Statement
                  </h2>
                </section>

                {"\n"}
                {"\n"}
                <Img
                  title="Voucher Process"
                  img="../resources/tripfin/couponprocess-en.png"
                  width={1000}
                />
                {"\n"}
                {"\n"}
                {"\n"}
                <Img
                  title="Homepage for newcomers"
                  img="../resources/tripfin/homepage.png"
                  width={900}
                />
                <section id="research">
                  <h2 className="title">Competitive Research</h2>
                </section>

                <div className="row">
                  <div className="col-md-12">
                    <img
                      src="../resources/tripfin/competitors.png"
                      style={{ maxWidth: 900 + "px" }}
                    />
                  </div>
                  <div className="col-md-12">
                    {"\n"}
                    {"\n"}
                    <p className="compete">
                      I mainly conducted research on several competing products
                      to understand the elements and product display strategies
                      displayed on their product list page and event page for
                      new wealth management customers. Finally, the following
                      characteristics are summarized.
                    </p>
                    <img
                      src="../resources/tripfin/competitorfeat-en.png"
                      className="col-md-12"
                    />
                  </div>
                  <section id="prep">
                    <h2 className="title">Explore</h2>
                  </section>

                  {"\n"}
                  {"\n"}
                  <div className="row">
                    <div className="col-md-12">
                      <p className="imgtitle">Solutions</p>
                      {"\n"}
                      <p className="description">
                        <strong className="descriptionstrong">
                          1.Optimize homepage layout
                        </strong>
                        {"\n"}
                        Distinguish current products and fixed deposit products
                        {"\n"}
                        Add more useful information: Safety information,
                        interest rate hike rules and buying process etc.
                      </p>
                      {"\n"}
                      <p className="description">
                        <strong className="descriptionstrong">
                          2.Cancel the issue of coupons and carry out regular
                          operational activities instead
                        </strong>
                        {"\n"}
                        Omit coupons, and let the back-end system judge whether
                        it meets the interest rate hike rules, and automatically
                        issue reward {"\n"}
                        Apply the coupon rate hike to the operational
                        activities, so that users can more flexibly choose the
                        time to purchase the product, and it is also convenient
                        for us to adjust the operation strategy at any time{" "}
                        {"\n"}
                        Establish the seckill strategy to attract users to
                        purchase products
                      </p>
                      {"\n"}
                      <p className="description">
                        <strong className="descriptionstrong">
                          3.Transition strategy for users who have received
                          coupons before the event
                        </strong>
                        {"\n"}
                        Those who haven't used coupons before the event can
                        choose to give up coupons and participate in the new
                        event; they can also purchase the products with coupons
                        at the original interest rate.
                      </p>
                      {"\n"}
                    </div>

                    <div className="col-md-12">
                      {"\n"}
                      {"\n"}
                      <p className="imgtitle">Difficulties and risks</p>
                      {"\n"}
                      <p className="description">
                        After the first round of review with engineers, the
                        following difficulties and risks were found:
                      </p>
                      {"\n"}
                      <img
                        src="../resources/tripfin/cautious-en.png"
                        className="col-md-12"
                        style={{ maxWidth: 1000 + "px" }}
                      />
                    </div>
                    <Titleimg
                      title="UX workflow"
                      id="workflow"
                      img="../resources/tripfin/workflow-en.png"
                      width={1000}
                    />
                    <section id="wireframe">
                      <h2 className="title">Wireframing</h2>
                    </section>

                    {"\n"}
                    {"\n"}
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-md-5">
                        <img
                          src="../resources/tripfin/mainpage.png"
                          className="col-md-12 img-responsive"
                          style={{
                            maxWidth: 250 + "px",
                            marginBottom: 50 + "px",
                          }}
                        />
                      </div>
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      <div className="col-md-7">
                        <img
                          src="../resources/tripfin/maininfo-en.png"
                          className="col-md-12 img-responsive"
                          style={{
                            maxWidth: 330 + "px",
                            marginBottom: 50 + "px",
                          }}
                        />
                      </div>
                    </div>
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    <div className="row" style={{ textAlign: "left" }}>
                      <div className="col-md-4">
                        <img
                          src="../resources/tripfin/双倍加息售罄.png"
                          className="col-md-12 img-responsive"
                          style={{
                            maxWidth: 280 + "px",
                            marginBottom: 50 + "px",
                          }}
                        />
                      </div>
                      <div className="col-md-4">
                        <img
                          src="../resources/tripfin/产品售罄.png"
                          className="col-md-12 img-responsive"
                          style={{ maxWidth: 280 + "px" }}
                        />
                      </div>
                      <div className="col-md-4">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        <p className="description">
                          The product list is mainly divided into two states
                          {"\n"}
                          1. When the double interest rate hike quota is sold
                          out, click the button to purchase at the original
                          interest rate
                          {"\n"}
                          2. After the product is sold out, it cannot be
                          purchased
                        </p>
                      </div>
                    </div>
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-md-6">
                        <img
                          src="../resources/tripfin/屏蔽策略.png"
                          className="col-md-12 img-responsive"
                          style={{ maxWidth: 280 + "px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}
                        {"\n"}

                        <p className="description">
                          When the blocking strategy of the account is obtained,
                          the products to be blocked are hidden and the products
                          that are not blocked are displayed.
                        </p>
                      </div>
                    </div>
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    <section id="prototype">
                      <h2 className="title">Prototyping</h2>
                    </section>

                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-md-12">
                        <img
                          src="../resources/tripfin/first-en@2x.png"
                          className="col-md-12 img-responsive"
                        />
                      </div>
                    </div>
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-md-12">
                        <img
                          src="../resources/tripfin/second-en@2x.png"
                          className="col-md-12 img-responsive"
                        />
                      </div>
                    </div>

                    <div className="row" style={{ textAlign: "center" }}>
                      <div className="col-md-12">
                        <img
                          src="../resources/tripfin/third-en@2x.png"
                          className="col-md-12 img-responsive"
                        />
                      </div>
                    </div>
                    <section id="final">
                      <h2 className="title">Summary</h2>
                    </section>

                    {"\n"}
                    {"\n"}
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="../resources/tripfin/IMG_5743.JPG"
                          className="col-md-12 img-responsive"
                          style={{ maxWidth: 250 + "px" }}
                        />
                      </div>
                      <div className="col-md-6">
                        <img
                          src="../resources/tripfin/IMG_5745.JPG"
                          className="col-md-12 img-responsive"
                          style={{ maxWidth: 250 + "px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p className="description">
                          Eventually, with the joint efforts of UI designer's
                          visual design and development, the event page was
                          officially launched, and part of the interface is
                          shown in the above two pictures. The conversion rate
                          of the new account homepage-detail page in the first
                          week after the launch has increased by 22%.
                          <br />
                          This is the first time that I have participated in the
                          entire process of product requirements from proposal
                          to launch. Different from teamwork projects in
                          schools, when designing products in enterprises, in
                          addition to covering all user usage scenarios and
                          processes to complete the closed loop, it is also
                          necessary to consider how to promote demand online as
                          efficiently as possible. To achieve this, it is
                          necessary to conduct in-depth communication with the
                          engineers after product planning, understand the
                          current back-end architecture and technically
                          achievable content, and then reflect on which parts of
                          the current design may require a large amount of
                          development, which parts have higher priority and
                          which parts can be completed in later iterations.
                          After completing these thoughts, we can finally
                          produce a product demand that can be successfully
                          launched.
                        </p>
                      </div>
                    </div>
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
                      <div
                        className="col-md-12"
                        style={{ textAlign: "center" }}
                      >
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Trip;
