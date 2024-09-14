import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import SideBarLayout from './Layout/SideBArLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/dashboards" element={<SideBarLayout />} >
          <Route
            path="employee"
            element={
              // <PrivateRoute>
                <EmployeeDashboard />
              // </PrivateRoute>
            }
          />
          <Route
            path="admin"
            element={
              // <PrivateRoute>
                <AdminDashboard />
              // </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

export default App;