import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoSearch, IoMenu } from "react-icons/io5";


const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            {/* <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                    <IoMenu className='bx bx-menu bx-md' />
                </a>
            </div> */}

            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                {/* Search */}
                <div>
                    <IoMenu className='bx bx-menu bx-md text-xl mr-4 cursor-pointer' />
                </div>
                <div className="navbar-nav align-items-center">
                    <div className="nav-item d-flex align-items-center">
                        <IoSearch className='text-2xl' />
                        <input
                            type="text"
                            className="form-control border-0 shadow-none ps-1 ps-sm-2"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            aria-label="Search..." />
                    </div>
                </div>
                {/* /Search */}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* <!-- Place this tag where you want the button to render. -->
                    <li className="nav-item lh-1 me-4">
                        <a
                            className="github-button"
                            href="https://github.com/themeselection/sneat-html-admin-template-free"
                            data-icon="octicon-star"
                            data-size="large"
                            data-show-count="true"
                            aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                        >Star</a
                        >
                    </li> */}

                    {/* User */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a
                            className="nav-link dropdown-toggle hide-arrow p-0"
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown">
                            <div className="avatar avatar-online">
                                <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                            </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a className="dropdown-item" href="#">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 me-3">
                                            <div className="avatar avatar-online">
                                                <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">John Doe</h6>
                                            <small className="text-muted">Admin</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div className="dropdown-divider my-1"></div>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-user bx-md me-3"></i><span>My Profile</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#"> <i className="bx bx-cog bx-md me-3"></i><span>Settings</span> </a>
                            </li>
                            <li>
                                <div className="dropdown-divider my-1"></div>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="login">
                                    <i className="bx bx-power-off bx-md me-3"></i><span>Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* / User */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;