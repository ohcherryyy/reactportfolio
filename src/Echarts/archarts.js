import React from "react";
import ARbar from "./arbar";
import ARpie from "./arpie";
import ARtree from "./artree";

function ARcharts(){
    return(
        <div className="row">
            <ARbar />
            <ARpie />
            <ARtree />
        </div>
    )
}
export default ARcharts