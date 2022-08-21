import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import "./App.css";
import TodoForm from "./components/Todo/TodoForm";
import Todos from "./components/Todo/Todos";
import TodoState from "./context/todo/TodoState";

function App() {
  return (
    <TodoState>
      <Container className="mt-4 w-50">
        <Header />
        <TodoForm />
        <Todos />
      </Container>
    </TodoState>
  );
}

export default App;
