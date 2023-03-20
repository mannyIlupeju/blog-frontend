import React, {useState, useEffect} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


function Navbar({isLogin, setisLogin}) {

  const navigate = useNavigate()

  //LogOut functionality
  const logOut = () => {
    setisLogin(false)
    localStorage.clear()
    navigate ('/', {replace: true})
  }



  return (
    <>
      <div className="container-flex flex md:flex-row flex-col justify-between bg-zinc-400 text-slate-900 p-5 nav-background">
        <div className="pl-10 mx-auto font-semibold text-3xl flex justify-center">
          <Link to='/'><img src = '/images/memoryblog.png' className="brandlogo" alt="memory logo"/></Link>
          <Link to='/'>Memory Blog</Link>
        </div>
        <nav>
          <ul className="flex flex-row container mx-auto gap-10 justify-center">
            {isLogin ?  <Link to='/blog/form'>Form</Link> : null}
            {isLogin ? <a onClick={logOut} className="cursor-pointer">Logout</a> : <Link to='/blog/signin'>Sign Up/Sign In</Link> }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar