import { FaGoogle, FaGithubAlt, FaFacebookF,FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../src/assets/qZone1.png'
import qZone2 from '../../../src/assets/qZone2.png'
import qZone3 from '../../../src/assets/qZone3.png'



const RightSideNav = () => {
    return (
        <div>
            {/* login with */}
            <div className='p-4'>
            <h2 className="text-xl">Login With</h2>
            <button className='btn btn-outline w-full mt-4 mb-4'> 
            <FaGoogle></FaGoogle>Login with Google
            </button>
            <button className='btn btn-outline w-full'> 
            <FaGithubAlt></FaGithubAlt>Login with Github
            </button>
            </div>
            {/* find us on */}
            <div className='p-4'>
            <h2 className="text-xl mb-4">Find us on</h2>
            <a href="" className='flex items-center gap-5 p-4 border rounded-t-lg'>
                <FaFacebookF></FaFacebookF> Facebook
            </a>
            <a href="" className='flex items-center gap-5 p-4 border-x'>
               <FaTwitter></FaTwitter> Twitter
            </a>
            <a href="" className='flex items-center gap-5 p-4 border rounded-b-lg'>
                <FaInstagram></FaInstagram> Instagram
            </a>
            </div>
            {/* q-zone */}
            <div className='p-4'>
            <h2 className="text-xl mb-4">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>
            {/* mini banner */}
            <div>
            <div className="hero min-h-[50vh] w-72" style={{backgroundImage: 'url(./bg.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="mx-auto">
      <h1 className="mb-5 text-2xl font-bold">Create an Amazing Newspaper</h1>
      <p className="mb-5 text-sm">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className="btn btn-secondary">Learn More</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default RightSideNav;