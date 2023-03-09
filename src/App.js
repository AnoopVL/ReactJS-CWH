import "./App.css";
import Header from "./myComponents/Header";
import { TodoItem } from "./myComponents/TodoItem";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Stock market",
      desc: "Work on stock market holdings",
    },
    {
      sno: 2,
      title: "BlockChain",
      desc: "Work on Blockchain course",
    },
    {
      sno: 3,
      title: "Book",
      desc: "Read book everyday",
    },
  ];
  return (
    <>
      <Header title="My Todos list" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
