import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import {useSelector, useDispatch} from 'react-redux'
import {createPost} from '../../actions/blogposts'


const Form = ({postData, setPostData}) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //prevent default submit
    e.preventDefault()
    //input the postData state into the createPost and dispatch
    dispatch(createPost(postData))
    
   //clear the form field after submission
    clear()

  }


  const clear = () => {
    setPostData({author:'', title:'', description:'', body:'', tags:'', selectedFile:''})
  }

  return (
    <>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 my-10 text-gray-800">
            <label htmlFor = "title">
              Title:
            </label>
            <input type="text" name="title" id="title" value={postData.title} onChange={(e)=>{
              setPostData({...postData, title:e.target.value})
            }}/>
       
            <label htmlFor = "author">
              Author:
            </label>
            <input type="text" name="author" id="author" value={postData.author} onChange={(e)=>{
              setPostData({...postData, author:e.target.value})
            }}/>

        
            <label htmlFor ="description" name="description">
              Description:
            </label>
            <textarea cols="30" rows="3" value={postData.description} onChange={(e)=>{
              setPostData({...postData, description: e.target.value})
            }}></textarea>

            <label htmlFor = "body" name="body">
              Body:
            </label>
            <textarea cols="30" rows="10" value={postData.body} onChange={(e)=>{
              setPostData({...postData, body: e.target.value})
            }}></textarea>
           

            <label htmlFor = "tags">
              Tags:
            </label>
            <input type="text" name="author" id="author" value={postData.tags} onChange={(e)=>{
              setPostData({...postData, tags:e.target.value})
            }}/>
       
            <div>
              <FileBase type = "file" onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
            </div>

            <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form