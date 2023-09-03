import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePopup = ({
  userProfileList,
  setUserProfileList,
  setCurrentUser,
  currentUser,
  setTogglePopup,
}) => {
  const history = useNavigate();

  const handleCurrentUser = index => {
    // removing user's data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userProfileList");

    setTogglePopup(false);

    let currentUserCopy = { ...currentUser };
    let listCopy = [...userProfileList];

    // setting a new current user
    setCurrentUser(userProfileList[index]);
    listCopy[index] = { ...listCopy[index], ...currentUserCopy };

    // selecting the other two users
    setUserProfileList(listCopy);
    localStorage.setItem("currentUser", JSON.stringify(userProfileList[index]));
    localStorage.setItem("userProfileList", JSON.stringify(listCopy));
  };

  return (
    <div className="z-20 fixed inset-0" onClick={() => setTogglePopup(false)}>
      <div className="fixed text-center w-72 h-96 absolute border z-10 bg-white py-6 px-5 right-20 top-24 rounded-3xl shadow-2xl">
        <img
          src={currentUser.profilepicture}
          className="w-24 h-24 border rounded-full mx-auto"
          alt="profile"
        />
        <div className="py-1.5 text-lg">
          <h1>{currentUser.name}</h1>
          <h2 className="text-[#9a9a9a]">{currentUser.email}</h2>
        </div>

        {userProfileList?.map((user, i) => (
          <div key={i}>
            <hr />
            <div
              className="flex items-center justify-center cursor-pointer py-2.5"
              key={i}
              onClick={() => handleCurrentUser(i)}
            >
              <img
                src={user?.profilepicture}
                className="w-8 h-8 rounded-full mr-3"
                alt="profile"
              />
              <h1>{user?.name}</h1>
            </div>
          </div>
        ))}

        <div className="pt-6">
          <buton
            className="px-4 py-2 bg-red-500 rounded-3xl text-lg text-white font-semibold cursor-pointer"
            onClick={() => {
              setCurrentUser({});
              setUserProfileList([]);
              history("/");
              setTogglePopup(false);
              localStorage.clear();
            }}
          >
            Sign out
          </buton>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
