import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProfileCard from "../components/ProfileCard";
import Attendance from "../components/Attendance/Attendance";

function EmployeeDashboard() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    fetchAttendanceRecords();
  }, []);

  const fetchAttendanceRecords = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/attendance', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setAttendanceRecords(res.data);
    } catch (error) {
      console.error('Error fetching attendance records:', error);
    }
  };

  const recordAttendance = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          await axios.post('http://localhost:5000/api/attendance', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }, {
            headers: { 'x-auth-token': localStorage.getItem('token') }
          });
          fetchAttendanceRecords();
        } catch (error) {
          console.error('Error recording attendance:', error);
        }
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="container py-4 bg-[#F4F7FC]">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-3">
        <div className="sm:col-span-1 max-md:flex max-md:flex-col">
          <ProfileCard />
          {/* <button className="bg-[#FF8082] text-white px-4 py-2 rounded-sm my-3">
            Block Account
          </button> */}
        </div>
        <div className="md:col-span-3">
          {/* <div className="rounded-full text-[#C3CACC] shadow-sm">
            <div className="flex max-sm:text-xs sm:text-sm md:text-base">
              <button className="bg-[#4783E2] text-white flex-1 px-4 py-2 border max-md:rounded-l-lg md:rounded-l-full">
                Attendance
              </button>
            </div>
          </div> */}
          <Attendance />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
