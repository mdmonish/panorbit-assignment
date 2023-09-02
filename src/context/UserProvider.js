import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [userProfileList, setUserProfileList] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    const userList = localStorage.getItem("userProfileList");
    if (user && userList) {
      setCurrentUser(JSON.parse(user));
      setUserProfileList(JSON.parse(userList));
    }
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    userProfileList,
    setUserProfileList,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
