import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'


const PostArticle = () => {
  //destructure the id from the dynamic route we created in BlogPosts using useParams
  const {id} = useParams();

  //using the state stored in redux, if ID is true then we should use the find method to check if the blog.id matches id and store in blog variable
  const blog = useSelector((state)=> id ? state.blog.find((blog)=>
    blog._id === id
  ) : null)


  return (
    <div className=" grid grid-cols-2 mx-20 text-gray-800 h-screen leading-loose">
      <div className="">
        <div className="mb-8">
          <h1 className="text-4xl mt-10">{blog.title}</h1>
          <p className="text-xs mt-3"> by {blog.author}</p>
        </div>
        
        <div className="text-md min-w-full">
          <p>{blog.body}</p>
        </div>

        <div className="mt-20 mb-10">
          <Link to ="/">
          <button className="btn btn-warning">READ MORE</button>
          </Link>
        </div>
      </div>


        <div className="translate-y-32 translate-x-20 h-fit">
          <figure>
            <img src={blog.selectedFile} className="imgbox"/>
          </figure>
        </div>
    </div>
  )
}

export default PostArticle