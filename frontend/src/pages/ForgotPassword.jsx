import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // send the secure code to the backend
        console.log("secure code send successfully");
    }

    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    {/* Forgot password */}
                    <div className="card px-sm-6 px-0">
                        <div className="card-body">
                            <div className='text-center mt-2 mb-8'>
                                <FaFingerprint className="text-blue-500 mx-auto text-5xl" />
                            </div>
                            <h4 className="mb-1">Forgot Password? 🔒</h4>
                            <p className="mb-6">Enter your email and we'll send you instructions to reset your password</p>
                            <form id="formAuthentication" className="mb-6"
                                onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label for="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        autofocus />
                                </div>
                                <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
                            </form>
                            <div className="text-center">
                                <Link to="/login" className="text-blue-400 flex justify-center items-center gap-2">
                                    <IoIosArrowBack />
                                    Back to login
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* /Forgot Password */}
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
