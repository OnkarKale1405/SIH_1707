import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaLocationDot } from 'react-icons/fa6';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const AttendanceRow = ({ row }) => {
    const [showLocation, setShowLocation] = useState(false);

    // Toggle the location visibility on click
    const handleToggleLocation = () => {
        setShowLocation(prev => !prev);
    };

    return (
        <>
            {
                row.status === "weekend" ?
                    <div className="text-center font-semibold bg-yellow-100 p-1 rounded-md px-4 py-2 mx-2 my-2 max-sm:text-xs sm:text-xs md:text-lg">Weekend<br /> {row.clockIn}</div>
                    : (
                        <div className="border-b">
                            <div className={`flex mx-2 py-4 bg-white`}>
                                <div className='w-full flex px-4'>
                                    <div className="max-sm:text-xs sm:text-sm md:text-base w-[55%] max-sm:w-[40%]">
                                        {row.date}
                                    </div>
                                    <div className="w-[15%] max-sm:w-[20%] flex items-center">
                                        {row.status === 'arrow-down' && <FaArrowDown className={`${row.color}`} />}
                                        {row.status === 'arrow-down-up' && <FaArrowDown className={`${row.color}`} />}
                                        <span className={`font-bold ${row.color} max-sm:text-xs sm:text-sm md:text-base`}>{row.clockIn}</span>
                                    </div>
                                    <div className="w-[15%] max-sm:w-[20%] flex items-center">
                                        {row.clockOut ? (
                                            <div className='flex items-center max-sm:text-xs sm:text-sm md:text-base'>
                                                <FaArrowUp className="inline text-green-500" />
                                                <span className="font-bold text-green-500">{row.clockOut}</span>
                                            </div>
                                        ) : (
                                            '--:--'
                                        )}
                                    </div>
                                    <div className="w-[15%] max-sm:w-[20%] max-sm:text-xs sm:text-sm md:text-base font-bold">{row.hours || '--:--'}</div>
                                    <div onClick={row.location ? handleToggleLocation : null}>
                                        {row.location ? (showLocation ? <MdKeyboardArrowDown className='cursor-pointer' /> : <MdKeyboardArrowRight className='cursor-pointer' />) : <span className="invisible"><MdKeyboardArrowRight /></span>}
                                    </div>
                                </div>
                            </div>

                            {/* Collapsible location details */}
                            <div
                                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${showLocation ? 'max-h-40' : 'max-h-0'}`}
                            >
                                {row.location && (
                                    <div className='flex mx-2 px-2 pb-5'>
                                        <div className='w-[55%] max-sm:w-[40%]'></div>
                                        <div className='w-[15%] max-sm:w-[20%]'>
                                            <div className="flex items-start">
                                                <div className='bg-white flex space-x-1'>
                                                    <FaLocationDot className="text-blue-500" />
                                                    <div className="text-gray-600 max-sm:text-[0.55rem] sm:text-xs md:text-xs lg:text-sm">{row.location}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-[15%] max-sm:w-[20%]'>
                                            {row.clockOut !== '--:--' && (
                                                <div className="flex items-start space-x-1">
                                                    <FaLocationDot className="text-green-500" />
                                                    <span className="text-gray-600 max-sm:text-[0.55rem] sm:text-xs md:text-xs lg:text-sm">{row.location}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className='w-[15%] max-sm:w-[20%]'></div>
                                        <span className="invisible"><MdKeyboardArrowRight /></span>
                                    </div>
                                )}

                            </div>
                        </div>

                    )
            }
        </>
    );
};

export default AttendanceRow;