import Header from "./components/header";
import Table from "./components/table";
import "./app.scss";

function App() {
  return (
    <section className="app">
      <Header></Header>
      <main className="main-content">
        <h1 className="main-content__title">Browse Questions</h1>
        <Table />
      </main>
    </section>
  );
}

export default App;
