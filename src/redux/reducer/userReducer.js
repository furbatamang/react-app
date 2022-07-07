import { FETCH_DATA, GET_USER, GET_REPOSOTORIES, LOADING } from "../actions/actionTypes";

const initialState = {
    users:[],
    loading:true,
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
                loading:false
            }
        case GET_REPOSOTORIES:
            return{
                ...state,
                getRepos:payload
            }
        case LOADING:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
}

export default fetchUserReducer;