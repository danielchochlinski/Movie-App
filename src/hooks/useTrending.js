// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${inputValue}&page=1&include_adult=false`;

// const fetchTrending = () => axios.get(API_URL);

// const includesSearchedString = (user, string) =>
//   user.name.toLowerCase().includes(string.toLowerCase());

// const useUsers = (searchedUser) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchTrending().then((resp) => setUsers(resp.data));
//   }, [searchedUser]);

//   return users.filter(
//     (user) =>
//       searchedUser.length > 0 && includesSearchedString(user, searchedUser)
//   );
// };

// export default useUsers;
