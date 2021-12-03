import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Repositories = () => {
    const {getRepos} = useSelector(state => state.users)
    return (

        <div>
            <NavLink to="/">Go Back</NavLink>
            <p>This is repo section</p>

            <div>
                {
                    getRepos.map(repo => {
                        return(
                            <>
                                <div key={repo.id}>
                                    <p>{repo.name}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Repositories