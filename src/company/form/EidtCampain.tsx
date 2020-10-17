import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import DeleteIcon from "../../resources/icons/campaign_delete_btn.png";
import InputBase from '@material-ui/core/InputBase';
interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1300,
      height: 60,
      borderBottom: "2px solid #ededed",
      display : "inline-flex",
      flexDirection : 'row',
      justifyContent : "space-around",
      alignItems : "center",

      fontSize : 22,
      lineHeight : 1.18,
      letterSpacing : -0.55,
      color : "black",
      fontFamily : "NanumSquareR, sans-serif",

      paddingBottom : 20,

        
    },
    dateInput : {
        display:"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        // flex : 5,
    },
    dateBox : {
        width: 150,
        height: 60,
  
        fontSize : 22,
        lineHeight : 1.18,
        letterSpacing : -0.55,
        color : "black",
        fontFamily : "NanumSquareR, sans-serif",

        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",

        flex: 2,
      },
      detailInput : {
          width : 612,
          height : 60,
        //   backgroundColor : "#e8f2ff",

          fontSize : 22,
          lineHeight : 1.18,
          letterSpacing : -0.55,
          color : "black",
          fontFamily : "NanumSquareR, sans-serif",

          paddingLeft : 28,
          

          textAlign: "left",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        //   flex: 6,
      },
      button : {
          width : 110,
          height : 54,
          borderRadius : 5,
          boxSizing : "border-box",
          border : "solid 2px #22479f",
          backgroundColor : "#ffffff",


          fontSize : 24,
          lineHeight : 1.13,
          letterSpacing : -0.6,
          fontFamily : "NanumSquareR, sans-serif",
          color : "#22479f",
        
          textAlign: "center",
        //   flex : 1,
      },
      textCenter : {
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex : 1,
      },
      deleteBox : {
          width : 42,
          height : 42,
      }
  })
);

const EditCampain: React.FC<Props> = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <img className={classes.deleteBox} src={DeleteIcon} alt="profile"></img>
      <div className={classes.dateInput}>
          <div className ={classes.dateBox}>2020-02-08</div>
          <div className={classes.textCenter}> ~ </div>
          <div className ={classes.dateBox}>2020-02-28</div>
      </div>
      <div className={classes.detailInput}> 
          테스트인풋
      </div>
      <button className={classes.button}> 수정</button>
    </div>
  );
};

export default EditCampain;
