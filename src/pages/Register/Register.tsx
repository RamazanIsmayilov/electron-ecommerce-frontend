import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DirectionHeader from '../../components/common/DirectionHeader/DirectionHeader';
import { NotificationContext } from '../../context/NotificationContext';
import Notification from '../../components/common/Notification/Notification';
import { registerUser } from '../../services/auth';

const Register: React.FC = () => {
  const { successNotification, warningNotification, errorNotification } = useContext(NotificationContext);
  const [name, setName] = useState('')
  const [surname, setSurName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !surname || !email || !password) {
      warningNotification('Please fill in all fields');
    } else {
      try {
        await registerUser(name, surname, email, password);
        successNotification('Your account has been successfully created');
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } catch (error) {
        errorNotification('Registration failed. Please try again later.');
        console.error('Registration failed:', error);
      }
    }
  };

  return (
    <div className='register-page'>
      <DirectionHeader direction='Create Account' title='Create Account' />
      <div className="register d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <form onSubmit={registerHandler}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" placeholder='Name...' className="form-control shadow-none" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input type="text" placeholder='Surname...' className="form-control shadow-none" value={surname} onChange={(e) => setSurName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" placeholder='Email...' className="form-control shadow-none" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" placeholder='Password...' className="form-control shadow-none" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-question d-flex align-items-center justify-content-end">
              <Link to='/login'>Already have an account?</Link>
            </div>
            <button type="submit" className="btn text-white fw-medium fs-6">Submit</button>
            <Notification />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register