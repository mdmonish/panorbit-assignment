import axios from "axios";
import { useState } from "react";

// defined a base url
const BASE_URL = "https://panorbit.in/api/users.json";

// made a custom hook for fetching the user details
const useUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const { data, status } = await axios.get(BASE_URL);
      if (status === 200) {
        setUsers(data.users);
      }
    } catch (err) {
      console.log("err", err.message);
    }
  };

  return {
    fetchUsers,
    users,
  };
};

export default useUser;
