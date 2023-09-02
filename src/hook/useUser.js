import axios from "axios";
import { useState } from "react";
const BASE_URL = "https://panorbit.in/api/users.json";

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
