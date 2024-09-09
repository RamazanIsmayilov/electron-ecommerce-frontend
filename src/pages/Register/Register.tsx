import React from 'react'
import { Link } from 'react-router-dom'
import DirectionHeader from '../../components/common/DirectionHeader/DirectionHeader'

const Register:React.FC = () => {
  return (
    <div className='register-page'>
      <DirectionHeader direction='Create Account' title='Create Account' />
      <div className="register d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" placeholder='Name...' className="form-control shadow-none" />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input type="text" placeholder='Surname...' className="form-control shadow-none" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" placeholder='Email...' className="form-control shadow-none" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" placeholder='Password...' className="form-control shadow-none" />
            </div>
            <div className="login-question d-flex align-items-center justify-content-end">
              <Link to='/login'>Already have an account?</Link>
            </div>
            <button type="submit" className="btn text-white fw-medium fs-6">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register