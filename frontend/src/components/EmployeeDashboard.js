import React, { useState, useEffect } from 'react';
   import axios from 'axios';

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
       <div>
         <h1>Employee Dashboard</h1>
         <button onClick={recordAttendance}>Record Attendance</button>
         <h2>Attendance Records</h2>
         <ul>
           {attendanceRecords.map((record) => (
             <li key={record._id}>
               Time: {new Date(record.timestamp).toLocaleString()}, 
               Location: {record.location.coordinates.join(', ')}
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default EmployeeDashboard;