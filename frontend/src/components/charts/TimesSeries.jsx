import React from 'react';
import ApexCharts from 'react-apexcharts';

// Provided check-in and check-out data
const checkInData = [
    { y: "07:30", x: "16 Sep" },
    { y: "08:00", x: "17 Sep" },
    { y: "08:15", x: "18 Sep" },
    { y: "08:45", x: "19 Sep" },
    { y: "09:00", x: "20 Sep" },
    { y: "08:30", x: "21 Sep" },
    { y: "08:45", x: "22 Sep" },
    { y: "09:00", x: "23 Sep" },
    { y: "09:15", x: "24 Sep" },
    { y: "09:30", x: "25 Sep" },
    { y: "08:15", x: "26 Sep" },
    { y: "08:30", x: "27 Sep" },
    { y: "08:45", x: "28 Sep" },
    { y: "09:00", x: "29 Sep" },
    { y: "09:15", x: "30 Sep" }
];

const checkOutData = [
    { y: "17:30", x: "16 Sep" },
    { y: "19:00", x: "17 Sep" },
    { y: "19:15", x: "18 Sep" },
    { y: "18:15", x: "19 Sep" },
    { y: "20:20", x: "20 Sep" },
    { y: "18:10", x: "21 Sep" },
    { y: "18:40", x: "22 Sep" },
    { y: "19:00", x: "23 Sep" },
    { y: "19:00", x: "24 Sep" },
    { y: "19:30", x: "25 Sep" },
    { y: "17:15", x: "26 Sep" },
    { y: "18:30", x: "27 Sep" },
    { y: "18:25", x: "28 Sep" },
    { y: "18:10", x: "29 Sep" },
    { y: "19:15", x: "30 Sep" }
];

const TimesSeries = () => {

    const yAxisLabels = [
        "07:00", "07:30", "08:00", "08:15", "08:30", "08:45", "09:00",
        "09:15", "09:30", "17:00", "17:30", "18:00", "18:15", "18:30",
        "18:45", "19:00", "19:15", "19:30"
    ];

    const commonOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            animations: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 4,
            colors: ['#6499EF'],
            strokeWidth: 2,
            strokeColors: ['#fff'],
            hover: {
                size: 8,
            },
        },
        xaxis: {
            categories: checkInData.map(d => d.x),
            labels: {
                style: {
                    colors: '#9BA1A6',
                    fontSize: '8px',
                },
                rotate: -45,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: true,
            },
            offsetX: 0,
        },
        yaxis: {
            labels: {
                formatter: (value) => value,
                style: {
                    colors: '#9BA1A6',
                    fontSize: '10px',
                },
            },
            axisBorder: {
                show: false,
            },
            tickAmount: 5,
            categories: yAxisLabels,
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
                    '<span>' + series[seriesIndex][dataPointIndex] + ' hrs</span>' +
                    '</div>'
            },
        },
    };

    const checkInOptions = { ...commonOptions, colors: ['#6499EF'] };
    const checkOutOptions = { ...commonOptions, colors: ['#6499EF'] };

    return (
        <div className='px-4 py-6 rounded-lg flex flex-wrap justify-around item-center gap-2'>
            <div className='flex-1 p-2 min-w-[300px]'>
                <h2 className='text-xl font-semibold'>Average Check In</h2>
                <ApexCharts
                    options={checkInOptions}
                    series={[{ data: checkInData }]}
                    type="line"
                    height={250}
                />
            </div>
            <div className='flex-1 p-2 min-w-[300px]'>
                <h2 className='text-xl font-semibold'>Average Check Out</h2>
                <ApexCharts
                    options={checkOutOptions}
                    series={[{ data: checkOutData }]}
                    type="line"
                    height={250}
                />
            </div>
        </div>
    );
};

export default TimesSeries;