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
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userProfileList");
    setTogglePopup(false);
    let currentUserCopy = { ...currentUser };
    let listCopy = [...userProfileList];

    setCurrentUser(userProfileList[index]);
    listCopy[index] = { ...listCopy[index], ...currentUserCopy };

    setUserProfileList(listCopy);
    localStorage.setItem("currentUser", JSON.stringify(userProfileList[index]));
    localStorage.setItem("userProfileList", JSON.stringify(listCopy));
  };

  return (
    <div className="text-center w-72 h-96 absolute border z-10 bg-white py-6 px-5 right-0 top-10 rounded-3xl shadow-2xl">
      <img
        src={currentUser.profilepicture}
        className="w-24 h-24 border rounded-full mx-auto"
      />
      <div className="py-1.5 text-lg">
        <h1>{currentUser.name}</h1>
        <h2>{currentUser.email}</h2>
      </div>

      {userProfileList.map((user, i) => (
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
  );
};

export default ProfilePopup;
