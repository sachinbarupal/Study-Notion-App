import { Link } from "react-router-dom"
import Logo from '../Assets/Logo.svg'
import toast from "react-hot-toast";
const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

        <Link to='/'>
            <img src={Logo} alt="logo" className="w-[160px] h-[32px]" loading="lazy"></img>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
        </nav>
        
        <div className="flex items-center gap-x-4">
            {
                isLoggedIn 
                    ? 
                (<Link to='/'>

                    <button className='bg-richblack-800 text-richblack-100 
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'

                    onClick={() => { 
                        setIsLoggedIn(false);
                        toast.success('Logged Out');
                    }}
                    
                    >Log Out</button>

                </Link>)
                    : 
                (<Link to='/login'>
                    <button className='bg-richblack-800 text-richblack-100 
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    
                    >Log In</button>
                </Link>) 
            }

            {
                isLoggedIn 
                    ?
                <Link to='/dashboard'>
                    <button className='bg-richblack-800 text-richblack-100 
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    
                    >Dashboard</button>
                </Link>
                    :
                <Link to='/sign-up'>
                    <button className='bg-richblack-800 text-richblack-100
                    py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                    
                    >Sign Up</button>
                </Link>
            }

        </div>

    </div>
  )
}

export default NavBar