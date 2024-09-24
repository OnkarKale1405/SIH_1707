import React, { useState } from 'react';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employeeId: '', // This can be auto-generated
    dateOfBirth: '',
    age: '',
    phone: '',
    email: '',
    address: '',
    team: '',
    position: '',
    workMode: 'hybrid', // Default value
    employmentType: 'full-time', // Default value
    gender: '',
    joiningDate: '',
    idCard: null,
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="container py-4 bg-gray-100">
    <form onSubmit={handleSubmit} className="p-6 border border-gray-300 bg-white rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Upload Profile Photo:</label>
        <input
          type="file"
          name="profilePhoto"
          onChange={handleFileChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Employee Name:</label>
        <input
          type="text"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Employee ID:</label>
        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          readOnly // Auto-generated ID can be set here
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>


      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Address:</label>
        <textarea
          name="address" 
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Team:</label>
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Position:</label>
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Work Mode:</label>
        <select
          name="workMode"
          value={formData.workMode}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="hybrid">Hybrid</option>
          <option value="in-office">In Office</option>
          <option value="remote">Remote</option>
        </select>
      </div>


      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-blue-600">Joining Date:</label>
        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4 ">
        <label className="block mb-1 text-blue-600">Upload ID Card:</label>
        <input
          type="file"
          name="idCard"
          onChange={handleFileChange}
          required
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>


      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        Add Employee
      </button>
    </form>
    </div>
  );
};

export default AddEmployeeForm;
