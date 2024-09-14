import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response.data);
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Register Card */}
          <div className="card px-sm-6 px-0">
            <div className="card-body">
              <div className='text-center mt-2 mb-8'>
                <FaFingerprint className="text-blue-500 mx-auto text-5xl" />
                <h2 className="text-3xl font-bold mt-2">Sign Up</h2>
              </div>
              <form id="formAuthentication" className="mb-6"
                onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your username"
                    autofocus />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="text" className="form-control" id="email" name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email" />
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" for="password">Password</label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password" />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>

                <div className="my-8">
                  <div className="form-check mb-0 ms-2">
                    <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label className="form-check-label" for="terms-conditions">
                      I agree to
                      <span className='mx-1 text-blue-400'>privacy policy & terms</span>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100">Sign up</button>
              </form>

              <p className="text-center">
                <span>Already have an account?</span>
                <Link to="/login">
                  <span className='mx-1 text-blue-400'>Sign in instead</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register Card */}
        </div>
      </div>
    </div>
  );
}

export default Register;