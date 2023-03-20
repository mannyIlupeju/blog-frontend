import React from 'react'
import {Link} from 'react-router-dom'
import {FaTrash, FaThumbsUp} from 'react-icons/fa'
import { deletePost, likePost } from '../../../actions/blogposts';
import { useDispatch } from 'react-redux';

const Post = ({blog, currentID, isLogin, setCurrentID}) => {


  //setting dispatch
  const dispatch = useDispatch()

  return (
      <>
        <div className="relative flex-col gap-10 w-96 postBcground" onClick={()=>{setCurrentID(blog._id)}}>
          <figure>
            <img src={blog.selectedFile} className="imgbox rounded-lg"/>
            <div className="flex flex-row gap-3 absolute bottom-3 right-4">
              {isLogin && <FaTrash color="black" onClick={(e)=>{
                e.preventDefault()
                dispatch(deletePost(blog._id))
                location.reload()
              }}/>}
              <div className="flex gap-1">
              {<FaThumbsUp onClick={(e)=>{
                  e.preventDefault()
                  dispatch(likePost(blog._id))
                }
              }/>}
              <div className="relative bottom-1">
              ({blog.likeCount})
              </div>
              </div>
            </div>
          </figure>

          <div className="flex flex-col gap-2 mt-4 md:gap-2 w-fit">
            <p className="text-xs">{blog.createdAt.slice(0, 10)}</p>

            <div>
            <h1 className="text-extrabold text-2xl">{blog.title}</h1>
            </div>

            <div>
            <p className="text-sm textDesc w-3/4">{blog.description}</p>
          </div>

            <div>
            <p className="text-xs">by {blog.author}</p>
            </div>
          </div>
        </div>

        
      </>
  )
}

export default Post