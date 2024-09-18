import React, { useState, useRef, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const RadialChart = ({ value }) => {
  const chartRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (chartRef.current) {
      const interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue >= value) {
            clearInterval(interval);
            return value;
          }
          return prevValue + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [value]);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.chart;
      chart.updateSeries([currentValue]);
    }
  }, [currentValue]);

  const options = {
    chart: {
      height: 300,
      type: 'radialBar',
      offsetY: -10,
      animations: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetX: 0,
            offsetY: 0,
            fontSize: '24px',
            color: '#333',
            formatter: (val) => `${val}%`,
          },
        },
        hollow: {
          size: '70%',
          background: 'transparent',
        },
        track: {
          background: '#e0e0e0',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: ['#800080'], // Purple
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: []
      },
      colors: ['#0000FF'], // Blue
    },
    
    
    stroke: {
      lineCap: 'round',
    },
    labels: [],
  };

  return (
    <div>
      <div id="chart">
        <ApexCharts
          ref={chartRef}
          options={options}
          series={[currentValue]}
          type="radialBar"
          height={300}
        />
      </div>
    </div>
  );
};

export default RadialChart;