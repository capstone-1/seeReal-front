"use  strict";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AssetStatus from "../src/company/form/AssetStatus";
import ActiveStatus from "../src/company/form/ActiveStatus";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin : 50
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AssetStatus />
      <br></br>
      <ActiveStatus />
    </div>
  );
}

export default App;
