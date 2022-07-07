import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "../../pages/UserProfile";
import { Sidebar } from "..";
const MainPage = () => {
  const { user, userSelected } = useSelector((state) => state.users);
  return (
    <>
      <Sidebar />
      {Object.keys(user).length === 0 && !userSelected ? (
        <>
<<<<<<< HEAD
          <div className="relative w-screen">
            <div className="w-1/2 m-auto text-center my-72"></div>
          </div>
=======
            <Sidebar />
            {
                Object.keys(user).length === 0 && !userSelected ?(<>
               
                    <div className="relative w-screen">
                        <div className="w-1/2 m-auto text-center my-72">
                            <h1 className="text-6xl font-bold">INTELZY</h1>
                            
                        </div>
                    </div>
                    </>):(
                        <>
                            <UserProfile />
                        </>
                    )
            }
>>>>>>> 209f9b8f993d74e81137b1485491e00baa99974a
        </>
      ) : (
        <>
          <UserProfile />
        </>
      )}
    </>
  );
};

export default MainPage;
