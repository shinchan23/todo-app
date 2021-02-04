import React from "react";
import "./App.css";

import Navigationbar from "./components/navbar/Navigationbar";
import TodoProvider from "./context/TodoProvider";
import Todo from "./components/todo/todos/Todo";
import { SnackbarProvider } from "notistack";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cont: {
    marginTop: 80,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <TodoProvider>
        <SnackbarProvider maxSnack={3}>
          <Navigationbar></Navigationbar>
          <Container fluid className={classes.cont}>
            <Todo></Todo>
          </Container>
        </SnackbarProvider>
      </TodoProvider>
    </div>
  );
};

export default App;
