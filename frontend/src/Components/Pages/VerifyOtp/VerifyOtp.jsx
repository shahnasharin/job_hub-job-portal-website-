import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function VerifyOtp() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const mobile = useSelector((state) => {
    return state.mobile;
  });
  const navigate = useNavigate();
  const otpInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value !== '' && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }

    if (value === '' && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp === '') {
      setError(true);
    } else {
      axios
        .post('http://127.0.0.1:8000/api/user/verify-otp/', {
          otp: enteredOtp,
          mobile: mobile,
        })
        .then((res) => {
          if (res.data.is_verified) {
            navigate('/signin');
          } else {
            setError(true);
          }
        })
        .catch((error) => {
          setError(true);
          console.log('Error:', error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      {error && (
        <div className="text-red-500 p-4">
          <p>OTP verification failed. Please try again.</p>
        </div>
      )}
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-2xl sm:rounded-lg">
        <div className="py-10">
          <a href="/">
            <h3 className="text-4xl font-bold text-center">Verify OTP</h3>
          </a>
        </div>
        <form className="px-5 pb-10" onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded"
                type="number"
                maxLength="1"
                value={otp[index] || ''}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                ref={(el) => (otpInputs.current[index] = el)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md active:bg-gray-900"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
