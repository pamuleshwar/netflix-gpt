import { Link } from "react-router-dom"
import Header from "./Header"
import { useState, useRef } from "react"
import { checkValidEmailPassword } from "../utils/validateSignForm"

const Login = () => {

  const [isSignIn,setIsSignIn] = useState(true);

  //error-messages
  const [errorMsg, setErrorMsg] = useState(null);

  //ref the email and password to input
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //validate the email, password
  const handleValidation = () => {
    const message = checkValidEmailPassword(name?.current?.value,email?.current?.value,password?.current?.value);
    
    setErrorMsg(message)
  }

  const handleSignup = () => {
    setIsSignIn(!isSignIn);
  }
  
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg" alt="background-image" className=""/>
      </div>

      <div className="absolute bg-black rounded-lg w-5/12 my-24 mx-auto right-0 left-0 bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col p-16">
          <h1 className="text-white text-4xl font-bold mb-3 ml-2">{isSignIn ? "Sign in" : "Sign up"}</h1>

          {!isSignIn && <input ref={name} type="text" placeholder="Good Name" className="text-white m-2 p-3 rounded-md bg-gray-800"/>}
          {!isSignIn && errorMsg == "Enter valid name" &&  <p className="text-red-500 text-sm ml-2 p-2">{errorMsg}</p>}

          <input ref={email} type="text" placeholder="Email" className="text-white m-2 p-3 rounded-md bg-gray-800"/>
          {errorMsg === "Enter valid email" && <p className="text-red-500 text-sm ml-2 p-2">{errorMsg}</p>}

          <input ref={password} type="password" placeholder="Password" className="text-white m-2 p-3 rounded-md bg-gray-800"/>
          {errorMsg === "Enter valid password" && <p className="text-red-500 text-sm ml-2 p-2">{errorMsg}</p>}

          <button className="mx-2 p-3 my-2 bg-red-600 text-white rounded-lg" onClick={handleValidation}>{isSignIn ? "Sign in" : "Sign up"}</button>

          {!isSignIn && <span className="mx-auto py-2 text-gray-500">-- OR --</span>}

          {!isSignIn && <span className="bg-gray-700 mx-2 my-1 p-3 rounded-md text-center text-white cursor-pointer">Use a sign-up code</span>}

          {isSignIn && <span className="text-center p-2 text-white cursor-pointer">Forgot password?</span>}

          <span className="m-2 p-2 text-gray-400">{isSignIn ? "New to Netflix?" : "Prime user!"} <span className="font-bold text-white cursor-pointer" onClick={handleSignup}>{isSignIn ? "Sign up now" : "Sign in now"}</span>.</span>

          <div className="m-2 p-2">
            <input type="checkbox" className="my-auto"/>
            <span className="text-white ml-2 my-auto">Remember me</span>
          </div>

          <span className="m-2 p-2 text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to={""} className="text-blue-600">Learn more.</Link> </span>
        </form>
      </div>
      
    </div>
  )
}

export default Login