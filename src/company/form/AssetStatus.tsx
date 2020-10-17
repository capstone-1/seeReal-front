import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 600,
      height: 621,
      objectFit: "contain",
      borderRadius: 20,
      border: "2px solid #73a8ed",
      borderTopStyle: "hidden",
    },
    titlebox: {
      width: "100%",
      height: 73,
      marginLeft: -2,
      backgroundColor: "#22479f",
      border: "2px solid #22479f",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    titleName: {
      fontSize: 28,
      color: "#ffffff",
      letterSpacing: -0.7,
      fontFamily: "NanumSquareB, sans-serif",
      lineHeight: 1.14,
    },
    contextBox: {
      display: "flex",
      marginTop: 37,
      marginLeft: 48,
      marginRight: 20,
      flexDirection: "column",
      justifyContent: "flex-start",
      height: 450,
    },
    contextContents: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 30,
      height: 35,
      fontSize: 24,
    },
    contentsTitle: {
      flex: "1 1 0",
      textAlign: "left",
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      fontSize: 24,
      letterSpacing: -0.6,
    },
    contentsMoney: {
      flex: "1 1 0",
      textAlign: "center",
    },
  })
);

const AssetStatus: React.FC<Props> = (props) => {
  const classes = useStyles();
  const assetList = [
    "총자산가액",
    "유동자산",
    "주식 및 출자지분",
    "금융",
    "비유동자산",
    "토지",
    "건물",
    "기타",
  ];
  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <div className={classes.titleName}> 자산현황 </div>
      </div>
      <div className={classes.contextBox}>
        {assetList.map((asset, idx) => {
          return (
            <div className={classes.contextContents} key={idx}>
              <div className={classes.contentsTitle}>{asset}</div>
              <div className={classes.contentsMoney}>{`${Number(
                10000000000000
              ).toLocaleString()}  원`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssetStatus;
