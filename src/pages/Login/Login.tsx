import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAdmin } from '../../services/authService';
import DirectionHeader from '../../components/common/DirectionHeader/DirectionHeader';
import { NotificationContext } from '../../context/NotificationContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      warningNotification('Please fill in all fields!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        if (token) {
          localStorage.setItem('token', token);
          if (isAdmin()) {
            successNotification('Login successful. Redirecting to the dashboard...');
            navigate('/dashboard');
          } else {
            successNotification('Login successful. Redirecting to the homepage...');
            navigate('/');
          }
        } else {
          errorNotification('Invalid email or password.');
        }
      } else {
        errorNotification('Invalid email or password.');
      }
    } catch (error) {
      errorNotification('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className='login-page'>
      <DirectionHeader direction='login' title='Login' />
      <div className="login d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder='Email...'
                className="form-control shadow-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                placeholder='Password...'
                className="form-control shadow-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="login-question d-flex align-items-center justify-content-end">
              <Link to='/forgotpassword'>Forgot your password?</Link>
            </div>
            <button type="submit" className="btn text-white fw-medium fs-6">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
