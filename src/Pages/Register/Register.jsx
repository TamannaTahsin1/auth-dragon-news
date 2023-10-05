
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";


const Register = () => {
    // calling context
    const {createUser} =  useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

          //   create user
    createUser(email, password)
    .then(result => {console.log(result.user)})
    .catch(error => {
        console.error(error)
    })

      }


    return (
        <div>
          <Navbar></Navbar>
        <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-3xl font-bold'>Register Here</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleRegister} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='name'
                  name="name"
                  placeholder='Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo</span>
                </label>
                <input
                  type='text'
                  name="photo"
                  placeholder='Photo URL'
                  className='input input-bordered'
                  required
                />
              </div>
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
                <button className='btn btn-primary'>Register</button>
              </div>
            </form>
            <p className="p-3">Already have an account? <Link to='/login' className="text-blue-600 ml-2"> Login</Link> </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;