"use  strict";
import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import AssetStatus from "../src/company/form/AssetStatus";
import ActiveStatus from "../src/company/form/ActiveStatus";
import LastYearIncome from "../src/company/form/LastYearIncome";
import InputCampain from "../src/company/form/InputCampain";
import EditCampain from "../src/company/form/EidtCampain" ;
import TaxIncome from "../src/company/input/TaxIncome";
import TaxOutcome from "../src/company/input/TaxOutcome";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import DatePicker from 'react-datepicker';
import Campaign from "./company/input/Campaign";
import LastYearMainActivity from "./company/input/LastYearMainActivity";
import InputCampainCost from "./company/form/InputCampainCost";
import EditCampaignCost from "./company/form/EditCampaignCost";
import CampaignCOst from "./company/input/CampaignCost";
import Login from "./login/Login";
import LoginFailModal from "./login/LoginFailModal";
import AppBar from "./AppBar/AppBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CompanyInput from "./Screen/CompanyInput";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display : "flex",
      flexDirection : "column",
      alignItems : "center",
      justifyContent : "center",
      marginTop : 100,
    },
    test : {
      margin : 300,
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
      <AppBar/>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={CompanyInput}/>
          <Route exact path="/signin" component={Login} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
