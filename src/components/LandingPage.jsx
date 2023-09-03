import React, { useContext, useEffect, useState } from "react";
import useUser from "../hook/useUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import back from "../image/purple_blue.jpg";

const LandingPage = () => {
  // made a custom hook to fetch all the user details
  const { users, fetchUsers } = useUser();

  // extracting data using contextApi
  const { setCurrentUser, setUserProfileList } = useContext(UserContext);

  const history = useNavigate();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // getting the data from API
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) setUserList(users);
  }, [users]);

  const handleClick = index => {
    // selecting current user and two more users
    setCurrentUser(userList[index]);
    let temp = [];
    let counter = 1;

    while (counter <= 2) {
      temp.push(userList[(index + counter) % userList.length]);
      counter++;
    }
    // setting the users in localStorage
    localStorage.setItem("currentUser", JSON.stringify(userList[index]));
    localStorage.setItem("userProfileList", JSON.stringify(temp));
    setUserProfileList(temp);

    // redirecting to HomePage/ProfileDetail
    history("/HomePage/ProfileDetail");
  };

  return (
    <div
      className="flex items-center justify-center h-[100vh]"
      style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
    >
      <div className="overflow-hidden w-[38%] pb-8 rounded-3xl  bg-white shadow-2xl">
        <div className="overflow-hidden flex justify-center items-center h-24 bg-[#f6f6f6] text-xl text-[#545454] font-semibold">
          Select an account
        </div>
        <div className="overflow-y-auto max-h-[52vh] mx-2">
          {userList.map((user, i) => (
            <div className="border-b mx-6 py-2.5" key={i}>
              <span
                className="flex items-center cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <img
                  src={user.profilepicture}
                  className="w-8 h-8 rounded-full mr-3"
                  alt="profile"
                />
                {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
