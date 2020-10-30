import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import classes from "*.module.css";
import * as TaxIncomInterface from "../../models/taxIncome";
import NumberFormat from "react-number-format";

interface Props {
  viewName : string ;
  data : TaxIncomInterface.TaxIncome;
  setData(data : TaxIncomInterface.TaxIncome) : void;
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
      flexDirection: "row",
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
    surFix : {
        fontFamily: "NanumSquareR, sans-serif",
        lineHeight: 1.13,
        fontSize: 24,
        letterSpacing: -0.6,
        color: "black",
        textAlign: "right",
        justifyContent: "center",
        paddingLeft : 10,
        
    },
    surFix2 : {
        fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      fontSize: 24,
      letterSpacing: -0.6,
        color: "white",
        textAlign: "right",
        justifyContent: "center",
        paddingLeft : 10,
        
    },
    moneyDetail : {
        fontFamily: "NanumSquareR, sans-serif",
        lineHeight: 1.13,
        fontSize: 24,
        letterSpacing: -0.6,
        color: "black",
        textAlign: "right",
        justifyContent: "center",
        paddingRight : 30,
        width : 220,
        borderColor : "white",
        backgroundColor : "#e8f2ff",
        borderRadius : 3,
    },
    lastMoney : {
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
      borderColor : "white",
        backgroundColor : "#e8f2ff",
        borderRadius : 3,
        paddingRight : 30,
        width : 220,
    },
    setting : {
        
            fontFamily: "NanumSquareR, sans-serif",
            lineHeight: 1.13,
            fontSize: 24,
            letterSpacing: -0.6,
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems : "center",
            display: "flex",
            flexDirection: "row",
            marginRight: 148,
        
    },
    subTitle : {
      fontFamily: "NanumSquareB, sans-serif",
      lineHeight: 1.14,
      fontSize: 28,
      letterSpacing: -0.7,
      textAlign : "left",
      marginBottom : 20,
    }
  })
);

const TaxIncome: React.FC<Props> = (props) => {
  const classes = useStyles();
  // const [dataResult, setDataResult] = useState<TaxIncomInterface.TaxIncome>(TaxIncomInterface.defaultData);


  const updateResult = (value :  number | undefined, fieldName : string) => {
      // setDataResult({...dataResult, [fieldName]: value === undefined ? 0 : value})
      props.setData({...props.data, [fieldName]: value === undefined ? 0 : value})
  } 
  
  const inputSummary = (title: string, fieldName: string) => {
    // const dataMap = new Map(Object.entries(dataResult));
    // return (
    //   <>
    //     <div className={classes.summaryTitle}>{title}</div>
    //     <div  className={classes.setting} >
    //     <NumberFormat className={classes.moneyDetail} placeholder={"000,000,000,000"} value={dataMap.get(fieldName) ? Number(dataMap.get(fieldName)) : undefined} thousandSeparator 
    //     onValueChange={(values) => updateResult(values.floatValue, fieldName)} isNumericString={true} ></NumberFormat>
    //     <div className={classes.surFix2}> 원</div>
    //     </div>
    //   </>
    // );
    const dataMap = new Map(Object.entries(props.data));
    return (
      <>
        <div className={classes.summaryTitle}>{title}</div>
        <div  className={classes.setting} >
        <NumberFormat className={classes.moneyDetail} placeholder={"000,000,000,000"} value={dataMap.get(fieldName) ? Number(dataMap.get(fieldName)) : undefined} thousandSeparator 
        onValueChange={(values) => updateResult(values.floatValue, fieldName)} isNumericString={true} ></NumberFormat>
        <div className={classes.surFix2}> 원</div>
        </div>
      </>
    );
  };

  const viewSummary = (title: string, money: number) => {
    return (
      <>
        <div className={classes.summaryTitle}>{title}</div>
        <div className={classes.money}>{money ? money.toLocaleString("kr-KR"): 0} 원</div>
      </>
    );
  };
  const viewContents = (middleTitle: string, fieldName: string) => {
    // const dataMap = new Map(Object.entries(dataResult));
    // return (
    //   <div className={classes.flexRow}>
    //     <div className={classes.contentTitle}>{middleTitle}</div>
    //     <div className={classes.money2}>
    //     <NumberFormat className={classes.moneyDetail} placeholder={"000,000,000,000"} value={dataMap.get(fieldName) ? Number(dataMap.get(fieldName)) : undefined} thousandSeparator 
    //     onValueChange={(values) => updateResult(values.floatValue, fieldName)} isNumericString={true} ></NumberFormat>
    //     <div className={classes.surFix}> 원</div>
    //     </div>
    //   </div>
    // );
    const dataMap = new Map(Object.entries(props.data));
    return (
      <div className={classes.flexRow}>
        <div className={classes.contentTitle}>{middleTitle}</div>
        <div className={classes.money2}>
        <NumberFormat className={classes.moneyDetail} placeholder={"000,000,000,000"} value={dataMap.get(fieldName) ? Number(dataMap.get(fieldName)) : undefined} thousandSeparator 
        onValueChange={(values) => updateResult(values.floatValue, fieldName)} isNumericString={true} ></NumberFormat>
        <div className={classes.surFix}> 원</div>
        </div>
      </div>
    );
  };

  const middleContents = (title : string,  data: any) => {
    const keyList = Object.keys(data);
    return(
      <div className={classes.subContents}>
      <div className={classes.contentTitle}> {`${title}`}</div>
      <div className={classes.subBody}>
        {
          keyList.map(value => {
            const name = data[value];
            return (viewContents(name, value));
          })
        }
      </div>
    </div>
    );
  }
  const sumData  = (input: any) => {
    // const keyList = Object.keys(input);
    // const dataMap = new Map(Object.entries(dataResult));
    // let sum = 0;
    // keyList.map(value => {
    //   sum += dataMap.get(value) ? dataMap.get(value) : 0
    // });
    // return Number(sum);
    const keyList = Object.keys(input);
    const dataMap = new Map(Object.entries(props.data));
    let sum = 0;
    keyList.map(value => {
      sum += dataMap.get(value) ? dataMap.get(value) : 0
    });
    return Number(sum);
  }

  return (
    <div className={classes.root}>
      <div className={classes.subTitle}> 지난 해 수입내역</div>
      <div className={classes.carryForward}>
        {inputSummary("전기이월액", "carriedMonth")}
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
        <div className={classes.title}>{`비사업${props.viewName}`}</div>
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

export default TaxIncome;
