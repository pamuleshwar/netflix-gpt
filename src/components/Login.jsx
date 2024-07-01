import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import { useState, useRef } from "react"
import { checkValidEmailPassword } from "../utils/validateSignForm";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {

  const [isSignIn,setIsSignIn] = useState(true);

  //error-messages
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //ref the email and password to input
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //validate the email, password
  const handleValidation = () => {
    const message = checkValidEmailPassword(email?.current?.value,password?.current?.value);
    
    setErrorMsg(message);

    //message present
    if(message) return;

    // Sign-up & Sign-in logic Authentication
    if(!isSignIn){
      //sign-up
      createUserWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);

        //pass the user data
        updateProfile(user, {
          displayName: name?.current?.value, photoURL: "https://media.licdn.com/dms/image/D4D03AQEmyZDAtGI0_g/profile-displayphoto-shrink_200_200/0/1701241889011?e=2147483647&v=beta&t=JKhqiWHeezAlgpSCXQ3Wm5qNhTMAOaF0EhM3Zs4decs"
          })
          .then(() => {
            //update the store with current sign-in use
            const {displayName, email, uid, photoURL} = auth.currentUser;
            dispatch(addUser({displayName:displayName, email:email, uid:uid, photoURL:photoURL}));

            //sign-up successfully -> Browse movie
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMsg(error);
          });

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+"-"+errorMessage);
      })
    }
    else{
      //sign-in
      signInWithEmailAndPassword(auth,email?.current?.value,password?.current?.value)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+"-"+errorMessage);
      })
    }
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

          <input ref={email} type="text" placeholder="Email" className="text-white m-2 p-3 rounded-md bg-gray-800"/>
          

          <input ref={password} type="password" placeholder="Password" className="text-white m-2 p-3 rounded-md bg-gray-800"/>
          {errorMsg != null && <p className="text-red-500 text-sm ml-2 p-2">{errorMsg}</p>}

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