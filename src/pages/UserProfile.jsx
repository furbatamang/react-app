import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import githubImg from '../assets/images/github-social.png';
import {ReactComponent as VisitLink} from '../assets/icons/visit_link.svg';
import {ReactComponent as Calender} from '../assets/icons/calender.svg';
import {ReactComponent as Location} from '../assets/icons/location.svg';
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter.svg';
import { fetchRepos } from '../redux/actions/reposotoriesActions';
import { useDispatch } from 'react-redux';
const UserProfile = () => {
    const {user,loading} = useSelector(state => state.users);
    
    const dispatch = useDispatch();
    return (
        <>
            {loading && <Loader/>}
            <div className="overflow-y-auto ">
            <div className="relative">
                <img className="w-screen h-64 object-cover" src={githubImg} alt="" />
                <img className="h-20 w-20 rounded-full ring-1 ring-offset-2 ring-gray-50 absolute -bottom-10 left-10" src={user.avatar_url} alt="" />
            </div>
            <div className="px-10 py-16 ">
                <div className="flex justify-between">
                    <div className="flex items-center flex-wrap gap-x-3">
                        <h1 className="text-2xl font-bold capitalize">{user.name}</h1>
                        <div className="bg-blue-300 rounded-lg px-3 py-1 bg-opacity-50 text-blue-500 shadow">
                            <p>@{user.login}</p>
                        </div>
                        
                    </div>
                    <div className="flex justify-between gap-x-3">
                        <div onClick={() => dispatch(fetchRepos(user.login))}>
                            <NavLink to="/repositories"><Button>View Repositories</Button></NavLink>
                        </div>
                        <div>
                            <NavLink to="/organizations"><Button>View Organizations</Button></NavLink>
                        </div>
                    </div>
                </div>
                <div>
                <div className="flex text-gray-400 items-center gap-x-2 text-md">
                    <Location />
                    {user.location}
                </div>
                <div className="flex text-gray-400 items-center gap-x-2 text-md">
                    <Calender/>
                    {new Date(user.created_at).toLocaleString('en-us',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
                </div>
                <div className="flex gap-x-3 my-6">
                    <div>
                        <a href={user.html_url} target="_blank" rel="noreferrer">
                            <Button btnStyle="outline">Visit Github</Button>
                        </a>
                    </div>
                    <div>
                        <a href={user.blog} target="_blank" rel="noreferrer">
                            <Button btnStyle="outline">Blog</Button>
                        </a>
                    </div>
                    {user.twitter_username ? (<>
                    <a href={`https://www.twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                        <div className="flex items-center gap-x-2 py-2 px-5 bg-gray-300 rounded-lg bg-opacity-50 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition duration-300">
                            <TwitterIcon />
                            {user.twitter_username}
                        </div>
                    </a>
                        
                     </>):(<></>)}
                </div>
            </div>
            <div className="border-t">
                <div className="flex gap-x-3 ">
                    <Box number={user.followers}>Followers</Box>
                    <Box number={user.following}>Followings</Box>
                    <Box number={user.public_repos}>Public Repos</Box>
                    <Box number={user.public_gists}>Public Gits</Box>
                </div>
            </div>
            </div>
            
        </div>
    </>
    )
}


const Button = ({children, btnStyle = "Primary"}) => {
    btnStyle = btnStyle === "Primary" ? "bg-blue-700 text-white hover:bg-white hover:text-blue-700" : "text-blue-700 hover:text-white hover:bg-blue-700"
    return(
        <div>
            <div className={`py-2 px-5 rounded-lg border border-1 border-blue-700 flex flex-row items-center ${btnStyle} transition duration-350`}>
                {children}
                <div className="ml-3">
                    <VisitLink/>
                </div>
                
            </div>
        </div>
    )
}

const Box = (props) => {
    return(
    <div className="p-5 my-10 bg-gray-100 shadow-md rounded-lg cursor-pointer">
        <div className="flex flex-col px-16 items-center">
            <h1>{props.number}</h1>
            <p>{props.children}</p>
        </div>
    </div>
    )
}

const Loader = () => {
    return (
      <>
        <div className="absolute w-full h-full grid place-items-center bg-gray-900 bg-opacity-30 z-20">
          <div className="w-24 h-24 relative transform -translate-x-1/2 loader">
            <svg className="circular-loader" viewBox="25 25 50 50">
              <circle
                className="loader-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#70c542"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </>
    );
  };
export default UserProfile
