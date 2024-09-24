import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeImg from "../assets/img/shivam.jpeg";
import EmployeeImg2 from "../assets/img/dhruv.jpeg";
import EmployeeImg3 from "../assets/img/image.png";
import EmployeeImg4 from "../assets/img/profile.jpg";
import Employee5 from "../assets/img/image2.jpg";

const employees = [
  
  { id: 'EMP001', name: 'Ansar Basha', role: 'Data Analyst', team: 'Data Science', image: Employee5 },
  { id: 'EMP002', name: 'Shivam Musterya', role: 'Data Engineer', team: 'Data Science', image: EmployeeImg },
  { id: 'EMP003', name: 'Dhana Madhi', role: 'Digital marketing', team: 'Digital marketing', image: EmployeeImg3 },
  { id: 'EMP004', name: 'Muthulakshmi M', role: 'Web developer', team: 'Development', image: EmployeeImg4 },
  { id: 'EMP005', name: 'Varad Mahajan', role: 'Web developer', team: 'Development', image: Employee5 },
  { id: 'EMP006', name: 'Dhruv Sheth', role: 'Graphic designer', team: 'Design', image: EmployeeImg2 },
];

const EmployeeList = () => {
  const navigate = useNavigate();

  const handleEmployeeClick = () => {
    navigate(`/dashboards/employee`);
  };

  return (
    <div className="container py-4 bg-gray-100 text-blue-500">
      <table className="w-full border-collapse h-50">
        <thead>
          <tr className="bg-blue-100">
            <th className="p-4 text-left text-lg font-semibold">Profile</th> {/* Larger font size for column names */}
            <th className="p-4 text-left text-lg font-semibold">Name</th>
            <th className="p-4 text-left text-lg font-semibold">EMP-ID</th>
            <th className="p-4 text-left text-lg font-semibold">Role</th>
            <th className="p-4 text-left text-lg font-semibold">Team</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b hover:bg-blue-100 cursor-pointer transition-colors duration-150"
              onClick={() => handleEmployeeClick()}
              style={{ height: '80px' }} // Adjust row height
            >
              <td className="p-2">
                <div className="w-16 h-16 rounded-full overflow-hidden"> {/* Increase size and border-radius */}
                  <img src={employee.image} alt={employee.name} className="w-full h-full object-cover" />
                </div>
              </td>
              <td className="p-4">{employee.name}</td> {/* Adjust padding for row content */}
              <td className="p-4">{employee.id}</td>
              <td className="p-4">{employee.role}</td>
              <td className="p-4">{employee.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
