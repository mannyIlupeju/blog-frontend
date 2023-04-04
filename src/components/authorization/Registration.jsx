import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { registerPost } from '../../actions/authPosts'
import {useSelector, useDispatch} from 'react-redux'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


const Registration = () => {
  const [userCreated, setUserCreated] = useState(false)
  const [userData, setUserData] = useState({name: '', email: '', password:'', retype: ''})
  //password hide/show state
  const [hidePassword, sethidePassword] = useState(false)
  

  //useDispatch
  const dispatch = useDispatch()


  //password hide/show functions
  function closePassword() {
    sethidePassword(true)
  }
  function showPassword() {
    sethidePassword(false)
  }
  


  const handleSubmit = (e) => {
    //prevent default submission
    e.preventDefault()

    //check if password matches
    if(userData.password === userData.retype) {
      //dispatch userData to registerPost
      dispatch(registerPost(userData))
      setUserCreated(true)

      setTimeout(()=>{
        setUserCreated(false)
      },2000)
      
      //display message = user created
      clear()
    }

    else{
      console.log("make sure the password matches")
    }
  }

  const clear = () => {
    setUserData({name: '', email: '', password:'', retype: ''})
  }

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="mt-20 postBcground w-96 p-12 h-fit">
          <div>
            <div className="text-center mb-2">
            <h1 className="uppercase text-slate-900 text-2xl">Register</h1>
            </div>
            <form className="flex flex-col gap-3">
              <label htmlFor="name" className="text-white">
                  Name:
              </label>
              <input type="text" name="name" id="name" value={userData.name} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, name: e.target.value})
              }} required/>
              <label htmlFor="email" className="text-white">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={userData.email} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, email: e.target.value})
              }}required/>

              <div className="flex flex-col">
                <label htmlFor="name" className="text-white">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-5 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-5 left-60" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password1" value={userData.password} onChange={(e)=>{
                  e.preventDefault()
                  setUserData({...userData, password: e.target.value})
                }} required/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="name" className="text-white">
                  Retype password:
              </label>
              {!hidePassword ? <FaEye className="relative top-5 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-5 left-60" onClick={showPassword}/>}
              <input type={!hidePassword ? 'text' : 'password'} name="password" id="password2"  value={userData.retype} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, retype: e.target.value})
              }}required/>
              </div>

              <button type="submit" className="btn mt-4 btn-primary" onClick={handleSubmit}>Submit</button>
              
              <div className="flex flex-row gap-1 justify-center text-sm mt-4">
                <p className="text-white">Already got an account?</p>
                <div className="text-purple">
                <Link className="text-black" to="/blog/login">Log in</Link>
                </div>
              </div>
            </form>
          </div>
      </div>
      </div>

    </>
  )
}

export default Registration