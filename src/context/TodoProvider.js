import { useReducer } from "react";
import TodoContext from "./TodoContext";
import Reducer from "./Reducer";

const TodoProvider = (props) => {
  const [todos, dispatch] = useReducer(Reducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
