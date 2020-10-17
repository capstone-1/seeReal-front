import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1280,
      height: 600,
    },
    titlebox: {
      width: "50%",
      height: 30,
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: 14,
    },
    titleName: {
      fontSize: 26,
      marginRight: 29,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareB, sans-serif",
    },
    titleInput: {
      width: 512,
      fontSize: 23,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      borderBottom: "solid 2px #000000",
    },
    mainBox: {
      width: "100%",
      height: 504,
      borderRadius: 5,
      backgroundColor: "#e8f2ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    detailBox: {
      width: 1250,
      height: 136,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
    },
    contentsTitle: {
      height: 136,
      width: 180,
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      fontFamily: "NanumSquareR, sans-serif",
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      color: "#00000",
      flex: "1 1 0",
    },
    contents: {
      width: 1070,
      height: 136,
      borderRadius: 5,
      backgroundColor: "#ffffff",
      flex: "5 1 0",
    },
  })
);

const ActiveStatus: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <div className={classes.titleName}> 활동명 </div>
        <div className={classes.titleInput}> 캠페인명을 적어주세요 </div>
      </div>
      <div className={classes.mainBox}>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>활동내용</div>
          <div className={classes.contents}></div>
        </div>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>성과</div>
          <div className={classes.contents}></div>
        </div>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>한계</div>
          <div className={classes.contents}></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveStatus;
