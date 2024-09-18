import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbClockDown, TbClockShare as TbClockUp, TbClockCheck, TbClockExclamation } from 'react-icons/tb';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Attendance = () => {
    const [selectedDate, setSelectedDate] = useState(new Date(2024, 8, 15)); // September 15, 2024

    const data = [
        { date: "Wed, 17 July 2024", clockIn: "09:01", clockOut: "--:--", hours: "--:--", status: 'normal' },
        { date: "Tue, 16 July 2024", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", status: 'late' },
        { date: "Mon, 15 July 2024", clockIn: "09:50", clockOut: "06:10", hours: "8:20 hr", status: 'late' },
        { date: "Weekend", clockIn: "Sat, 14 July 2024 & Sun, 13 July 2024", clockOut: "", hours: "", status: 'weekend' },
        { date: "Fri, 12 July 2024", clockIn: "09:01", clockOut: "--:--", hours: "--:--", status: 'normal' },
        { date: "Thu, 11 July 2024", clockIn: "09:10", clockOut: "06:00", hours: "8:10 hr", status: 'normal' },
        { date: "Tue, 10 July 2024", clockIn: "09:10", clockOut: "06:10", hours: "8:20 hr", status: 'normal' },
    ];

    const changeMonth = (increment) => {
        const newDate = new Date(selectedDate);
        newDate.setMonth(newDate.getMonth() + increment);
        setSelectedDate(newDate);
    };

    const openCalendar = () => {
        // In a real implementation, this would open a date picker
        alert("This would open a date picker in a full implementation.");
    };

    return (
        <div >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col justify-between items-center">
                    {/* Month and Year */}
                    <div className="w-full h-16 px-4 py-2 text-white text-center text-xl font-bold flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600">
                        <MdKeyboardArrowLeft className="cursor-pointer text-2xl" onClick={() => changeMonth(-1)} />
                        <div className="flex items-center gap-2 cursor-pointer" onClick={openCalendar}>
                            <FaCalendarAlt />
                            {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </div>
                        <MdKeyboardArrowRight className="cursor-pointer text-2xl" onClick={() => changeMonth(1)} />
                    </div>

                    {/* Avg Timing Stats */}
                    <div className="w-full py-4 px-2 grid grid-cols-4 gap-4 bg-white">
                        <StatItem icon={TbClockDown} value="09:20" label="Avg Clock In" />
                        <StatItem icon={TbClockUp} value="05:56" label="Avg Clock Out" />
                        <StatItem icon={TbClockCheck} value="8hr 30m" label="Avg Work Hr" />
                        <StatItem icon={TbClockExclamation} value="05" label="Absent/Leaves" />
                    </div>
                </div>

                {/* Attendance Records */}
                <div className="w-full mt-2">
                    <div className="bg-gray-100 text-gray-600 py-3 px-4 font-semibold">
                        <div className="grid grid-cols-4 gap-2 text-sm">
                            <div>Date</div>
                            <div>Clock In</div>
                            <div>Clock Out</div>
                            <div>Working Hr's</div>
                        </div>
                    </div>
                    <div className="text-gray-800">
                        {data.map((row, index) => (
                            <AttendanceRow key={index} row={row} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatItem = ({ icon: Icon, value, label }) => (
    <div className="flex items-center space-x-2">
        <Icon className="w-8 h-8 text-blue-500" />
        <div>
            <p className="text-lg font-bold text-gray-800">{value}</p>
            <p className="text-xs text-gray-500">{label}</p>
        </div>
    </div>
);

const AttendanceRow = ({ row }) => {
    const getDateColor = () => {
        switch (row.status) {
            case 'late': return 'text-red-500';
            case 'weekend': return 'text-purple-500';
            default: return 'text-blue-500';
        }
    };

    return (
        <div className={`grid grid-cols-4 gap-2 px-4 py-3 text-sm border-b ${row.status === 'weekend' ? 'bg-purple-50' : ''}`} style={{ whiteSpace: 'nowrap' }}>
            <div className={getDateColor()}>{row.date}</div>
            <div className="text-gray-800">{row.clockIn}</div>
            <div className="text-gray-800">{row.clockOut}</div>
            <div className="flex items-center justify-between text-gray-800">
                <span>{row.hours}</span>
                {row.status !== 'weekend' && <MdKeyboardArrowRight className="text-gray-400" />}
            </div>
        </div>
    );
};

export default Attendance;
