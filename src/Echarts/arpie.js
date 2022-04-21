import React from "react";
import ReactEcharts from "echarts-for-react";

const option={
    title: {
        text: 'Info of architectures',
        left: 'center',
        
        textStyle: {
            color: '#888888'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}%'
    },
    series: [
        {
            name: 'Visiting',
            type: 'pie',
            radius: '65%',
            center: ['50%', '60%'],
            startAngle:120,
            data: [
                {value: 36, name: 'Interiors',itemStyle:{color:'#EAB12D'}},
                {value: 31, name: 'Histories',itemStyle:{color:'#7F6B5D'}},
                {value: 27, name: 'Exterior',itemStyle:{color:'#7AA1AA'}},
                {value: 4, name: 'The past image',itemStyle:{color:'#B4BAB5'}},
                {value: 2, name: 'Others',itemStyle:{color:'#F7F4F1'}}
            ],
            label: {
                color: '#888888'
            },
            labelLine: {
                lineStyle: {
                    color: '#acacac'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

function ARpie(){
    return(
        <ReactEcharts option={option} className="col-md-4" style={{width:320+"px",height:185+"px"}}/>
    )
}

export default ARpie