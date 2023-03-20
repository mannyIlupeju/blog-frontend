import * as api from '../api'
import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constant/actionTypes'


export const getPosts = () => async(dispatch) => {
  try{
    const {data} = await api.fetchPosts();
    dispatch({type:FETCH_ALL, payload: data})
  }
  catch(error) {
    console.log(error.message)
  }
}

export const createPost = (post) => async(dispatch) => {
  try {
     const {data} = await api.createPost(post)
     if(dispatch({type: CREATE, payload:data})){
       console.log('sent')
     }
                   
  } catch (error) {
    console.log(error)
  }
}

export const readPost = (id) => async(dispatch) => {
  try {
    const {data} = await api.readPost(id);
    dispatch({type: READ, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async(dispatch) => {
  try {
    const {data} = await api.deletePost(id)
    dispatch({type: DELETE, payload: data})
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async(dispatch) => {
  try {
    const {data} = await api.likePost(id)
    dispatch({type: UPDATE, payload: data})
  } catch (error) {
    console.log(error)
  }
}