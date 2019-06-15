import React from "react";
import { connect } from "react-redux";
import { addTodo, init } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://my-json-server.typicode.com/shivaniarbat/intro-to-react-challenge/db"
);

const AddTodo = ({ dispatch }) => {
  let input;
  const classes = useStyles();
  // call API for adding initial values
  request.onload = function() {
    var data = JSON.parse(this.response);
    data.todo.forEach(task => {
      // add task in list
      dispatch(addTodo(task.task));
    });
  };

  request.send();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          type="submit"
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
