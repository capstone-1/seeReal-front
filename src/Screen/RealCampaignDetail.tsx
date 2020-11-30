import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import { setDefaultLocale } from "react-datepicker";
import { donationSummary } from "../models/donationSummary";
import { getIcon } from "../models/category";
import RealCampaignIntroducePage from "./RealCampaignIntroducePage";
import { CampaignDetails } from "../models/campaignDatail";
import axios from "axios";
import apiPath from "../apiPath";
import { useParams } from "react-router";

interface Props {
  // idx: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1320,
    },
    image: {
      width: "100%",
      height: 535,

      marginBottom: 60,
    },
    mainWord: {
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 52,
      lineHeight: 1.13,
      letterSpacing: -1.3,
      textAlign: "left",
      marginBottom: 48,
    },
    subTitle: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
      color: "#777777",
      width: 170,
    },
    subContents: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 32,
      lineHeight: 1.13,
      letterSpacing: -0.8,
      textAlign: "left",
    },
    middleWord: {
      height: 85,
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 20,
      lineHeight: 1.15,
      letterSpacing: -0.5,
      textAlign: "left",
      color: "#555555",
    },
    lastWord: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 22,
      lineHeight: 1.18,
      letterSpacing: -0.55,
      textAlign: "right",
      color: "#999999",
    },
    flexBox: {
      width: 1320,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-end",
      alignContent: "center",
      alignItems: "center",
    },
    wrapSummaryBox: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      height: 150,
      // justifyContent: "space-around"
    },
    summaryBox: {
      marginTop: 7,
      display: "flex",
      flexDirection: "row",
      width: 1000,
      marginBottom: 24,
    },
    text: {
      padding: 20,
    },
    iconBox: {
      width: "50%",
    },
    iconList: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    icon: {
      width: 120,
      height: 120,
      marginLeft: 8,
    },
    wrapSmBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      height: 260,
      alignItems: "center",
    },
    smBox: {
      display: "flex",
      flexDirection: "row",
    },
    line1: {
      width: "100%",
      height: 0,
      border: "solid 1px #c8c8c8",
      marginBottom: 98,
    },
    buttonBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 163,
    },
    buttonClick: {
      width: 295,
      height: 123,
      borderRadius: 62,
      backgroundColor: "#22479f",
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 48,
      lineHeight: 1.13,
      letterSpacing: -1.2,
      textAlign: "center",
      color: "#ffffff",
      outline: "none",
    },
    buttonNoClick: {
      width: 295,
      height: 123,
      borderRadius: 62,
      border: "solid 2px #22479f",
      backgroundColor: "#ffffff",
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 48,
      lineHeight: 1.13,
      letterSpacing: -1.2,
      textAlign: "center",
      color: "#22479f",
      outline: "none",
    },
    donationButton: {
      width: "100%",
      height: 124,
      textAlign: "center",
      backgroundColor: "#22479f",
      fontFamily: "NanumSquareEB, sans-serif",
      fontSize: 42,
      lineHeight: 1.14,
      letterSpacing: -1.05,
      color: "white",
      marginBottom: 50,
    },
  })
);

const textStyles = makeStyles((theme: Theme) =>
  createStyles({
    sm1: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 42,
      lineHeight: 1.14,
      letterSpacing: -1.05,
      textAlign: "left",
    },
    sm2: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 42,
      lineHeight: 1.14,
      letterSpacing: -1.05,
      textAlign: "left",
      color: "#22479f",
      marginLeft: 20,
    },
  })
);

const RealCampaignDetail: React.FC<Props> = (props) => {
  const { ids } = useParams<{ ids: string }>();
  const classes = useStyles();
  const textClasses = textStyles();
  const [icons, setIcons] = useState<Array<string | undefined>>([]);
  const [clickedContents, setClickedContents] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<CampaignDetails | undefined>(undefined);

  useEffect(() => {
    const icon = data?.categories
      .filter((value, idx) => idx < 3)
      .map((value) => {
        return getIcon(value);
      });
    setIcons(icon ? icon : []);
  }, [data]);

  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        console.log(apiPath.getDonationDetails(Number(ids)));
        const result = await axios.get(apiPath.getDonationDetails(Number(ids)));
        setData(result.data);
        console.log("========================");
        console.log(result.data);
      } catch (error) {}
    };
    fetchDonationData();
  }, []);

  const changeInfo = (e: any) => {
    setClickedContents(Number(e.target.value));
  };

  const ButtonList = ["캠페인 소개", "단체 정보", "캠페인 결과"];
  return (
    <div className={classes.root}>
      <img className={classes.image} src={data?.profileUrl} alt="profile"></img>

      <div className={classes.mainWord}>{`${data?.name}`}</div>
      <div className={classes.flexBox}>
        <div className={classes.wrapSummaryBox}>
          <div className={classes.summaryBox}>
            <div className={classes.subTitle}>기부단체</div>
            <div className={classes.subContents}>{`${data?.registrant}`}</div>
          </div>
          <div className={classes.summaryBox}>
            <div className={classes.subTitle}>설립일</div>
            <div className={classes.subContents}>2020-06-03</div>
          </div>
        </div>
        <div className={classes.iconBox}>
          <div className={classes.iconList}>
            {icons.map((value, idx) => {
              return (
                <img
                  key={idx}
                  src={value}
                  alt="profile"
                  className={classes.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={classes.wrapSmBox}>
        <div className={classes.smBox}>
          <div className={textClasses.sm1}>기부자</div>
          <div className={textClasses.sm2}>40,129명</div>
        </div>
        <div className={classes.smBox}>
          <div className={textClasses.sm1}>모금 총액</div>
          <div className={textClasses.sm2}>59,350,100원</div>
        </div>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.buttonBox}>
        {ButtonList.map((value, idx) => {
          return idx === clickedContents ? (
            <button
              value={idx}
              className={classes.buttonClick}
              onClick={changeInfo}
            >
              {value}
            </button>
          ) : (
            <button
              value={idx}
              className={classes.buttonNoClick}
              onClick={changeInfo}
            >
              {value}
            </button>
          );
        })}
      </div>
      {clickedContents === 0 ? (
        <RealCampaignIntroducePage data={data} />
      ) : (
        <span></span>
      )}
      <button className={classes.donationButton}>단체에 기부하기</button>
    </div>
  );
};

export default RealCampaignDetail;
