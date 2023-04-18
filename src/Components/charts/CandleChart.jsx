import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Chart from "react-apexcharts";

const data = {
    options: {
        chart: {
            id: "Candle Stick"
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true,
                }
            }
        },
        markers: {
            colors: ['#F44336', '#E91E63']
        },
        xaxis: {
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
        },
        grid: {
            strokeDashArray: 0,
            yaxis: {
                lines: {
                    show: false
                }
            },
            xaxis: {
                lines: {
                    show: false
                }
            },
        }
    },
    series: [{
        data: [
            {
                x: '2016,01,02',
                y: [20, 28, 38, 45],
            },
            {
                x: '2016,01,03',
                y: [31, 38, 55, 66],
            },
            {
                x: '2016,01,04',
                y: [50, 55, 77, 80],
            },
            {
                x: '2016,01,05',
                y: [41.98, 20.29, 8.59, 80.85],
            },
            {
                x: '2016,01,06',
                y: [68, 66, 22, 15],
            },
            {
                x: '2016,01,07',
                y: [41.98, 20.29, 8.59, 80.85],
            },
            {
                x: '2016,01,08',
                y: [51.98, 56.29, 51.59, 53.85],
            },
            {
                x: '2016,01,09',
                y: [41.98, 20.29, 8.59, 5.85],
            },
            {
                x: '2016,01,10',
                y: [51.98, 56.29, 51.59, 53.85],
            },
            {
                x: '2016,01,11',
                y: [41.98, 20.29, 8.59, 5.85],
            },
            {
                x: '2016,01,12',
                y: [51.98, 56.29, 51.59, 53.85],
            },
            {
                x: '2016,01,13',
                y: [41.98, 20.29, 8.59, 5.85],
            },
            {
                x: '2016,01,14',
                y: [51.98, 10.29, 10.59, 53.85],
            },
            {
                x: '2016,01,15',
                y: [41.98, 20.29, 8.59, 80.85],
            },
            {
                x: '2016,01,16',
                y: [51.98, 56.29, 51.59, 53.85],
            },
            {
                x: '2016,01,17',
                y: [41.98, 20.29, 8.59, 5.85],
            }
        ]
    }]
}

const CandleChart = ({ ...rest }) => {
    // const { type } = rest;

    const [graphD, setSetGraphData] = useState(data);
    return (
        <Box sx={{ marginTop: " 10px " }}>
            <div className="mixed-chart">
                <Chart
                    options={graphD.options}
                    series={graphD.series}
                    type="candlestick"
                    width="100%"

                />
            </div>
        </Box>
    )
}

export default CandleChart