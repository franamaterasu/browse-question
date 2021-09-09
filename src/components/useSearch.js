import { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return { searchValue, handleOnChange };
};

export default useSearch;
