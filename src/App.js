import Header from "./components/header";
import Table from "./components/table";
import useSearch from "./components/useSearch";
import "./app.scss";

function App() {
  const { searchValue, handleOnChange } = useSearch();

  return (
    <section className="app">
      <Header handleOnChange={handleOnChange}></Header>
      <main className="main-content">
        <h1 className="main-content__title">Browse Questions</h1>
        <Table searchValue={searchValue} />
      </main>
    </section>
  );
}

export default App;
