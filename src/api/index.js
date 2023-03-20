import axios from 'axios';

const url = 'http://localhost:8080/blog'
const urlPost = 'http://localhost:8080/blog/post'
const authUrl = "http://localhost:8080/blog/auth/register"
const loginUrl = "http://localhost:8080/blog/auth/login"



export const fetchPosts = () => axios.get(url);
export const readPost = (id) => axios.get(urlPost/`${id}`)
export const createPost = (newPost) => axios.post(url, newPost, setAuthToken);
export const deletePost = (id) => axios.delete(`${urlPost}/${id}`);
export const registerPost=(savedUser) => axios.post(authUrl, savedUser); 
export const loginPost = (user) => axios.post(loginUrl, user)
export const likePost = (id) => axios.patch(`${urlPost}/${id}/likePost`)
  
export const setAuthToken = (token) => {
  if(token) {
    axios.defaults.headers.common["Authorization"] = `${token}` ;
  }else {
    delete axios.defaults.headers.common["Authorization"]
  }
}


