import Template from "../Template"
import signUpImg from '../../Assets/signup.png'
const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title={'Join the millions learning to code with StudyNotion for free'}
      desc1={'Build skills for today, tomorrow and beyond.'}
      desc2={'Education to future-proof your career.'}
      image={signUpImg}
      formType={'sign-up'}
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUp