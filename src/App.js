import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todo, setTodo] = useState([
    { sno: 1, item: "item 1", desc: "desctiption 1" },
    { sno: 2, item: "item 2", desc: "desctiption 2" },
    { sno: 3, item: "item 3", desc: "desctiption 3" },
  ]);

  const onDelete = (t) => {
    console.log(t);
    console.log("this")

    setTodo(
      todo.filter((e) => {
        return e !== t;
      })
    );
  };
  return (
    <div className="App">
      <Header title="My TODO List" />
      <AddTodo />
      <Todos todo={todo} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
