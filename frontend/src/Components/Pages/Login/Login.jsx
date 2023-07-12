import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../../../Context/AuthContext';

export default function Signup() {
  const { Userlogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError(true);
    } else {
      Userlogin(email, password)
        // .then((res) => {
        //   if (res.data.is_login) {
        //     console.log(res.data.token.access);
        //     console.log('hello');
        //     localStorage.setItem('token', res.data.token.access);
        //     navigate('/');
        //   }
        //   console.log(res.data.message);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-700">Sign In</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              onChange={handleEmail}
              className="block w-full mt-1 h-10 border border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              onChange={handlePassword}
              className="block w-full mt-1 h-10 border border-gray-400 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <p className="text-xs text-gray-800 font-bold">Password must be at least 8 characters long</p>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:bg-gray-600">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-2 text-xs text-center text-gray-700">
          Not registered?{' '}
          <Link to="/user-register" className="font-medium text-gray-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
