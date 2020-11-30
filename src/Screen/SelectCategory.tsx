import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../index.css";
import Slider from "react-slick";
import InputBase from "@material-ui/core/InputBase";
import { setDefaultLocale } from "react-datepicker";
import EmergencyIcon from "../resources/icons/category_emergency.png";
import DisasterIcon from "../resources/icons/category_disaster.png";
import ChildrenIcon from "../resources/icons/category_children.png";
import SeniorIcon from "../resources/icons/category_senior.png";
import DisabledIcon from "../resources/icons/category_disabled.png";
import LocalIcon from "../resources/icons/category_local.png";
import MultiCultureIcon from "../resources/icons/category_multi_culture.png";
import EducationIcon from "../resources/icons/category_education.png";
import HealthIcon from "../resources/icons/category_health.png";
import ArtIcon from "../resources/icons/category_culture&art.png";
import EnvironmentIcon from "../resources/icons/category_environment.png";
import EtcIcon from "../resources/icons/category_etc.png";
import styled from "styled-components";
import AnimalIcon from "../resources/icons/category_animal@2x.png";

interface Props {
  setCategory(data: string): void;
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
  })
);

const SelectCategory: React.FC<Props> = (props) => {
  const classes = useStyles();
  const StyledSlider = styled(Slider)`
    .slick-list div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .slick-slide div {
      outline-color: red;
    }
  `;
  const SampleArrow = ({ ...prop }) => {
    const { className, style, onClick } = prop;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#22479f" }}
        onClick={onClick}
      />
    );
  };
  const sliderSetting = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 50,
    slidesToShow: 8,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  const icons = {
    emergency: EmergencyIcon,
    disaster: DisasterIcon,
    children: ChildrenIcon,
    senior: SeniorIcon,
    disabled: DisabledIcon,
    local: LocalIcon,
    multiculture: MultiCultureIcon,
    education: EducationIcon,
    health: HealthIcon,
    art: ArtIcon,
    environment: EnvironmentIcon,
    animal: AnimalIcon,
    etc: EtcIcon,
  };

  const data = new Map(Object.entries(icons));
  const categories = [
    "emergency",
    "disaster",
    "children",
    "senior",
    "disabled",
    "local",
    "multiculture",
    "education",
    "health",
    "art",
    "environment",
    "animal",
    "etc",
  ];

  const clickEvent = (category: string) => {
    props.setCategory(category);
  };

  return (
    <StyledSlider className={classes.slider} {...sliderSetting}>
      {categories.map((value, idx) => {
        return (
          <div className={classes.imageSlider}>
            <img
              key={idx}
              src={data.get(value)}
              onClick={() => clickEvent(value)}
              alt="profile"
            ></img>
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default SelectCategory;
