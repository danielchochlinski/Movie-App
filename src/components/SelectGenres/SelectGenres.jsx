// import React, { useState } from "react";
// import useAxios from "../../hooks/useAxios";
// import { MultiSelectUnstyled } from "@mui/base/SelectUnstyled";

// const SelectGenres = () => {
//   const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

//   const { data } = useAxios(URL);

//   console.log(genres);
//   return (
//     <MultiSelectUnstyled>
//       {data?.genres?.map((g) => (
//         <StyledOption key={g.id} value={g.name}>
//           {g.name}
//         </StyledOption>
//       ))}
//     </MultiSelectUnstyled>
//   );
// };

// export default SelectGenres;
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import useAxios from "../../hooks/useAxios";
import { useState, useEffect } from "react";

export default function FreeSolo() {
  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
  const { data } = useAxios(URL);

  // const [selectedGenre, setSelectedGenre] = useState("");
  // const [inputValue, setInputValue] = useState();
  // const [customValue, setCustomValue] = useState();
  // const [value, setValue] = useState();
  const [genres, setGenres] = useState();
  useEffect((data) => {
    setGenres(data.genres);
  }, []);
  console.log(genres);

  // const defaultProps = {
  //   options: data,
  //   getOptionLabel: (option) => option.title,
  // };
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        options={data}
        value={data}
       
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        //   setCustomValue(newValue.id);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        // }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Genra"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
