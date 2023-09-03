import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUser from "../hook/useUser";
import Profile from "./Profile";
import ProfilePopup from "./ProfilePopup";
import NavBar from "./NavBar";
import { UserContext } from "../context/UserProvider";
import ComingSoon from "./ComingSoon";
import ChatBox from "./ChatBox";

const HomePage = () => {
  const { currentUser, setCurrentUser, setUserProfileList, userProfileList } =
    useContext(UserContext);

  // getting url pathname
  const { pathname } = useLocation();
  const { fetchUsers, users } = useUser();

  const [profile, setProfile] = useState({});
  const [togglePopup, setTogglePopup] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // setting user's current profile
    if (currentUser) {
      setProfile(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    // searching for active section
    if (pathname.includes("Posts")) setTitle("Posts");
    else if (pathname.includes("Gallery")) setTitle("Gallery");
    else if (pathname.includes("ToDos")) setTitle("ToDos");
    else setTitle("Profile");
  }, [pathname]);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="relative grid grid-cols-6 h-full my-10 mx-20">
      <div className="col-span-1 flex items-center rounded-3xl bg-gradient-to-b from-[#3C58C9] via-[#4c4ac8] to-[#5c3dc8]">
        <NavBar />
      </div>
      <div className="col-span-5 ml-10">
        <div className="flex justify-between mt-4 mb-6">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setTogglePopup(!togglePopup)}
            >
              <img
                src={profile?.profilepicture}
                className="w-8 h-8 rounded-full mr-3"
                alt="profile"
              />
              <h1 className="text-lg text-[#545454]">{profile?.name}</h1>
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
        <div className="absolute right-0 bottom-[-40px] z-10">
          <ChatBox users={users} currentUser />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
