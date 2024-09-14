import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaFingerprint } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                {/* Logo */}
                <div className='flex items-center gap-4'>
                    <FaFingerprint className="text-blue-500 mx-auto text-4xl" />
                    <h2 className="text-2xl font-bold mt-2">Company</h2>
                </div>
                {/* /Logo */}

                <a href="javascript:void(0);" className="layout-menu-toggle menu-NavLink text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm d-flex align-items-center justify-content-center"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1 mt-4 space-y-">
                <li className="menu-item">
                    <NavLink
                        to="/dashboards/admin"
                        className={({ isActive }) =>
                            `menu-NavLink d-flex justify-content-between align-items-center mx-2 px-2 py-3 rounded-lg ${isActive ? 'bg-[#5283E1] text-white' : 'bg-white hover:bg-[#E7E7FF]'}`
                        }
                        style={{ color: 'inherit' }}
                    >
                        <div className='flex gap-2'>
                            <MdAdminPanelSettings className='text-xl' />
                            <div className="text-truncate" data-i18n="Dashboards">Admin</div>
                        </div>
                        <IoIosArrowForward />
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink
                        to="/dashboards/employee"
                        className={({ isActive }) =>
                            `menu-NavLink d-flex justify-content-between align-items-center mx-2 px-2 py-3 rounded-lg ${isActive ? 'bg-[#5283E1] text-white' : 'bg-white hover:bg-[#E7E7FF]'}`
                        }
                        style={{ color: 'inherit' }}
                    >
                        <div className='flex gap-2'>
                            <CiUser className='text-xl' />
                            <div className="text-truncate" data-i18n="Dashboards">Employee</div>
                        </div>
                        <IoIosArrowForward />
                    </NavLink>
                </li>

            </ul>
        </aside >
    )
}

export default Sidebar