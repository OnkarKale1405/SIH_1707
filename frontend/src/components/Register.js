import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
       <form onSubmit={handleSubmit}>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
         <select value={role} onChange={(e) => setRole(e.target.value)}>
           <option value="employee">Employee</option>
           <option value="admin">Admin</option>
         </select>
         <button type="submit">Register</button>
       </form>
     );
   }

   export default Register;