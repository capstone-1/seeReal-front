import React, { useState, useEffect } from "react";
import * as ActivityInterface from "../../models/activity";
import ActiveStatus from "../form/ActiveStatus";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";


interface Props {
    data : Array<ActivityInterface.Activity>;
    setDataList (data : Array<ActivityInterface.Activity> ) : void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 700,
      height: 392,
      borderRadius : 10,
      border : "solid 2px #73a8ed",
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      marginBottom : 28,
    },
    title : {
      fontFamily: "NanumSquareB, sans-serif",
      fontSize : 31,
      lineHeight : 1.14,
      letterSpacing : -0.7,
      textAlign : "left"
    },
    subTitle : {
        fontFamily: "NanumSquareR, sans-serif",
        fontSize : 20,
        lineHeight : 1.15,
        letterSpacing : -0.5,
        textAlign : "left",
        color: "#777777",
        marginBottom : 80,
      }
  })
);
const LastYearMainActivity: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [activityData, setActivityData] = useState<Array<ActivityInterface.Activity>>([ActivityInterface.defaultData,ActivityInterface.defaultData,ActivityInterface.defaultData]);
    const updateActivityData =(data: ActivityInterface.Activity, index: number) => {
        // const result = activityData.map((value, idx) => {if(idx === index){
        //     return data
        // }else {
        //     return value
        // }})
        // setActivityData(result)
        const result = props.data.map((value, idx) => {if(idx === index){
            return data
        }else {
            return value
        }})
        props.setDataList(result)
    }

    return <div>
        <div className={classes.title}> 지난 해 주요 활동 보고</div>
        <div className={classes.subTitle}>주요 활동은 최대 3개까지 입력 가능합니다.</div>
        {
            // activityData.map((value,idx) => {
            //     return <ActiveStatus updateData={updateActivityData} data={value} index={idx}/>
            // })
            props.data.map((value,idx) => {
                return <ActiveStatus updateData={updateActivityData} data={value} index={idx}/>
            })
        }
    </div>
}

export default LastYearMainActivity;
