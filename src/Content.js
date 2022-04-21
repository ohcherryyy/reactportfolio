import React, { Component, Fragment, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";
import { useParams } from "react-router-dom";
import "./Content/Content.css";
import Trip from "./Tripfin";
import Group from "./Groushop";
import Nio from "./NIO";
import ARtour from "./AR";

function scroll() {
  window.addEventListener("scroll", function () {
    let bg_height = document.querySelector("section#bg").offsetTop;
    let oth_height = document.querySelector("section#other").offsetTop;
    let this_height = this.scrollY;
    let prelist = document.querySelector("div#prelist");
    let returnbtn = document.querySelector("div.returnbtn");
    if (this_height + 473.9 > bg_height) {
      prelist.style.visibility = "visible";
      returnbtn.style.visibility = "visible";
    } else if (this_height <= 156) {
      prelist.style.visibility = "hidden";
    }
    if (this_height + 473.9 > oth_height) {
      prelist.style.visibility = "hidden";
      returnbtn.style.visibility = "hidden";
    }
  });
}
function Content() {
  scroll();
  const { page } = useParams();
  if (page === "tripfin") {
    return <Trip />;
  } else if (page === "groushop") {
    return <Group />;
  }
  else if(page=="ar"){
    return <ARtour />
  }
  else if (page === "nio") {
    return <Nio />;
  } else if (page === "tennis") {
    window.location.href = "https://ohcherryyy.github.io/tennisvisual/";
  }
  else if (page === "covid") {
    window.location.href = "https://ohcherryyy.github.io/covidvisual/";
  }
}

export default Content;
