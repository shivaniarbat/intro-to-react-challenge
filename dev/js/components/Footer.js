import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
};

const Footer = () => (
  <div>
    <span>
      <InputBase
        defaultValue="Select Options:"
        inputProps={{ "aria-label": "naked" }}
      />
    </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>List All </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Tasks To Do</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Done</FilterLink>
  </div>
);

export default Footer;
