import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import { setDefaultLocale } from "react-datepicker";
import { donationSummary } from "../models/donationSummary";
import { getIcon } from "../models/category";
import SelectIcon from "../resources/icons/acctive_check_btn.png";
import { CampaignDetails } from "../models/campaignDatail";
interface Props {
  data: CampaignDetails | undefined;
  // setData(data : string) : void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    mainWord: {
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      textAlign: "left",
      marginBottom: 80,
    },
    introduceContent: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
      paddingLeft: 76,
      paddingRight: 114,
      marginBottom: 150,
    },
    planBox: {
      paddingLeft: 76,
      paddingRight: 114,
      marginBottom: 150,
    },
    line1: {
      width: 1147,
      height: 0,
      border: "solid 1px #c8c8c8",
      backgroundColor: "#ffffff",
    },
    content1: {
      height: 157,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 80,
    },
    content1_Detail_Box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    content1_Title: {
      width: 142,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
      marginRight: 27,
    },
    content1_Detail: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
    },
    content3_Title: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
      marginBottom: 33,
    },
    content2: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: 80,
    },
    tableHeader: {
      marginTop: 32,
      width: 1140,
      height: 69,
      backgroundColor: "#f8f8f8",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
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
      flexDirection: "column",
      justifyContent: "space-around",
      marginBottom: 110,
    },
    tableContentBox: {
      width: 1140,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 5,
      marginBottom: 5,
    },
    tableContent: {
      width: "25%",
      wordBreak: "break-all",
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "center",
    },
    promiseBox: {
      display: "flex",
      flexDirection: "column",
    },
    promiseContent: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: 28,
    },
    text1: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      textAlign: "left",
    },
    checkBox: {
      marginLeft: 28,
      width: 40,
      height: 40,
      backgroundColor: "#22479f",
    },
  })
);

const IntroducePage: React.FC<Props> = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.data?.costPreviews);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.mainWord}>단체소개</div>
      <div className={classes.introduceContent}>
        {`${props.data?.introduction}`}
      </div>
      <div className={classes.mainWord}>모금액 사용 계획</div>
      <div className={classes.planBox}>
        <div className={classes.content1}>
          <div className={classes.line1}></div>
          <div className={classes.content1_Detail_Box}>
            <div className={classes.content1_Title}> 주사업대상</div>
            <div className={classes.content1_Detail}>
              {`${props.data?.target}`}
            </div>
          </div>
          <div className={classes.content1_Detail_Box}>
            <div className={classes.content1_Title}> 사업 내용</div>
            <div className={classes.content1_Detail}>
              {" "}
              {`${props.data?.content}`}
            </div>
          </div>
          <div className={classes.line1}></div>
        </div>
        <div className={classes.content2}>
          <div className={classes.content1_Title}> 사업 진행</div>
          <div className={classes.tableHeader}>
            <div className={classes.headerContent}>사업명</div>
            <div className={classes.headerContent}>대상 수</div>
            <div className={classes.headerContent}>예상비용</div>
            <div className={classes.headerContent}>기타</div>
          </div>
          <div className={classes.contentBox}>
            {props.data?.costPreviews.map((value, idx) => {
              return (
                <div className={classes.tableContentBox} key={idx}>
                  <div className={classes.tableContent}>{`${value.name}`}</div>
                  <div
                    className={classes.tableContent}
                  >{`${value.targetNum}`}</div>
                  <div className={classes.tableContent}>{`${value.cost}`}</div>
                  <div className={classes.tableContent}>{`${value.etc}`}</div>
                </div>
              );
            })}
          </div>
          <div className={classes.promiseBox}>
            <div className={classes.promiseContent}>
              <div className={classes.text1}>
                {" "}
                분기별 영수증 업로드 약속 여부
              </div>
              <img
                src={SelectIcon}
                alt="profile"
                className={classes.checkBox}
              />
            </div>
            <div className={classes.promiseContent}>
              <div className={classes.text1}> 분기별 후기 업로드 약속 여부</div>

              <img
                src={SelectIcon}
                alt="profile"
                className={classes.checkBox}
              />
            </div>
          </div>
        </div>
        <div className={classes.content3_Title}>사용 계획 세부 내용</div>
        <div className={classes.introduceContent}>{`${props.data?.plan}`}</div>
      </div>
    </div>
  );
};

export default IntroducePage;
