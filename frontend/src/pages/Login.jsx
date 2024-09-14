import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { FaFingerprint } from 'react-icons/fa'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      navigate(res.data.role === 'admin' ? '/admin' : '/employee');
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          {/* Login */}
          <div className="card px-sm-6 px-0">
            <div className="card-body">
              <div className='text-center mt-2 mb-8'>
                <FaFingerprint className="text-blue-500 mx-auto text-5xl" />
                <h2 className="text-3xl font-bold mt-2">Sign In</h2>
              </div>
              <form id="formAuthentication" className="mb-6"
                onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="email" className="form-label">Email or Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email or username"
                    autofocus />
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
                      onChange={e => e.target.value}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password" />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="d-flex justify-content-between mt-8">
                    <div className="form-check mb-0 ms-2">
                      <input className="form-check-input" type="checkbox" id="remember-me" />
                      <label className="form-check-label" for="remember-me"> Remember Me </label>
                    </div>
                    <Link to="/forgot-password">
                      <span>Forgot Password?</span>
                    </Link>
                  </div>
                </div>
                <div className="mb-6">
                  <Link to="/dashboards/admin">
                    <button className="btn btn-primary d-grid w-100" type="submit">
                      Login
                    </button>
                  </Link>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <Link to="/register">
                  <span className='mx-1 text-blue-400'>Create an account</span>
                </Link>
              </p>
            </div>
          </div>
          {/* /Login */}
        </div>
      </div>
    </div>
  );
}

export default Login;