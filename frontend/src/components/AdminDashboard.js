import React, { useState, useEffect } from 'react';
   import axios from 'axios';

   function AdminDashboard() {
     const [attendanceRecords, setAttendanceRecords] = useState([]);

     useEffect(() => {
       fetchAllAttendanceRecords();
     }, []);

     const fetchAllAttendanceRecords = async () => {
       try {
         const res = await axios.get('http://localhost:5000/api/attendance/all', {
           headers: { 'x-auth-token': localStorage.getItem('token') }
         });
         setAttendanceRecords(res.data);
       } catch (error) {
         console.error('Error fetching attendance records:', error);
       }
     };

     return (
       <div>
         <h1>Admin Dashboard</h1>
         <h2>All Attendance Records</h2>
         <ul>
           {attendanceRecords.map((record) => (
             <li key={record._id}>
               Employee: {record.user.name}, 
               Time: {new Date(record.timestamp).toLocaleString()}, 
               Location: {record.location.coordinates.join(', ')}
             </li>
           ))}
         </ul>
       </div>
     );
   }

   export default AdminDashboard;