import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import classes from "*.module.css";
import * as TaxIncomInterface from "../../models/taxIncome";
interface Props {
  viewName : string ;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1280,
    },
    carryForward: {
      width: "100%",
      height: 94,
      backgroundColor: "#22479f",
      display: "flex",
    },
    business: {
      width: "100%",
      //height : 581,
      boxSizing: "border-box",
      border: "solid 2px #73a8ed",
      display: "flex",
    },
    nobusiness: {
      width: "100%",
      //height : 247,
      boxSizing: "border-box",
      border: "solid 2px #73a8ed",
      display: "flex",
    },
    summary: {
      width: "100%",
      height: 64,
      backgroundColor: "#22479f",
      display: "flex",
    },
    summaryTitle: {
      marginLeft: 290,
      textAlign: "left",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      flex: "1 1 0",
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.15,
      fontSize: 26,
      letterSpacing: -0.65,
      color: "white",
    },
    title: {
      fontFamily: "NanumSquareB, sans-serif",
      lineHeight: 1.15,
      fontSize: 26,
      letterSpacing: -0.6,
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#e8f2ff",
      width: "18.8%",
    },
    contentBox: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    contentTitle: {
      marginLeft: 100,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.15,
      fontSize: 26,
      letterSpacing: -0.65,
      color: "balck",
      textAlign: "left",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    centerInput: {
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
    },
    money: {
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      fontSize: 24,
      letterSpacing: -0.6,
      color: "white",
      textAlign: "right",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      marginRight: 148,
    },
    money2: {
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      fontSize: 24,
      letterSpacing: -0.6,
      color: "black",
      textAlign: "right",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      marginRight: 130,
    },
    subContents: {
      display: "flex",
      flexDirection: "row",
      boxSizing: "border-box",
      borderBottom: "solid 1px #ededed",
    },
    flexRow: {
      display: "flex",
      flexDirection: "row",
      padding: 15,
    },
    subBody: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      flex: 5,
    },
  })
);

const LastYearIncome: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [dataResult, setDataResult] = useState<TaxIncomInterface.TaxIncome>(TaxIncomInterface.defaultData);


  useEffect( ()=> {

  },[]);

  const viewSummary = (title: string, money: number) => {
    return (
      <>
        <div className={classes.summaryTitle}>{title}</div>
        <div className={classes.money}>{money ? money.toLocaleString("kr-KR"): 0} 원</div>
      </>
    );
  };
  const viewContents = (middleTitle: string, money: number) => {
    return (
      <div className={classes.flexRow}>
        <div className={classes.contentTitle}>{middleTitle}</div>
        <div className={classes.money2}>{money ? money.toLocaleString("kr-KR") : 0} 원</div>
      </div>
    );
  };
  const middleContents = (title : string,  data: any) => {
    const keyList = Object.keys(data);
    const dataMap = new Map(Object.entries(dataResult));
    return(
      <div className={classes.subContents}>
      <div className={classes.contentTitle}> {`${title}`}</div>
      <div className={classes.subBody}>
        {
          keyList.map(value => {
            const name = data[value];
            return (viewContents(name, dataMap.get(value)));
          })
        }
      </div>
    </div>
    );
  }
  const sumData  = (input: any) => {
    const keyList = Object.keys(input);
    const dataMap = new Map(Object.entries(dataResult));
    let sum = 0;
    keyList.map(value => {
      sum += dataMap.get(value) ? dataMap.get(value) : 0
    });
    return Number(sum);
  }

  return (
    <div className={classes.root}>
      <div className={classes.carryForward}>
        {viewSummary("전기이월액", sumData(TaxIncomInterface.carriedMonth))}
      </div>
      <div className={classes.business}>
  <div className={classes.title}>{`사업${props.viewName}`}</div>
        <div className={classes.contentBox}>
          {middleContents("기부금", TaxIncomInterface.donation)}
          {middleContents("지원금", TaxIncomInterface.fund)}
          {middleContents("기타수익", TaxIncomInterface.etcBusinessProfit)}
        </div>
      </div>
      <div className={classes.summary}>{viewSummary(`사업${props.viewName} 합계`, sumData(TaxIncomInterface.business))}</div>
      <div className={classes.nobusiness}>
        <div className={classes.title}>비사업수익</div>
        <div className={classes.contentBox}>
        {middleContents("기타수익", TaxIncomInterface.etcNonBusinessProfit)}
        </div>
      </div>
      <div className={classes.summary}>{viewSummary(`비사업${props.viewName} 합계`, sumData(TaxIncomInterface.etcNonBusinessProfit))}</div>
      <div className={classes.summary}>
        {viewSummary(`사업${props.viewName} + 비사업${props.viewName} =`, sumData(TaxIncomInterface.final))}
      </div>
    </div>
  );
};

export default LastYearIncome;
