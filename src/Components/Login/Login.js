import Template from "../Template"
import LoginImg from '../../Assets/login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
      title={'Welcome Back'}
      desc1={'Build skills for today, tomorrow and beyond.'}
      desc2={'Education to future-proof your career.'}
      image={LoginImg}
      setIsLoggedIn={setIsLoggedIn} 
      formType={'login'}
    />    
  )
}

export default Login