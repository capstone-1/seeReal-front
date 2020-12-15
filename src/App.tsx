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
import CampaignMain from "./Screen/CampaignMain";
import RealCampaignDetail from "./Screen/RealCampaignDetail";
import Portfolio from "./Screen/Portfolio";
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
            <Route exact path="/" component={DonationMain} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/company-input" component={CompanyInput} />
            <Route exact path="/campaign" component={CampaignMain} />
            <Route
              path="/campaignDetail/:ids"
              exact
              component={CampaignDetail}
            />
            <Route
              path="/realcampaignDetail/:ids"
              exact
              component={RealCampaignDetail}
            />
            <Route path="/portfolio" exact component={Portfolio} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
