// RadialBarChart.js
import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const MultipleRadialChart = () => {
  const [series] = useState([55, 67, 44, 83]);
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
      },
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
  });

  return (
    <div>
      <div id="chart">
        <ApexCharts options={options} series={series} type="radialBar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default MultipleRadialChart;
