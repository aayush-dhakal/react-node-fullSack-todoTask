import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import "./App.css";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <Container className="mt-4 w-50">
      <Header />
      <TodoForm />
    </Container>
  );
}

export default App;
