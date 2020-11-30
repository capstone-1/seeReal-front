import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import SimpleImageSlider from "react-simple-image-slider";
import SearchIcon from "../resources/icons/donation_search_btn.png";
import Slider from "react-slick";
import InputBase from "@material-ui/core/InputBase";
import Search from "./Search";
import SelectCategory from "./SelectCategory";
import Pagination from "@material-ui/lab/Pagination";
import CamapginSummary from "./CampaginSummary";
import apiPath from "../apiPath";
import axios from "axios";
import { setDefaultLocale } from "react-datepicker";
import { donationSummary, PageLink } from "../models/donationSummary";
import { Link } from "react-router-dom";

interface Props {}

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
    secondWord: {
      width: 111,
      height: 22,
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 20,
      lineHeight: 1.15,
      letterSpacing: -0.5,
      textAlign: "left",
      marginBottom: 35,
    },
    content: {
      width: 1370,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 59,
    },
    contentDetailBox: {
      width: 420,
      height: 421,
      border: "solid 2px #22479f",
      marginRight: 30,
      marginBottom: 21,
    },
    pagination: {
      width: 1320,
      display: "flex",
      justifyContent: "center",
      marginBottom: 184,
    },
    button: {
      width: 1140,
      height: 90,
      borderRadius: 10,
      boxShadow: "0 0 15 0",
      backgroundColor: "#22479f",
      fontFamily: "NanumSquareB, sans-serif",
      fontSize: 28,
      lineHeight: 1.14,
      letterSpacing: -0.7,
      textAlign: "center",
      color: "white",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  })
);

const DonationMain: React.FC<Props> = (props) => {
  const classes = useStyles();
  const testUrl =
    "https://capstone-seereal.s3.ap-northeast-2.amazonaws.com/donation/13/image";
  const testUrl2 =
    "https://capstone-seereal.s3.ap-northeast-2.amazonaws.com/donation/16/image";
  const testUrl3 =
    "https://capstone-seereal.s3.ap-northeast-2.amazonaws.com/donation/19/image";
  const sliderSetting = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const images = [{ url: testUrl }, { url: testUrl2 }, { url: testUrl3 }];
  const onClick = (idx: number) => {
    alert(idx);
  };
  const [donationData, setDonationData] = useState<Array<donationSummary>>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // const [pageLink, setPageLink] = useState();
  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        const result = await axios.get(apiPath.getDonationList(9));
        setDonationData(
          result.data._embedded.simpleDonationResponseDtoList
            ? result.data._embedded.simpleDonationResponseDtoList
            : []
        );
        setPageCount(
          result.data.page.totalPages ? result.data.page.totalPages : 0
        );
        // setPageLink(result.data._links);
        console.log(result.data);
      } catch (error) {}
    };
    fetchDonationData();
  }, []);

  useEffect(() => {
    const fetchDonationData = async () => {
      try {
        let url = apiPath.getDonationPageData(currentPage - 1, 9);
        if (searchInput !== "") {
          url = apiPath.getDonationPageData(currentPage - 1, 9, searchInput);
        } else if (category !== "") {
          url = apiPath.getDonationPageData(currentPage - 1, 9, searchInput);
        }
        const result = await axios.get(url);
        setDonationData(
          result.data._embedded.simpleDonationResponseDtoList
            ? result.data._embedded.simpleDonationResponseDtoList
            : []
        );
        setPageCount(
          result.data.page.totalPages ? result.data.page.totalPages : 0
        );
        // setPageLink(result.data._links);
        console.log(result.data);
      } catch (error) {}
    };
    fetchDonationData();
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    setSearchInput("");
    const fetchDonationData = async () => {
      try {
        const result = await axios.get(
          apiPath.searchWithCategory(currentPage - 1, 9, category)
        );
        console.log("DATA");
        // console.log(result.data._embedded.simpleDonationResponseDtoList);
        if (result.data._embedded !== undefined) {
          console.log("true");
          setDonationData(result.data._embedded.simpleDonationResponseDtoList);
        } else {
          console.log("false");
          setDonationData([]);
        }
        // setDonationData(
        //   result.data._embedded.simpleDonationResponseDtoList
        //     ? result.data._embedded.simpleDonationResponseDtoList
        //     : []
        // );
        setPageCount(
          result.data.page.totalPages ? result.data.page.totalPages : 0
        );
      } catch (error) {}
    };
    fetchDonationData();
    window.scrollTo(0, 0);
  }, [category]);

  useEffect(() => {
    setCategory("");
    const fetchDonationData = async () => {
      try {
        const result = await axios.get(
          apiPath.getDonationPageData(currentPage - 1, 9, searchInput)
        );
        if (result.data._embedded !== undefined) {
          console.log("true");
          setDonationData(result.data._embedded.simpleDonationResponseDtoList);
        } else {
          console.log("false");
          setDonationData([]);
        }
        setPageCount(
          result.data.page.totalPages ? result.data.page.totalPages : 0
        );
      } catch (error) {}
    };
    fetchDonationData();
    window.scrollTo(0, 0);
  }, [searchInput]);

  const handleChangeCurrentPage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const TopImageSlider = () => {
    return (
      <Slider className={classes.slider} {...sliderSetting}>
        {images.map((value, idx) => {
          return (
            <img
              key={idx}
              src={value.url}
              className={classes.imageSlider}
              alt="profile"
              onDoubleClick={() => onClick(idx)}
            ></img>
          );
        })}
      </Slider>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.mainWord}>단체 기부하기</div>
      <TopImageSlider />
      <Search setData={setSearchInput} />
      <SelectCategory setCategory={setCategory} />
      <div className={classes.secondWord}>진행중인 기부</div>
      <div className={classes.content}>
        {donationData.map((value, idx) => {
          return (
            <Link to={`/campaignDetail/${value.id}`} className={classes.link}>
              <div className={classes.contentDetailBox}>
                <CamapginSummary data={value} />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={classes.pagination}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChangeCurrentPage}
        />
      </div>
      <div className={classes.pagination}>
        <button className={classes.button}>
          {" "}
          새로운 캠페인을 등록하시겠어요?
        </button>
      </div>
    </div>
  );
};

export default DonationMain;
