import React from "react";
import Chart from "react-apexcharts";

import building from "../assets/img/building.png"
import teams from "../assets/img/teams.png"
import activeEmployee from "../assets/img/activeEmployee.jpg"
import { BsClockHistory } from "react-icons/bs";


// charts
import RadialChart from "../components/charts/RadicalChart";
import MultipleRadicalChart from "../components/charts/MultipleRadicalChart";
import TimesSeries from "../components/charts/TimesSeries";
import WorkingHoursChart from "../components/charts/WorkingHoursChart";

const AdminDashboard = () => {
  const chartOptions = {
    series: [
      {
        name: "On Time Login",
        data: [20, 25, 30, 28, 35, 40, 38],  // Example data
      },
      {
        name: "On Leave",
        data: [5, 10, 15, 20, 25, 30, 35],
      },
      {
        name: "Outage",
        data: [2, 5, 8, 12, 18, 25, 30],
      }
    ],
    options: {
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'monotoneCubic',  // Smooth line appearance
        width: 2,  // Line thickness
      },
      markers: {
        size: 4,  // Marker size
        colors: ['#00E396'],  // Color of the marker
        strokeWidth: 2,  // Marker outline width
        strokeColors: ['#fff'],  // Outline color
        hover: {
          size: 8,  // Marker size on hover
        },
      },
      xaxis: {
        categories: ["01 SEP", "02 SEP", "03 SEP", "04 SEP", "05 SEP", "06 SEP", "07 SEP"],
        labels: {
          style: {
            colors: '#9BA1A6', 
            fontSize: '10px',  
          },
          rotate: -45,
        },
        axisBorder: {
          show: true, 
        },
        axisTicks: {
          show: false,
        },
        offsetX: 0,
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9BA1A6', 
            fontSize: '10px',
            borderType: 'solid'
          },
        },
        axisBorder: {
          show: true, 
        },
        min: 0, 
        max: 50, 
        tickAmount: 5,
      },
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
            '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
            '</div>'
        },
        marker: {
          show: false
        },
      },
      colors: ['#00E396'],
    },
  };


  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Offices */}
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-start items-center">
          <img src={building} alt="Total Offices" className="w-12 h-12 mb-4" />  {/* Office Icon */}
          <div className="mx-4">
            <div className="text-4xl font-semibold text-yellow-600">19</div>
            <div className="text-gray-600">Total Offices</div>
          </div>
        </div>

        {/* Total Teams */}
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-start items-center">
          <img src={teams} alt="Total Teams" className="w-12 h-12 mb-4" />  {/* Teams Icon */}
          <div className="mx-4">
            <div className="text-4xl font-semibold text-red-600">9</div>
            <div className="text-gray-600">Total Teams</div>
          </div>
        </div>

        {/* Active Employees */}
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-start items-center">
          <img src={activeEmployee} alt="Active Employees" className="w-12 h-12 mb-4" />  {/* Employees Icon */}
          <div className="mx-4">
            <div className="text-4xl font-semibold text-green-600">44</div>
            <div className="text-gray-600">Active Employees</div>
          </div>
        </div>

        {/* Total Present */}
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-start items-center">
          {/* <img src={presentIcon} alt="Total Present" className="w-12 h-12 mb-4" />  Present Icon */}
          <BsClockHistory className="w-12 h-12 mb-4 text-blue-400" />
          <div className="mx-4">
            <div className="text-4xl font-semibold text-blue-600">0</div>
            <div className="text-gray-600">Total Present</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-white shadow-md">
          <h2 className="text-lg font-semibold">On Time Login</h2>
          <Chart
            options={chartOptions.options}
            series={[chartOptions.series[0]]}
            type="line"
            width="100%"
            height="200px"
          />
        </div>
        <div className="card p-6 bg-white shadow-md">
          <h2 className="text-lg font-semibold">On Leave</h2>
          <Chart
            options={chartOptions.options}
            series={[chartOptions.series[1]]}
            type="line"
            width="100%"
            height="200px"
          />
        </div>
        <div className="card p-6 bg-white shadow-md">
          <h2 className="text-lg font-semibold">Outage</h2>
          <Chart
            options={chartOptions.options}
            series={[chartOptions.series[2]]}
            type="line"
            width="100%"
            height="200px"
          />
        </div>
      </div>

      {/* Bottom section with circular charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">On Time Login</h2>
          <div className="flex items-center justify-center mt-4">
            <RadialChart value={`44`} />
          </div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">On Leave</h2>
          <div className="flex items-center justify-center mt-4">
            <RadialChart value={`57`} />
          </div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Absent Employees</h2>
          <div className="flex items-center justify-center mt-4">
            <MultipleRadicalChart />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-4">
        <div className="card bg-white shadow-md">
          <TimesSeries />
        </div>

        <div className="card bg-white shadow-md mt-4">
          <WorkingHoursChart />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;