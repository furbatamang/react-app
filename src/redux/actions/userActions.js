import { FETCH_DATA, GET_USER, LOADING} from "./actionTypes";
import { baseUrl } from "../../api/api";
const fetchUserAction = (data) => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

const getUserAction = (data) => {
    return{
        type:GET_USER,
        payload:data
    }
}

const loadingAction = (data) => {
    return{
        type:LOADING,
        payload:data
    }
}

export const fetchUsers = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(`${baseUrl}/users`)
            response.json()
                .then(data => {
                    dispatch(fetchUserAction(data));
                })
        }
        catch(err){
            console.log(err)
        }
    }
    
}

export const getUser = (username) => {
   return async (dispatch) => {
        dispatch(loadingAction(username))
        await fetch(`${baseUrl}/users/${username}`)
            .then(response => response.json())
            .then(data => dispatch(getUserAction(data)))
    }
}