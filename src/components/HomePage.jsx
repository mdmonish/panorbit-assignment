import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "../hook/useUser";
import Profile from "./Profile";
import ProfilePopup from "./ProfilePopup";
import NavBar from "./NavBar";
// import ChatBox from "./ChatBox";
import { UserContext } from "../context/UserProvider";
import ComingSoon from "./ComingSoon";
import ChatBox from "./ChatBox";

const HomePage = () => {
  const { currentUser, setCurrentUser, setUserProfileList, userProfileList } =
    useContext(UserContext);
  const { pathname } = useLocation();
  const [profile, setProfile] = useState({});
  const [togglePopup, setTogglePopup] = useState(false);
  const [tab, setTab] = useState(0);
  const { fetchUsers, users } = useUser();

  useEffect(() => {
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="relative grid grid-cols-6 h-[100vh] my-10 mx-20">
      <div className="col-span-1 flex items-center rounded-3xl bg-gradient-to-b from-[#3C58C9] via-[#4c4ac8] to-[#5c3dc8]">
        <NavBar tab={tab} setTab={setTab} />
      </div>
      <div className="col-span-5 ml-10">
        <div className="flex justify-between mt-4 mb-6">
          <h1 className="text-xl font-semibold">Profile</h1>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setTogglePopup(!togglePopup)}
            >
              <img
                src={profile?.profilepicture}
                className="w-8 h-8 rounded-full mr-3"
              />
              <h1 className="text-lg">{profile?.name}</h1>
            </div>
            {togglePopup && (
              <ProfilePopup
                userProfileList={userProfileList}
                setUserProfileList={setUserProfileList}
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                setTogglePopup={setTogglePopup}
              />
            )}
          </div>
        </div>

        <hr />

        <div
          className={`${
            !pathname.includes("ProfileDetail") ? "hidden" : "block"
          }`}
        >
          <Profile profile={profile} />
        </div>
        <div className={`${!pathname.includes("Posts") ? "hidden" : "block"}`}>
          <ComingSoon />
        </div>
        <div
          className={`${!pathname.includes("Gallery") ? "hidden" : "block"}`}
        >
          <ComingSoon />
        </div>
        <div className={`${!pathname.includes("ToDos") ? "hidden" : "block"}`}>
          <ComingSoon />
        </div>
      </div>
      <div className="absolute right-0 bottom-[-40px]">
        <ChatBox users={users} currentUser />
      </div>
    </div>
  );
};

export default HomePage;
