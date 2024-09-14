import { Outlet } from "react-router-dom";

import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const SideBarLayout = () => {
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <Outlet />
                        {/* <Footer /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarLayout