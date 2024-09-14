import React, { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdKeyboardArrowRight } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbClockDown, TbClockShare as TbClockUp, TbClockCheck, TbClockExclamation } from 'react-icons/tb';

import AttendanceRow from './AttendanceRow';

const Attendance = () => {
    const data = [
        { date: "Wed, 17 July 2024", clockIn: "09:01", clockOut: "--:--", hours: "--:--", location: null, status: 'arrow-down', color: 'text-blue-500' },
        { date: "Tue, 16 July 2024", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-red-500' },
        { date: "Mon, 15 July 2024", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-red-500' },
        { date: "Weekend", clockIn: "Sat, 14 July 2024 & Sun, 13 July 2024", clockOut: "", hours: "", location: null, status: 'weekend', color: '' },
        { date: "Fri, 12 July 2024", clockIn: "09:01", clockOut: "--:--", hours: "--:--", location: null, status: 'arrow-down', color: 'text-blue-500' },
        { date: "Thu, 11 July 2024", clockIn: "09:10", clockOut: "06:00", hours: "8:10 hr", location: null, status: 'arrow-down', color: 'text-orange-500' },
        { date: "Tue, 10 July 2024", clockIn: "09:10", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-blue-500' },
    ];

    const [mobileView, setMobileView] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth > 640);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="bg-white rounded-lg shadow-md mt-4">
            <div className="flex flex-col justify-between items-center">
                {/* Day changer */}
                <div className="w-full h-24 px-4 py-2 text-blue-400 text-center text-2xl font-bold flex justify-between items-center border-b">
                    <MdArrowBackIos className='cursor-pointer' />
                    <div className='flex items-center gap-2'>
                        <FaCalendarAlt className='cursor-pointer' />
                        July 2024
                    </div>
                    <MdArrowForwardIos className='cursor-pointer' />
                </div>

                {/* Avg Timing Stats */}
                <div className="w-full h-32 px-2 flex items-center text-center border-t max-sm:py-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 max-sm:space-y-2">
                    <div className='flex sm:flex-1 justify-center items-center text-start space-x-2 mx-1'>
                        <TbClockDown className='max-sm:w-10 max-sm:h-10 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                        <div className='flex flex-col items-start '>
                            <p className="max-md:text-base md:text-lg lg:text-2xl font-bold">09:20</p>
                            <p className="max-md:text-xs md:text-xs lg:text-sm text-gray-500">Avg Clock In</p>
                        </div>
                    </div>
                    <div className="max-sm:hidden h-10 w-px bg-gray-300"></div>
                    <div className='flex sm:flex-1 justify-center items-center text-start space-x-2 mx-1'>
                        <TbClockUp className='max-sm:w-10 max-sm:h-10 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                        <div className='flex flex-col items-start'>
                            <p className="max-md:text-base md:text-lg lg:text-2xl font-bold">05:56</p>
                            <p className="max-md:text-xs md:text-xs lg:text-sm text-gray-500">Avg Clock Out</p>
                        </div>
                    </div>
                    <div className="max-sm:hidden h-10 w-px bg-gray-300"></div>
                    <div className='flex sm:flex-1 justify-center items-center text-start space-x-2 mx-1'>
                        <TbClockCheck className='max-sm:w-10 max-sm:h-10 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                        <div className='flex flex-col items-start'>
                            <p className="max-md:text-base md:text-lg lg:text-2xl text-wrap font-bold">8hr 30m</p>
                            <p className="max-md:text-xs md:text-xs lg:text-sm text-gray-500">Avg Work Hr</p>
                        </div>
                    </div>
                    <div className="max-sm:hidden h-10 w-px bg-gray-300"></div>
                    <div className='flex sm:flex-1 justify-center items-center text-start space-x-2 mx-1'>
                        <TbClockExclamation className='max-sm:w-10 max-sm:h-10 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                        <div className='flex flex-col items-start'>
                            <p className="max-md:text-base md:text-lg lg:text-2xl font-bold">05</p>
                            <p className="max-md:text-xs md:text-xs lg:text-sm text-gray-500">Absent/Leaves</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attendance Records */}
            <div className="w-full mt-6">
                <div className="bg-gray-100 text-gray-600 py-3 mx-2 font-semibold rounded-lg">
                    <div className="flex px-4 max-sm:text-xs sm:text-sm md:text-base font-normal">
                        <div className="w-[55%] max-sm:w-[40%]">Date</div>
                        <div className="w-[15%] max-sm:w-[20%]">Clock In</div>
                        <div className="w-[15%] max-sm:w-[20%]">Clock Out</div>
                        <div className="w-[15%] max-sm:w-[20%]">Working Hr's</div>
                        <span className="invisible"><MdKeyboardArrowRight /></span>
                    </div>
                </div>
                <div className="text-gray-800">
                    {data.map((row, index) => (
                        <AttendanceRow key={index} row={row} isMobileView={mobileView} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Attendance;