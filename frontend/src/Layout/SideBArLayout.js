import { Outlet } from "react-router-dom";

import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

const SideBarLayout = () => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <Outlet />
                        <div className="flex justify-center space-x-4 p-4">
                            <a href="/dashboards/admin" className="">Admin</a>
                            <a href="/dashboards/employee" className="">Employee</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarLayout