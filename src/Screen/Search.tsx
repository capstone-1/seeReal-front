import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import SimpleImageSlider from "react-simple-image-slider";
import SearchIcon from "../resources/icons/donation_search_btn.png";
import Slider from "react-slick";
import InputBase from "@material-ui/core/InputBase";
import { setDefaultLocale } from "react-datepicker";

interface Props {
  setData(data: string): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1320,
    },
    mainWord: {
      width: 222,
      height: 44,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 40,
      lineHeight: 1.13,
      letterSpacing: -1,
      textAlign: "left",
      marginBottom: 35,
    },
    imageSlider: {
      width: 1320,
      height: 480,
    },
    slider: {
      width: 1320,
      height: 450,
      marginBottom: 103,
    },
    searchBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 60,
    },
    search: {
      width: 840,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20.5,
    },
    searchInput: {
      width: 790,
      paddingLeft: 9.5,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      textAlign: "left",
    },
    searchLine: {
      width: 840,
      height: 0,
      borderBottom: "solid 4px #22479f",
    },
  })
);

const Search: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  // useEffect(()=> {
  //     props.setData(searchInput);
  //     // console.log(searchInput);
  // },[searchInput, props]);

  const inputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchData = () => {
    props.setData(searchInput);
  };

  return (
    <div className={classes.searchBox}>
      <div className={classes.search}>
        <InputBase
          className={classes.searchInput}
          inputProps={{ "aria-label": "naked" }}
          placeholder="캠페인을 검색해 보세요"
          value={searchInput}
          onChange={inputContent}
          id="text"
        ></InputBase>
        <img src={SearchIcon} alt="profile" onClick={searchData}></img>
      </div>
      <div className={classes.searchLine}></div>
    </div>
  );
};

export default Search;
