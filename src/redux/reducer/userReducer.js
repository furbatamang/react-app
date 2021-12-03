import { FETCH_DATA, GET_USER, GET_REPOSOTORIES } from "../actions/actionTypes";

const initialState = {
    users:[],
    userSelected:false,
    user:{},
    getRepos:[]
}
 const fetchUserReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_DATA:
            return {
                ...state,
                users:payload
            }
        
        case GET_USER:
            return{
                ...state,
                user:payload,
                userSelected:true
            }
        case GET_REPOSOTORIES:
            return{
                ...state,
                getRepos:payload
            }
        default:
            return state;
    }
}

export default fetchUserReducer;