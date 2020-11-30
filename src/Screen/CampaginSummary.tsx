import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import { setDefaultLocale } from "react-datepicker";
import { donationSummary } from "../models/donationSummary";
import { getIcon } from "../models/category";

interface Props {
  data: donationSummary;
  // setData(data : string) : void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    mainWord: {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 26,
      lineHeight: 1.15,
      letterSpacing: -0.65,
      textAlign: "left",
      marginBottom: 10,
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
    image: {
      width: "100%",
      height: "56%",
    },
    text: {
      padding: 20,
    },
    iconBox: {
      paddingRight: 20,
    },
    iconList: {
      paddingTop: 150,
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    icon: {
      width: 60,
      height: 60,
      marginLeft: 8,
    },
  })
);

const CampaignSummary: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [icons, setIcons] = useState<Array<string | undefined>>([]);
  const [searchInput, setSearchInput] = useState("");
  const url =
    "https://capstone-seereal.s3.ap-northeast-2.amazonaws.com/donation/13/image";
  useEffect(() => {
    const icon = props.data.categories.map((value) => {
      return getIcon(value);
    });
    setIcons(icon ? icon : []);
  }, [props.data]);

  return (
    <div className={classes.root}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${props.data.profileUrl})` }}
      >
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
      <div className={classes.text}>
        <div className={classes.mainWord}>{props.data.name}</div>
        <div className={classes.middleWord}>{props.data.shortIntroduction}</div>
        <div className={classes.lastWord}>{props.data.registrant}</div>
      </div>
    </div>
  );
};

export default CampaignSummary;
