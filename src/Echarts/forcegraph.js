import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { useNavigate } from "react-router-dom";
import "../Box.css"

const option = {
  animationDuration: 1500,
  animationEasingUpdate: "quinticInOut",
  legend:{
    left:0,
    top:'20%',
    align:"left",
    orient:"vertical",
    data:[
    { name: "Name" },
    { name: "Project" },
    { name: "Programming" },
    { name: "UX Design" },
    { name: "UX Research" },
    { name: "Marketing" },
    { name: "Product Management" },
  ]},
  series: [
    {
      name: "Les Miserables",
      type: "graph",
      layout: "force",
      data: [
        { name: "Xiaoyan Wu", value: 100, cateogry: 0, symbolSize: 50 },
        {
          name: "Covid data visualization",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "covid",
        },
        {
          name: "Tennis data visualization",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "tennis",
        },
        {
          name: "AR tourism map",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "ar",
        },
        {
          name: "Senseparking@NIO",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "nio",
        },
        {
          name: "Recommendation page@Trip",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "tripfin",
        },
        {
          name: "Groushop",
          value: 80,
          category: 1,
          symbolSize: 40,
          id: "groushop",
        },
        {
          name: "Increase conversion rate@Blom",
          value: 80,
          category: 1,
          symbolSize: 40,
        },
        { name: "Programming", category: 2, value: 55, symbolSize: 35 },
        { name: "UX Design", category: 3, value: 55, symbolSize: 35 },
        { name: "UX Research", category: 4, value: 55, symbolSize: 35 },
        { name: "Marketing", category: 5, value: 55, symbolSize: 35 },
        { name: "Product Management", category: 6, value: 55, symbolSize: 35 },
        { name: "Python", category: 2, value: 20, symbolSize: 20 },
        { name: "Frontend", category: 2, value: 20, symbolSize: 20 },
        {
          name: "Scenario-driven design",
          category: 3,
          value: 20,
          symbolSize: 20,
        },
        { name: "Data-driven design", category: 3, value: 20, symbolSize: 20 },
        {
          name: "Competitive analysis",
          category: 4,
          value: 20,
          symbolSize: 20,
        },
        { name: "Contextual Inquiry", category: 4, value: 20, symbolSize: 20 },
        {
          name: "Customer journey map",
          category: 4,
          value: 20,
          symbolSize: 20,
        },
        { name: "AR/VR", category: 3, value: 8, symbolSize: 10 },
        { name: "HMI", category: 3, value: 8, symbolSize: 10 },
        { name: "Usability test", category: 4, value: 8, symbolSize: 10 },
        { name: "Data visualization", category: 3, value: 8, symbolSize: 10 },
        { name: "C/C++", category: 2, value: 8, symbolSize: 10 },
        { name: "C#", category: 2, value: 8, symbolSize: 10 },
      ],
      links: [
        { source: "tennis", target: "Xiaoyan Wu" },
        { source: "covid", target: "Xiaoyan Wu" },
        { source: "ar", target: "Xiaoyan Wu" },
        { source: "nio", target: "Xiaoyan Wu" },
        { source: "nio", target: "Product Management" },
        { source: "tripfin", target: "Xiaoyan Wu" },
        { source: "tripfin", target: "Product Management" },
        { source: "tripfin", target: "Marketing" },
        { source: "Increase conversion rate@Blom", target: "Xiaoyan Wu" },
        {
          source: "Increase conversion rate@Blom",
          target: "Contextual Inquiry",
        },
        {
          source: "Increase conversion rate@Blom",
          target: "Customer journey map",
        },
        { source: "Increase conversion rate@Blom", target: "Marketing" },
        { source: "groushop", target: "Xiaoyan Wu" },
        { source: "groushop", target: "UX Design" },
        { source: "groushop", target: "Competitive analysis" },
        { source: "groushop", target: "Usability test" },
        { source: "tripfin", target: "Data-driven design" },
        {
          source: "tripfin",
          target: "Competitive analysis",
        },
        { source: "nio", target: "HMI" },
        { source: "nio", target: "Scenario-driven design" },
        { source: "ar", target: "C#" },
        { source: "Programming", target: "Xiaoyan Wu" },
        { source: "UX Design", target: "Xiaoyan Wu" },
        { source: "Marketing", target: "Xiaoyan Wu" },
        { source: "Product Management", target: "Xiaoyan Wu" },
        { source: "UX Research", target: "Xiaoyan Wu" },
        { source: "UX Research", target: "Competitive analysis" },
        { source: "UX Research", target: "Usability test" },
        { source: "UX Research", target: "Customer journey map" },
        { source: "UX Research", target: "Contextual Inquiry" },
        { source: "UX Design", target: "AR/VR" },
        { source: "UX Design", target: "Data visualization" },
        { source: "UX Design", target: "HMI" },
        { source: "UX Design", target: "Scenario-driven design" },
        { source: "UX Design", target: "Data-driven design" },
        { source: "ar", target: "AR/VR" },
        { source: "tennis", target: "Python" },
        { source: "tennis", target: "Frontend" },
        { source: "tennis", target: "Data visualization" },
        { source: "covid", target: "Frontend" },
        { source: "covid", target: "Data visualization" },
        { source: "Programming", target: "Frontend" },
        { source: "Programming", target: "Python" },
        { source: "Programming", target: "C/C++" },
        { source: "Programming", target: "C#" },
      ],
      categories: [
        { name: "Name" },
        { name: "Project" },
        { name: "Programming" },
        { name: "UX Design" },
        { name: "UX Research" },
        { name: "Marketing" },
        { name: "Product Management" },
      ],
      force: { repulsion: 1000, gravity: 0.5 },
      roam: true,
      label: {
        show: true,
        position: "right",
        formatter: "{b}",
      },
      lineStyle: {
        color: "source",
        curveness: 0,
      },
      emphasis: {
        focus: "adjacency",
        lineStyle: {
          width: 10,
        },
      },
    },
  ],
};



function Ability() {
  let navigate = useNavigate();
  return (
    <ReactEcharts
      option={option}
      style={{height:500,marginTop:20+"px"}}
      className="charts"
      onEvents={{
        click: (param) => {
          if (param.dataType == "node") {
            let id = param.data.id;
            if(id) navigate(`/content/${id}`);
          }
        },
      }}
    />
  );
}

export default Ability;
