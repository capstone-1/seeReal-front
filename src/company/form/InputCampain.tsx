import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import InputBase from '@material-ui/core/InputBase';
import * as CampaignInterface from "../../models/campaign";
import NumberFormat from "react-number-format";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
interface Props {
  addDataList(data : CampaignInterface.Campaign ) : void
  data ? : CampaignInterface.Campaign
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1300,
      height: 60,
      display : "flex",
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
        alignItems : "center",
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
      },
      dateFont : {
        width : "90%",
        fontSize : 24,
        lineHeight : 1.13,
        letterSpacing : -0.6,
        color : "black",
        fontFamily : "NanumSquareR, sans-serif",
        backgroundColor : "#e8f2ff",
        borderStyle : "none",
        textAlign: "left",
        justifyContent: "center",
        alignItems : "center",
      },
  })
);


const InputCampain: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [campaign, setCampaign] = useState<CampaignInterface.Campaign>(props.data ? props.data :CampaignInterface.defaultData);
  
 

  const InputCampainTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
    const result = String(e.target.value).substring(0, 20);
    setCampaign({...campaign, name : result})
  }

  const returnDateToString = (date : Date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day =  ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
  }

  const InputCampainDate = (value : any, fieldName : string) => {
    const date = returnDateToString(value);
    setCampaign({...campaign, [fieldName] : date})
  }

  const onClick = () => {

    if(campaign.start !== null && campaign.end !== null && campaign.name !== null){
      props.addDataList(campaign);
      setCampaign(CampaignInterface.defaultData);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.dateInput}>
          <div className  ={classes.dateBox}>
          <DatePicker className = {classes.dateFont}  selected={campaign.start ? new Date(campaign.start) : null}
             onChange={date=> InputCampainDate(date, "start" )}
             placeholderText="YYYY-MM-DD"
             dateFormat="yyyy-MM-dd"></DatePicker>
          </div>
          <div className={classes.textCenter}> ~ </div>
          <div className ={classes.dateBox}>
            <DatePicker className = {classes.dateFont}  selected={campaign.end ? new Date(campaign.end) : null}
             onChange={date=> InputCampainDate(date, "end" )}
             placeholderText="YYYY-MM-DD"
             dateFormat="yyyy-MM-dd"></DatePicker>
            </div>
      </div>
      <div className={classes.detailInput}> 
      <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      placeholder= "캠페인 이름은 20글자로 제한하겠습니다" defaultValue={campaign.name}
      value={campaign.name}
      onChange={()=>InputCampainTitle} id="text"></InputBase>
      </div>
      <button className={classes.button} onClick={() =>onClick}> 입력</button>
    </div>
  );
};

export default InputCampain;
