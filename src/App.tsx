"use  strict";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Login from "./login/Login";
import AppBar from "./AppBar/AppBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompanyInput from "./Screen/CompanyInput";
import DonationMain from "./Screen/DonationMain";
import CampaignDetail from "./Screen/CampaignDetail";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 100,
    },
    test: {
      margin: 300,
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/" component={CompanyInput} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/donation" component={DonationMain} />
            <Route
              path="/campaignDetail/:ids"
              exact
              component={CampaignDetail}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
