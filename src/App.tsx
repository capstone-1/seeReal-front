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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 50,
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CampaignCOst />
      {/* <LastYearMainActivity />  */}
       <Campaign />
       {/* <TaxIncome viewName="수익" /> */}
       {/* <br></br>
       <br></br>
       <br></br>
      <TaxIncome viewName="수익" />
      <TaxOutcome viewName="지출" />
      <EditCampain />
      <br></br>
      <br></br>
      <InputCampain />
      <br></br>
      <br></br>
      <br></br>
      <LastYearIncome viewName="수익" />
      <br></br>
      <AssetStatus />
      <br></br>
      <ActiveStatus /> */}
    </div>
  );
}

export default App;
