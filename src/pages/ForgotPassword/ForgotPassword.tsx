import React from 'react'
import DirectionHeader from '../../components/common/DirectionHeader/DirectionHeader';

const ForgotPassword: React.FC = () => {
  return (
    <div className='forgotpassword-page'>
      <DirectionHeader direction='ForgotPassword' title='Forgot Password' />
      <div className="forgotpassword d-flex align-items-center justify-content-center mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <p>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</p>
          <form className='mt-4'>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control shadow-none" />
            </div>
            <button type="submit" className="btn text-white fw-medium fs-6">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword