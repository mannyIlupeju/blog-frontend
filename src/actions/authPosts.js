

import * as api from '../api'



import {CREATE_USER, LOGIN_USER} from '../constant/actionTypes'


export const registerPost = (savedUser) => async(dispatch) => {
  try {
    await api.registerPost({name:savedUser.name, email: savedUser.email, password: savedUser.password})
    dispatch ({ type: CREATE_USER, payload:data })
  } catch (error) {
    console.log(error)
  }
 
}

export const loginPost = (user) => async(dispatch) => {

  try {
    const {data} = await api.loginPost({email:user.email, password:user.password})
    const token = data.token;
    // //set JWT token to local 
    localStorage.setItem("token", token)
    //set token in setAuthToken function to update the headers 
    api.setAuthToken(token)
    dispatch({type: LOGIN_USER, payload: data})
  } catch (error) {
    const errHandle = error.response.data
    console.log(errHandle)
    
  }
}


