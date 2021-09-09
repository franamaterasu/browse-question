import Header from "./components/header";
import Table from "./components/table";
import Pagination from "./components/pagination";
import useSearch from "./components/useSearch";
import useQuestion from "./components/useQuestions";
import "./app.scss";

function App() {
  const { searchValue, handleOnChange } = useSearch();
  const { questions } = useQuestion();

  return (
    <section className="app">
      <Header handleOnChange={handleOnChange}></Header>
      <main className="main-content">
        <h1 className="main-content__title">Browse Questions</h1>
        <Table searchValue={searchValue} />
        <Pagination questions={questions} />
      </main>
    </section>
  );
}

export default App;
