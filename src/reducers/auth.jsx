import { CREATE_USER, LOGIN_USER } from "../constant/actionTypes"

export default (user=[], action) => {
  switch(action.type){
    case CREATE_USER:
      return [...user, action.payload];
    case LOGIN_USER:
      return [...user, action.payload];
      default:
        return user;
      }
      
}