import React, { useContext, useEffect, useState } from "react";
import useUser from "../hook/useUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const LandingPage = () => {
  const history = useNavigate();
  const { setCurrentUser, setUserProfileList } = useContext(UserContext);
  const { users, fetchUsers } = useUser();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) setUserList(users);
  }, [users]);

  const handleClick = index => {
    setCurrentUser(userList[index]);
    let temp = [];
    let counter = 1;
    while (counter <= 2) {
      temp.push(userList[(index + counter) % userList.length]);
      counter++;
    }
    localStorage.setItem("currentUser", JSON.stringify(userList[index]));
    localStorage.setItem("userProfileList", JSON.stringify(temp));
    setUserProfileList(temp);
    history("/HomePage/ProfileDetail");
  };

  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="overflow-hidden border border-2 w-[38%] pb-8 rounded-3xl">
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
