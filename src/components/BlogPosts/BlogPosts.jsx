import React from 'react'
import Post from './BlogPost/Post'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import RiseLoader from 'react-spinners/RiseLoader'

//TODOLIST 
//loading screen when app opens while blog post is loading up 

function BlogPosts({setCurrentID, currentID, isLogin, isLoading}) {

  const blog = useSelector((state)=>state.blog)


  return (
    <>  
     {isLoading ? 
     <div className="loader-screen flex justify-center translate-y-52">
       <RiseLoader size={50}/> 
      </div>
      :
        <div className="flex justify-center">
          <div className="flex justify-center flex-row flex-wrap p-10 gap-24 text-gray-800">
          {blog.map((blog) => (
            <div key={blog._id}>  
              <Link to = {`/blog/post/${blog._id}`}>
                <Post blog={blog} currentID={currentID} setCurrentID={setCurrentID} isLogin={isLogin} id={blog._id}/>
              </Link> 
              </div>
            ))}
          </div>
        </div>
      }
        
    </>
  )
}

export default BlogPosts