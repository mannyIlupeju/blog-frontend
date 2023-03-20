import {CREATE, READ, DELETE, FETCH_ALL, UPDATE} from '../constant/actionTypes'

export default (blog=[], action) => {
  switch(action.type) {
    case FETCH_ALL:
      return action.payload;
    case READ:
      return blog.filter((blog)=>{
        blog.id === action.payload
      });
    case CREATE: 
     return [...blog, action.payload];
    case UPDATE:
      return blog.map((blog)=> blog._id === action.payload._id ? action.payload : blog)
    case DELETE:
      return blog.filter((blog)=>{
        blog._id !== action.payload;
      })
    default:
      return blog;
  }
}