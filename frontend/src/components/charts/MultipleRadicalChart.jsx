import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const MultipleRadialChart = () => {
  const [series] = useState([32, 24, 44, 17]);
  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: (w) => {
              return 24;
            },
          },
        },
        track: {
          background: '#f2f2f2',
        },
      },
    },
    colors: ['#3498db', '#8e44ad', '#9b59b6', '#2980b9'],
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
    stroke: {
      lineCap: 'round',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#8e44ad', '#9b59b6', '#2980b9', '#3498db'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
  });

  return (
    // <div className="bg-white rounded-lg shadow-md p-4">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      </div>
    // </div>
  );
};

export default MultipleRadialChart;