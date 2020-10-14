import React, {useState, useEffect} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props{}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: 1280,
        height: 600,
    },
    titlebox : {
        width: "50%",
        height: 30,
        display: "flex",
        //alignItems : "center",
        justifyContent : "flex-start",
        marginBottom : 14,
    },
    titleName : {
        fontSize: 26,
        marginRight : 29,
        letterSpacing : -0.65,
        fontFamily: "NanumSqaureR"
    },
    titleInput : {
        width : 512,
        fontSize: 23,
        letterSpacing : -0.65,
        fontFamily: "NanumSqaureR",
        borderBottom : "solid 2px #000000",
    },
    detailBox : {
        width: "100%",
        height : 504,
        borderRadius: 5,
        backgroundColor : "#e8f2ff",
        paddingLeft : 47,
    },
  })
);




const ActiveStatus : React.FC<Props> = (props) => {
    const classes = useStyles();
    return <div className = {classes.root} >
        <div className = {classes.titlebox}>
           <div className={classes.titleName}> 활동명 </div>
           <div className={classes.titleInput}> 캠페인명을 적어주세요 </div>
        </div>
        <div className = {classes.detailBox}></div>
    </div>;
}

export default ActiveStatus;

