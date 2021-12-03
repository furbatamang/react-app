import { GET_REPOSOTORIES } from "./actionTypes";
import { baseUrl } from "../../api/api";
const fetchReposAction = (data) => {
    return{
        type:GET_REPOSOTORIES,
        payload:data
    }
}

export const fetchRepos = (userName) => {
    return (async (dispatch) => {
        await fetch(`${baseUrl}/users/${userName}/repos`)
        .then(response => response.json())
        .then(data => dispatch(fetchReposAction(data)))
    })
}