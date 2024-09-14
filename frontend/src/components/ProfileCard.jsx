import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";

import EmployeeImg from "../assets/img/employee.png";

const ProfileCard = () => {

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
        <div className="bg-white flex max-sm:flex-col max-md:flex-row max-md:justify-around max-md:items-center md:flex-col relative px-5 py-6 rounded-sm shadow-sm border
        max-sm:text-xs sm:text-xs md:text-base">
            {/* <div className="absolute top-2 right-2 px-6 py-2 bg-[#EBF9EA] text-[#92DF93] text-sm font-semibold rounded-full cursor-pointer">
                Active
            </div> */}
            <div className="flex flex-col items-center justify-center">
                <img
                    src={EmployeeImg}
                    alt="Profile"
                    className="rounded-full max-md:w-32 max-md:h-32 md:h-40 md:w-40 mx-auto my-4"
                />
                <button className={`bg-[#E4E5EA] text-gray-400 px-3 py-1 rounded-md text-sm font-normal my-4 ${mobileView ? "visible" : "hidden"}`}>Edit Profile</button>
            </div>
            <div className="text-center my-4">
                <h2 className="text-xl font-bold">Natasha Kirovska</h2>
                <p className="text-gray-500 text-sm font-semibold">Director Business Development</p>
                <button className={`bg-[#E4E5EA] text-gray-400 px-3 py-1 rounded-md text-sm font-normal my-4 ${mobileView ? "hidden" : "visible"}`}>Edit Profile</button>
                <div className="py-5 text-gray-500 md:text-xs  max-md:text-[0.65rem] font-normal flex flex-col gap-2">
                    <p className="flex justify-between items-center">
                        <TfiEmail />
                        haseeb@neomeric.com
                    </p>
                    <p className="flex justify-between items-center">
                        <FaPhoneAlt />
                        0096898054883
                    </p>
                    <p className="flex text-right justify-between items-center">
                        <FaLocationDot />
                        130, KOM 4, Office #6, 2nd Floor<br />
                        KOM, Muscat, Sib
                    </p>
                </div>
                <select name="cars" id="cars" className="w-full bg-[#E4E5EA] text-gray-500 text-sm font-medium p-2 my-2 rounded-md">
                    <option>Show more details</option>
                </select>
            </div>
        </div>
    );
};

export default ProfileCard;