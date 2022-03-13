import { useState } from "react";

const useControlledInput = ({ defaultValue }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (e) => setInputValue(e.target.value);

  return {
    inputValue,
    handleInputChange,
  };
};

export default useControlledInput;
