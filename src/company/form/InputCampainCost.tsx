import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import InputBase from '@material-ui/core/InputBase';
import * as campaignCostInterface from "../../models/campaignCost";
import NumberFormat from "react-number-format";
import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
interface Props {
  addDataList(data : campaignCostInterface.CampaignCost ) : void
  data ? : campaignCostInterface.CampaignCost
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 1300,
      height: 60,
    //   border: "1px solid #73a8ed",
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
        
        flex: 1,
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
        textAlign: "center",
        justifyContent: "center",
        alignItems : "center",
        
      },
      numberFormat : {
          width : 220,
          height: 60,
        fontFamily : "NanumSquareR, sans-serif",
        color : "#000000",
        fontSize : 24,
        lineHeight : 1.13,
        letterSpacing : -0.6,
        backgroundColor :"#e8f2ff",
        borderRadius : 5,
        borderColor : "#e8f2ff",
        textAlign: "center",
        justifyContent: "center",
        paddingLeft : 10,
      },
      surFix : {
        fontFamily: "NanumSquareR, sans-serif",
        lineHeight: 1.13,
        fontSize: 24,
        letterSpacing: -0.6,
        color: "black",
        paddingLeft : 10,
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        flex : 1,
        
    },
    moneyFormat : {
        display : "flex",
        flexDirection : "row",
    }
  })
);


const InputCampainCost: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [campaign, setCampaign] = useState<campaignCostInterface.CampaignCost>(props.data ? props.data :campaignCostInterface.defaultData);
  useEffect(()=> {
  }, [campaign])

  const InputCampainTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
    const result = String(e.target.value).substring(0, 28);
    setCampaign({...campaign, content : result})
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
    if(campaign.useDate !== null && campaign.content !== null && campaign.cost !== undefined){
      props.addDataList(campaign);
      setCampaign(campaignCostInterface.defaultData);
    }
  }

//   const CostInput = (cost : number|undefined) => {
//       return <div className={classes.moneyFormat}>
//       <NumberFormat className={classes.numberFormat}  placeholder={"000,000,000,000"} value={cost} thousandSeparator 
//         onValueChange={(values) => setCampaign({...campaign, "cost" : values.floatValue })}
//         defaultValue={undefined} ></NumberFormat>
//         <div className={classes.surFix}> 원</div>
//         </div>;
//   }

  return (
    <div className={classes.root}>
      <div className={classes.dateInput}>
          <div className  ={classes.dateBox}>
          <DatePicker className = {classes.dateFont}  selected={campaign.useDate ? new Date(campaign.useDate) : null}
             onChange={date=> InputCampainDate(date, "useDate" )}
             placeholderText="YYYY-MM-DD"
             dateFormat="yyyy-MM-dd"></DatePicker>
          </div>
      </div>
      <div className={classes.detailInput}> 
      <InputBase className={classes.contents} inputProps={{ 'aria-label': 'naked' }} 
      placeholder= "사용내역은 28글자로 제한하겠습니다" 
      value={campaign.content}
      onChange={InputCampainTitle} id="text"></InputBase>
      </div>
      <div className={classes.moneyFormat}>
      <NumberFormat className={classes.numberFormat}  placeholder={"000,000,000,000"} value={campaign.cost } thousandSeparator 
        onValueChange={(values) => setCampaign({...campaign, "cost" : values.floatValue })} defaultValue={undefined} ></NumberFormat>
        <div className={classes.surFix}> 원</div>
        </div>
      <button className={classes.button} onClick={onClick}> 입력</button>
    </div>
  );
};

export default InputCampainCost;
