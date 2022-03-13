import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const fetchTrending = () => axios.get(API_URL);

const includesSearchedString = (user, string) =>
  user.name.toLowerCase().includes(string.toLowerCase());

const useUsers = (searchedUser) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTrending().then((resp) => setUsers(resp.data));
  }, [searchedUser]);

  return users.filter(
    (user) =>
      searchedUser.length > 0 && includesSearchedString(user, searchedUser)
  );
};

export default useUsers;
