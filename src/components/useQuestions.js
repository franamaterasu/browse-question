import { useState, useEffect } from "react";

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const getData = () => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => setQuestions(res.results));
  };

  useEffect(() => {
    getData();
  }, []);

  return { questions };
};

export default useQuestions;
