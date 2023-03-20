import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginPost } from '../../actions/authPosts'
import RiseLoader from 'react-spinners/RiseLoader'
import { FaEye, FaEyeSlash } from 'react-icons/fa'



const Login = ({setisLogin}) => {

  const [successMessage, setsuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState('#ffffff')
  const [hidePassword, sethidePassword] = useState(false)



  //setting useDispatch
  const dispatch = useDispatch()

  //Clear fields login
  const clearLogin= () => {
    setcheckUserData({name: '', email: '', password:''})
  }
  

  const navigate = useNavigate()
  
  //Login submit functionality
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginPost(checkUserData))
    setisLoading(true)

    setTimeout(() => {
      const token = localStorage.getItem('token')
      if(token){
        setisLoading(false)
        setisLogin(true)
        setsuccessMessage(true)
        navigate ('/', {replace: true})
      }
      else {
        setErrorMessage(true)
        setTimeout(() => {
          setErrorMessage(false)
          setisLoading(false)
          clearLogin()
        }, 1000);
      }

    }, 2000);
    

 
  }


  //password hide/show functionality  
  function closePassword() {
    sethidePassword(true)
  }
  function showPassword() {
    sethidePassword(false)
  }
  


  

  return (
    <>
    <div className="flex justify-center mx-auto">
      <div className="postBcground p-12 w-96">
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
       
        {successMessage &&
          <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>User is now Logged in</h4>
          </div> 

        }
        {errorMessage && 
        <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>Email address or password is not correct</h4>
          </div> 
        }

          <div>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-white">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-white">
                    Password:
                </label>
                {!hidePassword ? <FaEye className="relative top-5 left-60" onClick={closePassword}/> : <FaEyeSlash className="relative top-5 left-60" onClick={showPassword}/>}
                <input type={!hidePassword ? 'text' : 'password'} name="password" id="password" value={checkUserData.password} onChange={(e)=>{
                  e.preventDefault()
                  setcheckUserData({...checkUserData, password:e.target.value})
                }}required/>  
              </div>

              <button className="btn btn-primary mt-6" type="submit" onClick={handleSubmit}>
                {isLoading ? <RiseLoader color="#ffffff" size={10}/> : 'Submit'}
              </button>

              <div className="flex flex-row gap-1 justify-center text-sm mt-4">
              <p className="text-white">Don't have an account?</p>
              <div className="text-underline">
              <Link className="text-black"to="/blog/register">Sign up</Link>
              </div>
              </div>
            </form>
          </div>
      </div>
      </div>
    </>
  )
}

export default Login