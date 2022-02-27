import React,{useLayoutEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter as Router,useLocation } from "react-router-dom";
import App from "./App";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

ReactDOM.render(
  <Router>
    <Wrapper>
      <App />
    </Wrapper>
  </Router>,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
