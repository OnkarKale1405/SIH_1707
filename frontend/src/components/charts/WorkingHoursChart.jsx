import React from 'react';
import ReactApexChart from 'react-apexcharts';

// Function to generate alternating colors for bars
const generateAlternatingColors = (length, color1, color2) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
        if (Math.floor(i / 2) % 2 === 0) {
            colors.push(color1);
        } else {
            colors.push(color2);
        }
    }
    return colors;
};

class WorkingHoursChart extends React.Component {
    constructor(props) {
        super(props);

        const numBars = 15; // Number of bars in the chart
        const color1 = '#A6B9DB';
        const color2 = '#9AD1B8';
        const barColors = generateAlternatingColors(numBars, color1, color2);
        console.log(barColors);

        this.state = {
            series: [{
                name: 'Average Working Hours',
                type: 'bar',
                data: [7.5, 8.2, 8.0, 7.8, 8.5, 7.9, 8.3, 8.1, 7.7, 8.4, 8.0, 7.6, 8.2, 8.1, 7.9]
            }, {
                name: '8 Hours Line',
                type: 'line',
                data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] 
            }],
            options: {
                chart: {
                    height: 300,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        columnWidth: '40%',
                        colors: {
                            ranges: barColors.map((color, index) => ({
                                from: index,
                                to: index + 1,
                                color: color
                            }))
                        },
                        hover: {
                            colors: barColors
                        }
                    }
                },
                stroke: {
                    width: [0, 2]
                },
                dataLabels: {
                    enabled: false,
                    enabledOnSeries: [1]
                },
                xaxis: {
                    categories: [
                        '16 Sep', '17 Sep', '18 Sep', '19 Sep', '20 Sep',
                        '21 Sep', '22 Sep', '23 Sep', '24 Sep', '25 Sep',
                        '26 Sep', '27 Sep', '28 Sep', '29 Sep', '30 Sep'
                    ],
                    tickPlacement: 'on',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    }
                },
                yaxis: [{
                    show: false
                }],
                grid: {
                    show: true,
                    borderColor: '#F1F3F5',
                    strokeDashArray: 3,
                    yaxis: {
                        lines: {
                            show: true,
                        },
                    },
                    xaxis: {
                        lines: {
                            show: true,
                        },
                    },
                },
                tooltip: {
                    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                        return '<div class="px-2 py-1 bg-black text-white">' +
                            '<span>' + series[seriesIndex][dataPointIndex] + ' hrs</span>' +
                            '</div>'
                    },
                    followCursor: false,
                    intersect: false,
                    onDatasetHover: {
                        highlightDataSeries: false,
                    }
                },
                annotations: {
                    yaxis: [{
                        y: 8,
                        label: {
                            text: '8 Hrs',
                            borderColor: 'transparent',
                            textAnchor: 'start',
                            position: 'left',
                            offsetX: -35,
                            offsetY: 5,
                            style: {
                                color: '#FF4560',
                                background: 'transparent'
                            }
                        }
                    }]
                },
                legend: {
                    show: false,
                }
            },
        };
    }

    render() {
        return (
            <div className='px-8 py-8'>
                <div id="chart">
                    <h2 className='text-xl font-semibold'>Average Working Hours</h2>
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height={300}
                    />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

export default WorkingHoursChart;