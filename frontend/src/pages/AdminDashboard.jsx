import React from "react";
import Chart from "react-apexcharts";
import { BsClockHistory } from "react-icons/bs";
import { FaBuilding, FaUsers, FaUserCheck, FaClock } from 'react-icons/fa';
// import building from "../assets/img/building.png";
// import teams from "../assets/img/teams.png";
// import activeEmployee from "../assets/img/activeEmployee.jpg";

// Assuming these components are available in your project
import RadialChart from "../components/charts/RadicalChart";
import MultipleRadicalChart from "../components/charts/MultipleRadicalChart";
import TimesSeries from "../components/charts/TimesSeries";
import WorkingHoursChart from "../components/charts/WorkingHoursChart";

const GradientCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div>
        <div
          className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          {value}
        </div>

        <div
          className="text-sm text-gray-700 opacity-60"
        >
          {label}
        </div>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const chartOptions = {
    series: [
      {
        name: "On Time Login",
        data: [40, 42, 39, 41, 43, 44, 45],
      },
      {
        name: "On Leave",
        data: [5, 4, 6, 5, 3, 2, 2],
      },
      {
        name: "Outage",
        data: [2, 1, 2, 1, 1, 1, 0],
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
        curve: 'smooth',
        width: 2,
      },
      colors: ['#8884d8', '#82ca9d', '#ffc658'],
      xaxis: {
        categories: ["09 SEP", "10 SEP", "11 SEP", "12 SEP", "13 SEP", "14 SEP", "15 SEP"],
        labels: {
          style: {
            colors: '#9BA1A6',
            fontSize: '10px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#9BA1A6',
            fontSize: '10px',
          },
        },
        min: 0,
        max: 50,
        tickAmount: 5,
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
  };

  return (
    
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GradientCard icon={FaBuilding} value={6} label="Total Offices" />
        <GradientCard icon={FaUsers} value={9} label="Total Teams" />
        <GradientCard icon={FaUserCheck} value={47} label="Employees" />
        <GradientCard icon={FaClock} value={39} label="Total Present" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
          <Chart
            options={chartOptions.options}
            series={chartOptions.series}
            type="line"
            height={250}
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">On Time Login</h2>
          <div className="flex justify-center">
            <RadialChart value={96} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Attendance Distribution</h2>
          <MultipleRadicalChart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Attendance Trends</h2>
          <TimesSeries />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Working Hours</h2>
          <WorkingHoursChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;