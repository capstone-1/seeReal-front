import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import InputBase from "@material-ui/core/InputBase";
import PieChart from "../charts/PieViewChart";
import { Pyo, defaultData } from "../models/Pyo";
import {
  testDatas,
  testData2,
  chartColors,
} from "../config/chartUtils/initChart";

interface Props {
  setCategory(data: string): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1320,
    },
    mainWord: {
      width: 500,
      height: 44,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      textAlign: "left",
      marginBottom: 35,
    },
    middleWord: {
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      textAlign: "left",
    },
    imageSlider: {
      height: 120,
      width: 120,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    slider: {
      marginBottom: 103,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    infoBox: {
      width: "100%",
      height: 65,
      marginBottom: 35,
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    },
    mainBox: {
      width: "100%",
      height: 600,
      marginBottom: 35,
      borderRadius: 20,
      border: "solid 2px #22479f",
      backgroundColor: "#ffffff",
    },
    donationInfo: {
      width: "100%",
      height: 135,
      marginBottom: 22,
      borderRadius: 20,
      border: "solid 2px #22479f",
      backgroundColor: "#ffffff",
      display: "flex",
      justifyContent: "space-around",
    },
    numberBox: {
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
    },
    resultBox: {
      width: 290,
      height: 60,
      paddingLeft: 12,
      paddingRight: 13,
      borderRadius: 5,
      backgroundColor: "#e8f2ff",
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 32,
      lineHeight: 1.8,
      letterSpacing: -0.8,
      textAlign: "center",
      marginLeft: 20,
      marginRight: 20,
    },
    editButton: {
      width: 112,
      height: 60,
      borderRadius: 20,
      border: "solid 2px #22479f",
      backgroundColor: "#ffffff",
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "center",
      color: "#22479f",
    },
    test: {
      display: "flex",
      justifyContent: "space-betwwen",
      alignItems: "center",
    },
    tableHeader: {
      marginTop: 32,
      width: "100%",
      height: 69,

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: 20,
    },
    headerContent: {
      width: "25%",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      textAlign: "center",
    },
    contentBox: {
      display: "flex",
      // justifyContent: "space-around",
      marginBottom: 30,
    },
    tableContent: {
      width: "25%",
      wordBreak: "break-all",
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "center",
      marginBottom: 20,
      display: "flex",
      justifyContent: "center",
    },
  })
);

const Portfolio: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [pyoData, setPyoData] = useState<Array<Pyo>>([
    defaultData,
    defaultData,
  ]);
  const total = 100000;
  const [isEdit, setIsEdit] = useState(false);
  const ColorBox = (color: string) => {
    return (
      <div className={classes.tableContent}>
        <div
          style={{ backgroundColor: `${color}`, width: 20, height: 20 }}
        ></div>
      </div>
    );
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const DeleteBox = (value: Pyo, idx: number) => {
    return <div className={classes.donationInfo} key={idx}></div>;
  };

  return (
    <div className={classes.root}>
      <div className={classes.infoBox}>
        <div className={classes.middleWord}>내 기부 포트폴리오</div>
        <div className={classes.test}>
          <div className={classes.numberBox}>합계</div>
          <div className={classes.resultBox}>100000원</div>
          <button className={classes.editButton} onClick={handleEdit}>
            {isEdit ? `완료` : `수정`}
          </button>
        </div>
      </div>
      <div className={classes.mainBox}>
        <PieChart
          data={testData2}
          XAisDataKey={"name"}
          legendDataList={["씨발", "거지같네"]}
        />
      </div>
      <div>
        <div className={classes.tableHeader}>
          <div className={classes.headerContent}></div>
          <div className={classes.headerContent}> 단체명</div>
          <div className={classes.headerContent}> 비중</div>
          <div className={classes.headerContent}>금액</div>
        </div>
        {pyoData.map((value, idx) => {
          return (
            <div className={classes.contentBox}>
              {ColorBox(chartColors[idx])}
              <div className={classes.tableContent}>{`${value.name}`}</div>
              <div className={classes.tableContent}>{`${(
                (value.account / total) *
                100
              ).toFixed(2)} %`}</div>
              <div
                className={classes.tableContent}
              >{`${value.account} 원`}</div>
            </div>
          );
        })}
      </div>
      {/* <div className={classes.mainWord}>포트폴리오 등록 기부단체</div>
      {pyoData.map((value, idx) => {
        return DeleteBox(value, idx);
      })} */}
    </div>
  );
};

export default Portfolio;
