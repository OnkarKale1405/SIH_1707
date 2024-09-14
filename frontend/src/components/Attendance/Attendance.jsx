import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos, MdKeyboardArrowRight } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbClockDown, TbClockShare as TbClockUp, TbClockCheck, TbClockExclamation } from 'react-icons/tb';

import AttendanceRow from './AttendanceRow';

const Attendance = () => {
    const data = [
        { date: "Wed, 17 July 2019", clockIn: "09:01", clockOut: "--:--", hours: "--:--", location: null, status: 'arrow-down', color: 'text-blue-500' },
        { date: "Tue, 16 July 2019", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-red-500' },
        { date: "Mon, 15 July 2019", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-red-500' },
        { date: "Weekend", clockIn: "Sat, 14 July 2019 & Sun, 13 July 2019", clockOut: "", hours: "", location: null, status: 'weekend', color: '' },
        { date: "Fri, 12 July 2019", clockIn: "09:01", clockOut: "--:--", hours: "--:--", location: null, status: 'arrow-down', color: 'text-blue-500' },
        { date: "Thu, 11 July 2019", clockIn: "09:10", clockOut: "06:00", hours: "8:10 hr", location: null, status: 'arrow-down', color: 'text-orange-500' },
        { date: "Tue, 10 July 2019", clockIn: "09:10", clockOut: "06:10", hours: "8:20 hr", location: "R&D Office Islamabad", status: 'arrow-down-up', color: 'text-blue-500' },
    ];

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
                <div className="w-full h-32 px-4 flex items-center text-center border-t">
                    <div className='flex flex-1 justify-start items-center'>
                        <TbClockDown className='w-10 h-10 m-4' />
                        <div className='flex flex-col items-start'>
                            <p className="text-2xl font-bold">09:20</p>
                            <p className="text-sm text-gray-500">Avg Clock In</p>
                        </div>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div className='flex flex-1 justify-start items-center'>
                        <TbClockUp className='w-10 h-10 m-4' />
                        <div className='flex flex-col items-start'>
                            <p className="text-2xl font-bold">05:56</p>
                            <p className="text-sm text-gray-500">Avg Clock Out</p>
                        </div>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div className='flex flex-1 justify-start items-center'>
                        <TbClockCheck className='w-10 h-10 m-4' />
                        <div className='flex flex-col items-start'>
                            <p className="max-md:text-lg md:text-2xl font-bold">8h 20m</p>
                            <p className="max-md:text-xs md:text-sm text-gray-500">Avg Working Hr</p>
                        </div>
                    </div>
                    <div className="h-10 w-px bg-gray-300"></div>
                    <div className='flex flex-1 justify-start items-center'>
                        <TbClockExclamation className='w-10 h-10 m-4' />
                        <div className='flex flex-col items-start'>
                            <p className="text-xl font-bold">05</p>
                            <p className="text-gray-500">Absent / Leaves</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attendance Records */}
            <div className="w-full mt-6">
                <div className="bg-gray-100 text-gray-600 py-3 mx-2 font-semibold rounded-lg">
                    <div className="flex px-4 font-normal">
                        <div className="w-[55%]">Date</div>
                        <div className="w-[15%]">Clock In</div>
                        <div className="w-[15%]">Clock Out</div>
                        <div className="w-[15%]">Working Hr's</div>
                        <span className="invisible"><MdKeyboardArrowRight /></span>
                    </div>
                </div>
                <div className="text-gray-800">
                    {data.map((row, index) => (
                        <AttendanceRow key={index} row={row} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Attendance;