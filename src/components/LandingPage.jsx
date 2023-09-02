import React, { useEffect, useState } from "react";
import useUser from "../hook/useUser";

const LandingPage = () => {
  const { users, fetchUsers } = useUser();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users) setUserList(users);
  }, [users]);

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="overflow-hidden border border-2 w-[38%] pb-8 rounded-3xl">
        <div className="overflow-hidden flex justify-center items-center h-24 bg-gray-100 text-xl">
          Select an Account
        </div>
        <div className="overflow-y-auto max-h-[52vh] mx-2">
          {userList.map((user, i) => (
            <div className="border-b mx-6 py-2.5" key={i}>
              <span className="flex items-center cursor-pointer">
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
