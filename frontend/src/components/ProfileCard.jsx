import React, { useState, useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import EmployeeImg from "../assets/img/shivam.jpeg";

const ProfileCard = ({ employeeData = {} }) => {
  const [mobileView, setMobileView] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600 p-1 rounded-lg shadow-lg">
    <div className="border border-gray-300 p-1 rounded-lg shadow-lg">

      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col items-center">
          <img
            src={EmployeeImg}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">
            {employeeData.name || "Shivam"}
          </h2>
          <p className="text-blue-600 font-semibold">
            {employeeData.position || "Data Engineer"}
          </p>

          <div className="mt-6 w-full">
            <div className="space-y-3 text-sm">
              <p className="flex items-center text-gray-600">
                <TfiEmail className="mr-2 text-blue-500" />
                {employeeData.email || "iammustery@gmail.com"}
              </p>
              <p className="flex items-center text-gray-600">
                <FaPhoneAlt className="mr-2 text-purple-500" />
                {employeeData.phone || "+91 1234567890"}
              </p>
              <p className="flex items-center text-gray-600">
                <FaLocationDot className="mr-2 text-purple-500" />
                {employeeData.location || "Mumbai, India"}
              </p>

              {/* Additional fields */}
              <p className="flex items-center text-gray-600">
                <span className="mr-2 font-bold">Employee ID:</span>
                {employeeData.employeeId || "EMP12345"}
              </p>
              {/* <p className="flex items-center text-gray-600">
                <span className="mr-2 font-bold">Date of Birth:</span>
                {employeeData.dob || "1990-01-01"}
              </p> */}
              <p className="flex items-center text-gray-600">
                <span className="mr-2 font-bold">Gender:</span>
                {employeeData.gender || "Male"}
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2 font-bold">Team:</span>
                {employeeData.team || "Development"}
              </p>
              {/* <p className="flex items-center text-gray-600">
                <span className="mr-2 font-bold">Department:</span>
                {employeeData.department || "Engineering"}
              </p> */}
            </div>
          </div>

          <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out">
            Show more details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
