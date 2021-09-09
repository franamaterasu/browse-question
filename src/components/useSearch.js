import { useState } from "react";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const handleOnChange = (e) => {
    setCategoryValue("");
    setSearchValue(e.target.value);
  };

  const handleCategoryOnChange = (e) => {
    setSearchValue("");
    setCategoryValue(e.target.value);
  };

  return { searchValue, handleOnChange, categoryValue, handleCategoryOnChange };
};

export default useSearch;
