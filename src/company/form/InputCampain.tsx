import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import InputBase from '@material-ui/core/InputBase';


interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1300,
      height: 60,
    //   border: "1px solid #73a8ed",
      display : "inline-flex",
      flexDirection : 'row',
      justifyContent : "space-around",

      fontSize : 24,
    lineHeight : 1.13,
        letterSpacing : -0.6,
        color : "black",
        fontFamily : "NanumSquareR, sans-serif",

        
    },
    dateInput : {
        display:"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        // flex : 5,
    },
    dateBox : {
        width: 200,
        height: 60,
        borderRadius : 5,
        backgroundColor : "#e8f2ff",
  
        fontSize : 24,
        lineHeight : 1.13,
        letterSpacing : -0.6,
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
          borderRadius : 5,
          backgroundColor : "#e8f2ff",

          fontSize : 24,
          lineHeight : 1.13,
          letterSpacing : -0.6,
          color : "black",
          fontFamily : "NanumSquareR, sans-serif",

          paddingLeft : 28,

          textAlign: "left",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        //   flex: 6,
      },
      contents : {
        fontSize : 22,
        lineHeight : 1.18,
        letterSpacing : -0.55,
        color : "black",
        fontFamily : "NanumSquareR, sans-serif",

        paddingRight : 28,
      },
      button : {
          width : 110,
          height : 60,
          borderRadius : 5,
          backgroundColor : "#22479f",


          fontSize : 24,
          lineHeight : 1.13,
          letterSpacing : -0.6,
          fontFamily : "NanumSquareR, sans-serif",
          color : "white",
        
          textAlign: "center",
        //   flex : 1,
      },
      textCenter : {
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex : 1,
      }
  })
);

const InputCampain: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState<String>("");

  const InputDataUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className={classes.root}>
      <div className={classes.dateInput}>
          <div className ={classes.dateBox}>YYYY-MM-DD</div>
          <div className={classes.textCenter}> ~ </div>
          <div className ={classes.dateBox}>YYYY-MM-DD</div>
      </div>
      <div className={classes.detailInput}> 
      <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      placeholder= "캠페인 이름은 20글자로 제한하겠습니다"
      value={value} onChange={InputDataUpdate}></InputBase>
      </div>
      <button className={classes.button}> 입력</button>
    </div>
  );
};

export default InputCampain;
