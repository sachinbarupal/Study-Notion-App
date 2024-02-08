import { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const SignUpForm = ({setIsLoggedIn}) => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        accountType:'student'
    })

    function changeHandler(event){
        const [name, value] = [event.target.name, event.target.value];
        setFormData((prev) => ({
            ...prev, [name]:value
        }))
    }

    function submitHandler(event){
        event.preventDefault();

        if(formData.confirmPassword === formData.password){
            toast.success('Acoount Created');
            setIsLoggedIn(true);
            navigate('/dashboard');
        }else{
            toast.error('Passwords do not match');
        }

    }

  return (
        <div >
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button 
                className={`${formData.accountType === 'student' ? ' bg-richblack-900 text-richblack-5' : ' bg-transparent text-richblack-200'} 
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setFormData((prev) => ({
                        ...prev, 'accountType':'student'
                    }))
                }}>Student</button>

                <button 
                className={`${formData.accountType === 'instructor' ? ' bg-richblack-900 text-richblack-5' : ' bg-transparent text-richblack-200'} 
                py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>{
                    setFormData((prev) => ({
                        ...prev, 'accountType':'instructor'
                    }))
                }}>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name & last name */}
                <div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        First Name<sup className=' text-pink-200'>*</sup> </p>
                        <input required
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            w-full p-[12px]'
                            type='text' name='firstName' 
                            placeholder='Enter First Name'
                            onChange={changeHandler}
                            value={FormData.firstName}
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Last Name<sup className=' text-pink-200'>*</sup> </p>
                        <input required
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            w-full p-[12px]'
                            type='text' name='lastName' 
                            placeholder='Enter Last Name'
                            onChange={changeHandler}
                            value={FormData.lastName}
                        />
                    </label>
                </div>

                {/* Email Address */}
                <div className='mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Email Address<sup className=' text-pink-200'>*</sup> </p>
                        <input required
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            w-full p-[12px]'
                            type='email' name='email' 
                            placeholder='Enter Email Address'
                            onChange={changeHandler}
                            value={FormData.email}
                        />
                    </label>
                </div>

                {/* create password and confirm password */}
                <div className='w-full flex flex-col md:flex-row gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Password<sup className=' text-pink-200'>*</sup></p>
                        <input required
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            w-full p-[12px]'
                            type={showPassword1 ? 'text' : 'password'} 
                            name='password' 
                            placeholder='Enter Password'
                            onChange={changeHandler}
                            value={FormData.password}
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'>
                            {
                                showPassword1 ? 
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' onClick={() => setShowPassword1(false)}/>) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' onClick={() => setShowPassword1(true)}/>)
                            }
                        </span>

                    </label>
                    
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'
                        >Confirm Password<sup className=' text-pink-200'>*</sup> </p>
                        <input required
                            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 
                            w-full p-[12px]'
                            type={showPassword2 ? 'text' : 'password'} 
                            name='confirmPassword' 
                            placeholder='Confirm Password'
                            onChange={changeHandler}
                            value={FormData.confirmPassword}
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'>
                            {
                                showPassword2 ? 
                                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' onClick={() => setShowPassword2(false)}/>) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' onClick={() => setShowPassword2(true)}/>)
                            }
                        </span>

                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium px-[12px] py-[8px] text-richblack-900 mt-6'>Create Account</button>
            </form>

            
        </div>
    )
}

export default SignUpForm