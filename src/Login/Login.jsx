/** @format */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email,password)

    signIn(email,password)
    .then(result => {
      console.log(result)
      // navigate after login
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-3xl font-bold'>Please Login!</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleLogin} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name="email"
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name="password"
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
            <p className="p-3">Dont have an account? <Link to='/register' className="text-blue-600 ml-2"> Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
