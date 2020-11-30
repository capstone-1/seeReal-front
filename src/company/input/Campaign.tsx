import React, { useState, useEffect } from "react";
import * as CampaignInterface from "../../models/campaign";
import InputCampain from "../form/InputCampain";
import EidtCampain from "../form/EidtCampain";
import EditCampain from "../form/EidtCampain";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import LineIcon from "../../resources/icons/campaign_line_obt.png";

interface Props {
    data : Array<CampaignInterface.Campaign>;
    setDataList(data : Array<CampaignInterface.Campaign>) : void;
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
      },
      imgBox : {
          marginTop : 32,
      }
  })
);
const Campaign: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [campaignData, setCampaignData] = useState<Array<CampaignInterface.Campaign>>([]);
    useEffect(()=> {
        setCampaignData(props.data);
    },[]);
    useEffect(()=>{
        props.setDataList(campaignData);
    },[campaignData]);
    const addCampaignData = (data : CampaignInterface.Campaign) => {
        // setCampaignData(campaignData.concat(data));
        // props.setDataList(props.data.concat(data));
    }

    const deleteCampaignData = (idx : number) => {
        if(idx > -1){
            const result = campaignData.filter((value,index) => index !== idx)
            // wht campaignData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
            setCampaignData(result)

            // const result = props.data.filter((value,index) => index !== idx)
            // // wht campaignData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
            // props.setDataList(result)
        }
    }

    const changeCampaignData = (idx : number, data : CampaignInterface.Campaign) => {
        console.log(data);
        const result = campaignData.map((value, index) => {if(index === idx){
            return data
        }else {
            return value
        }})
        setCampaignData(result)
        // const result = props.data.map((value, index) => {if(index === idx){
        //     return data
        // }else {
        //     return value
        // }})
        // props.setDataList(result)

    }

    const ViewCurrentData = () => {
        return (campaignData.map((value,idx)=> {
           return <EditCampain data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
           updateData={changeCampaignData} ></EditCampain>
        }));
        // return (props.data.map((value,idx)=> {
        //     return <EditCampain data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
        //     updateData={changeCampaignData} ></EditCampain>
        //  }));
    }

    return <div>
        <div className={classes.title}> 중장기 캠페인 진행 보고</div>
        <div className={classes.subTitle}>캠페인 내역은 현재 분기의 6개월 전 내역까지만 반영됩니다.</div>
        {/* <InputCampain addDataList={()=>addCampaignData} /> */}
        <img src={LineIcon} className={classes.imgBox}   alt="profile"></img>
        <br></br>
        <br></br>
        <br></br>
        {
          (campaignData.map((value,idx)=> {
            return <EditCampain data={value} key={idx} indexOfData={idx} deleteData={()=>deleteCampaignData}
            updateData={()=>changeCampaignData} ></EditCampain>
         }))
        }
    </div>
}

export default Campaign;
