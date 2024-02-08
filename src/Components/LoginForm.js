import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [showPassword, setShowPassword] = useState(false)
    
    function changeHandler(event){
        setFormData((prev) => (
            {
                ...prev, [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        console.log(formData);
        toast.success('Logged In');
        navigate('/dashboard');
    }

  return (
    <form onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'    
    >
        <label htmlFor='email' className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address<sup className=' text-pink-200'>*</sup> </p>
            <input required
                className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                w-full p-[12px]'
                name='email' id='email' type='email' 
                placeholder='Enter Email Address'
                value={FormData.email}
                onChange={changeHandler}
            />
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
            >Password<sup className=' text-pink-200'>*</sup> </p>
            <input required
                className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                w-full p-[12px]'
                name='password' 
                type= {showPassword ? ('text') : 'password'} 
                placeholder='Enter Password'
                value={FormData.password}
                onChange={changeHandler}
            />

            <span className='absolute right-3 top-[50%] cursor-pointer'>
                {
                    showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'
                     onClick={() => setShowPassword(false)}/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'
                    onClick={() => setShowPassword(true)}/>)
                }
            </span>

        </label>
        
        <Link to='#'>
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                Forgot Password ?
            </p>
        </Link>
        
        <button className=' bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] text-richblack-900 mt-6'>Sign In</button>

    </form>
  )
}

export default LoginForm