import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DirectionHeader from '../../components/common/DirectionHeader/DirectionHeader';
import { NotificationContext } from '../../context/NotificationContext';
import { loginUser } from '../../services/auth';
import Notification from '../../components/common/Notification/Notification';

const Login: React.FC = () => {
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      warningNotification('Please fill in all fields');
    } else {
      try {
        await loginUser(email, password);
        successNotification('Login successful');
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        errorNotification('Invalid email or password');
        console.error('Login failed:', error);
      }
    }
  };

  return (
    <div className='login-page'>
      <DirectionHeader direction='login' title='Login' />
      <div className="login d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <form onSubmit={loginHandler}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" placeholder='Email...' className="form-control shadow-none" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" placeholder='Password...' className="form-control shadow-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-question d-flex align-items-center justify-content-end">
              <Link to='/forgotpassword'>Forgot your password?</Link>
            </div>
            <button type="submit" className="btn text-white fw-medium fs-6">Submit</button>
            <Notification />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login