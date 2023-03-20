import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
    <div className="container mx-auto card w-fit p-12  h-screen">
      <div className="flex flex-row justify-items-center items-center translate-y-32 gap-10 loginImage">

        <div className="p-2">
          <img src="/images/2 (1).png" className="blogAppLogo"/>
        </div>

        <div className="p-12">
        
          <div className="mb-4 text-5xl text-gray-800">
            <h1>Happening now</h1>
          </div>
          <div className="mb-12 text-gray-800">
            <p>Join Memory Blog Today</p>
          </div>

          <div className="flex flex-col gap-4 p-2">
            <Link to= '/blog/register' className="btn btn-sm btn-primary">Sign Up</Link>
            <Link to= '/blog/login'  className="btn btn-sm btn-primary">Log in</Link>
          </div>
        
        </div>

      </div>

      
    </div>
    </>
  )
}

export default SignIn