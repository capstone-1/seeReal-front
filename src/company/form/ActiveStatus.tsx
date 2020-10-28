import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import * as ActivityInterface from "../../models/activity";
import "../../index.css";
import { updateDefaultClause } from "typescript";
interface Props {
  data : ActivityInterface.Activity,
  index : number,
  updateData(data : ActivityInterface.Activity, idx: number) : void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1280,
      height: 600,
    },
    titlebox: {
      width: "50%",
      height: 30,
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: 14,
    },
    titleName: {
      fontSize: 26,
      marginRight: 29,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareB, sans-serif",
    },
    titleInput: {
      width: 512,
      fontSize: 23,
      letterSpacing: -0.65,
      fontFamily: "NanumSquareR, sans-serif",
      lineHeight: 1.13,
      borderBottom: "solid 2px #000000",
    },
    mainBox: {
      width: "100%",
      height: 504,
      borderRadius: 5,
      backgroundColor: "#e8f2ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    detailBox: {
      width: 1250,
      height: 136,
      borderRadius: 5,
      display: "flex",
      flexDirection: "row",
    },
    contentsTitle: {
      height: 136,
      width: 180,
      fontSize: 24,
      lineHeight: 1.13,
      letterSpacing: -0.6,
      fontFamily: "NanumSquareR, sans-serif",
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      color: "#00000",
      flex: "1 1 0",
    },
    contentsBox: {
      width: 1070,
      height: 136,
      borderRadius: 5,
      backgroundColor: "#ffffff",
      flex: "5 1 0",
      position : "relative",
      zIndex : 1,
      display: "flex",
      flexDirection: "column",
    },
    contents: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 20,
      lineHeight: 1.15,
      letterSpacing: -0.5,
      paddingLeft : 20,
      paddingRight : 20,
      whiteSpace : "pre-line",
      overflowY : "hidden",
      position : "relative",
      zIndex : 1,
    },
    countLine: {
      fontFamily: "NanumSquareR, sans-serif",
      fontSize: 20,
      lineHeight: 1.15,
      letterSpacing: -0.5,
      color: "#999999",
      position : "relative",
      zIndex : 2,
      textAlign : "right",
      paddingRight : 20,
    }
  })
);

const ActiveStatus: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [activityData, setActivityData] = useState<ActivityInterface.Activity>(ActivityInterface.defaultData);
  const InputActivityData = (value : string, fieldName : string, limit: number) => {
    const result = value.substring(0, limit);
    setActivityData({...activityData, [fieldName] : result})
  }
  useEffect(()=> {
    props.updateData(activityData, props.index);
  }, [activityData]);
  


  return (
    <div className={classes.root}>
      <div className={classes.titlebox}>
        <div className={classes.titleName}> 활동명 </div>
        <InputBase className={classes.titleInput} inputProps={{ 'aria-label': 'naked' }} 
      placeholder= "캠페인 명을 적어주세요" defaultValue={props.data.name}
      value={props.data.name}
      onChange={e => InputActivityData(e.target.value, "name", 20)}
     ></InputBase>
        {/* <div className={classes.titleInput}> 캠페인명을 적어주세요 </div> */}
      </div>
      <div className={classes.mainBox}>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>활동내용</div>
          <div className={classes.contentsBox}>
          <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      defaultValue={props.data.content}
      value={props.data.content} rows={4}
      onChange={e => InputActivityData(e.target.value, "content", 100)}  multiline={true} />
  <div className={classes.countLine}>{`${props.data.content.length}/100`}</div>
  </div>
        </div>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>성과</div>
          <div className={classes.contentsBox}>
          <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      defaultValue={props.data.performance}
      value={props.data.performance} rows={4}
      onChange={e => InputActivityData(e.target.value, "performance", 100)}  multiline={true} />
  <div className={classes.countLine}>{`${props.data.performance.length}/100`}</div>
  </div>
        </div>
        <div className={classes.detailBox}>
          <div className={classes.contentsTitle}>한계</div>
          <div className={classes.contentsBox}>
          <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      defaultValue={props.data.limitation}
      value={props.data.limitation} rows={4}
      onChange={e => InputActivityData(e.target.value, "limitation", 100)}  multiline={true} />
  <div className={classes.countLine}>{`${props.data.limitation.length}/100`}</div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveStatus;
