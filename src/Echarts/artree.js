import React from "react";
import ReactEcharts from "echarts-for-react";

const option={
    title:{
        text:'Social platform Using habits',
        left:'center',
        textStyle:{
            color:'#888888'
        }
    },
    tooltip:{
      formatter:'{b}:{c}'  
    },
    series: [{
        type: 'treemap',
        roam:false,
        breadcrumb:{
            show:false,
        },
        height:'80%',
        width:'95%',
        top:'20%',
        data: [{
            name: 'Yes',            // First tree
            value: 183,
            
            itemStyle:{
                color:'#EAB12D'
            },
            children: [{
                name: 'Social platforms',       // First leaf of first tree
                value: 141,
                label:{
                show:true,
                position:'insideBottomLeft',
                formatter:'{b}\n{c}',
                fontSize:15
            },
            }, {
                name: 'Family and friends',       // Second leaf of first tree
                value: 23,
                label:{
                show:true,
                position:'insideBottomLeft',
                formatter:'{b}\n{c}',
                fontSize:12
            },
            }, {
                name: 'Forums for travellers',       // Second leaf of first tree
                value: 19,
                label:{
                show:true,
                position:'insideBottomLeft',
                formatter:'{b}\n{c}',
                fontSize:12
            },
            }]
        }, {
            name: 'No',            // Second tree
            value: 17,
            label:{
                show:true,
                position:'insideBottomLeft',
                formatter:'{b}\n{c}',
                fontSize:12
            },
            itemStyle:{
                color:'#7AA1AA'
            }
        }]
    }]
};

function ARtree(){
    return(
        <ReactEcharts option={option} className="col-md-4" style={{width:320+"px",height:185+"px"}}/>
    )
}

export default ARtree