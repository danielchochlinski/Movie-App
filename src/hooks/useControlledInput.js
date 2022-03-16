import { useState } from "react";

const useControlledInput = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (e) => setInputValue(e.target.value);
  console.log(inputValue);
  return {
    inputValue,
    handleInputChange,
  };
};

export default useControlledInput;
