import React, { useContext, useState } from "react";
import TodoContext from "../../../context/TodoContext";
import { ADD_TODO } from "../../../context/Action.Types";

import { v4 } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    marginTop: theme.spacing(1),
  },
  disButton: {
    marginTop: theme.spacing(1),
  },
}));

const TodoInput = () => {
  const classes = useStyles();
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };

  return (
    <form>
      <FormControl>
        <div className={classes.root}>
          <TextField
            id="standard-full-width"
            label="Quick Add Task"
            placeholder="Please Enter Todo"
            helperText="ex: need to complete project"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={todoString}
            onChange={(event) => setTodoString(event.target.value)}
          />
          {todoString === "" ? (
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              className={classes.disButton}
              disabled
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={handleSubmit}
            >
              Save
            </Button>
          )}
        </div>
      </FormControl>
    </form>
  );
};

export default TodoInput;
