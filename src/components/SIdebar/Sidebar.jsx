import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, getUser } from '../../redux/actions/userActions';
import './Sidebar.css'
const Sidebar = () => {
    const [filterUser, setFilterUser] = useState('')
    const  dispatch = useDispatch()
    const {users} = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])
    const filteredUsers = users.filter(data => {
        //    console.log(data)
           if(filterUser === ''){
               return data;
           }else if(data.login.toLowerCase().includes(filterUser.toLowerCase())){
               return data
           }
           
       })
    return (
        <div className="flex overflow-y-auto  flex-col px-10 py-5">
            <div>
                <input type="text" className="px-1 my-2 py-2 rounded border border-gray-200 shadow" placeholder="search user" onChange={e => setFilterUser(e.target.value)} value={filterUser}/>
            </div>
           {filteredUsers.length>0 ?(
               
               filteredUsers.map((user) => {
                   
                   return(
                       <div key={user.id} className="flex  items-center my-3 cursor-pointer " onClick={()=> {dispatch(getUser(user.login)); setFilterUser('')}} >
                           <img src={user.avatar_url} className="h-8 w-8 rounded-full mx-4" alt="" />
                           <p className="text-gray-500">{user.login}</p>
                       </div>
                   )
               })
               ) : (<p>no user found</p>)
               
           }
        </div>
    )
}

export default Sidebar
