import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import classes from "*.module.css";
interface Props {}

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

  const viewSummary = (title: string, money: number) => {
    return (
      <>
        <div className={classes.summaryTitle}>{title}</div>
        <div className={classes.money}>{money.toLocaleString("kr-KR")} 원</div>
      </>
    );
  };
  const viewContents = (middleTitle: string, money: number) => {
    return (
      <div className={classes.flexRow}>
        <div className={classes.contentTitle}>{middleTitle}</div>
        <div className={classes.money2}>{money.toLocaleString("kr-KR")} 원</div>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.carryForward}>
        {viewSummary("전기이월액", 150000)}
      </div>
      <div className={classes.business}>
        <div className={classes.title}>사업수익</div>
        <div className={classes.contentBox}>
          <div className={classes.subContents}>
            <div className={classes.contentTitle}> 기부금</div>
            <div className={classes.subBody}>
              {viewContents("개인후원금", 1400)}
              {viewContents("기업후원금", 1400)}
              {viewContents("민간단체후원금", 1400)}
              {viewContents("후원물품", 1400)}
              {viewContents("기타후원금", 1400)}
            </div>
          </div>
          <div className={classes.subContents}>
            <div className={classes.contentTitle}> 지원금</div>
            <div className={classes.subBody}>
              {viewContents("지원금", 1400)}
              {viewContents("보조금", 1400)}
              {viewContents("기타지원금", 1400)}
            </div>
          </div>
          <div className={classes.subContents}>
            <div className={classes.contentTitle}> 기타수익</div>
            <div className={classes.subBody}>
              {viewContents("기타사업수익", 1400)}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.summary}>{viewSummary("사업수익 합계", 0)}</div>
      <div className={classes.nobusiness}>
        <div className={classes.title}>비사업수익</div>
        <div className={classes.contentBox}>
          <div className={classes.subContents}>
            <div className={classes.contentTitle}> 기타수익</div>
            <div className={classes.subBody}>
              {viewContents("이자수입금", 1400)}
              {viewContents("외화환산손익", 1400)}
              {viewContents("외환차익", 1400)}
              {viewContents("기타비사업수익", 1400)}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.summary}>{viewSummary("비사업수익 합계", 0)}</div>
      <div className={classes.summary}>
        {viewSummary("사업수익 + 비사업수익 =", 0)}
      </div>
    </div>
  );
};

export default LastYearIncome;
