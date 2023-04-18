import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Chart from "react-apexcharts";

const data = {
    options: {
        // colors: ['rgba(0, 133, 255, 0.4)', 'rgba(255, 0, 177, 0.5)'],
        colors: ['green', 'red'],
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            labels: {
                show: true,
                style: {
                    colors: 'white',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        },
        grid: {
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: false
                }
            },
        },
        // Hide graph border
        // stroke: {
        //     show: false,
        // },
        dataLabels: {
            enabled: false
        },
        markers: {
            colors: ['green', 'red']
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: 'white',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        }
    },
    series: [
        {
            name: "Bitcoin",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
            name: "Ethereum",
            data: [80, 10, 100, 50, 30, 60, 20, 10]
        }
    ]
}

const CustomChart = ({ ...rest }) => {
    const { type } = rest;

    const [graphD, setSetGraphData] = useState(data);
    return (
        <Box sx={{ marginTop: " 10px " }}>
            <div className="mixed-chart">
                <Chart
                    options={graphD.options}
                    series={graphD.series}
                    type="area"
                    width="100%"

                />
            </div>
        </Box>
    )
}

export default CustomChart