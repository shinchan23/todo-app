import React, { useContext, useState } from "react";
import TodoContext from "../../../context/TodoContext";
import { REMOVE_TODO } from "../../../context/Action.Types";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import TodoInput from "../todo-input/TodoInput";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSnackbar } from "notistack";
import { Divider } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 510,
    boxShadow: "0 100px 250px 0 rgba(0,0,0,0.2)",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    minHeight: 280,
  },
  listText: {
    textDecoration: "line-through",
  },
}));

const Todo = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const { todos, dispatch } = useContext(TodoContext);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // listTextClass = classes.listText;
    setChecked(newChecked);
    enqueueSnackbar("You marked your todo as completed", {
      variant: "success",
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Quick List" />
      <CardContent>
        <List className={classes.list}>
          {todos.map((todo) => {
            return (
              <ListItem key={todo.id} role={undefined} dense button>
                <ListItemIcon>
                  {checked.indexOf(todo) !== -1 ? (
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(todo) !== -1}
                      tabIndex={-1}
                      disableRipple
                      onClick={handleToggle(todo)}
                      disabled
                    />
                  ) : (
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(todo) !== -1}
                      tabIndex={-1}
                      disableRipple
                      onClick={handleToggle(todo)}
                    />
                  )}
                </ListItemIcon>
                {checked.indexOf(todo) !== -1 ? (
                  <ListItemText
                    className={classes.listText}
                    id={todo.id}
                    primary={todo.todoString}
                  />
                ) : (
                  <ListItemText id={todo.id} primary={todo.todoString} />
                )}
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() =>
                      dispatch({ type: REMOVE_TODO, payload: todo.id })
                    }
                    edge="end"
                    aria-label="comments"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
      <Divider />
      <CardActions>
        <Divider />
        <TodoInput></TodoInput>
      </CardActions>
    </Card>
  );
};

export default Todo;
