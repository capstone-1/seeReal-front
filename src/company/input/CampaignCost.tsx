import React, { useState, useEffect } from "react";
import * as CampaignCostInterface from "../../models/campaignCost";
import InputCampain from "../form/InputCampain";
import EidtCampaignCost from "../form/EditCampaignCost";
import InputCampainCost from "../form/InputCampainCost";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import LineIcon from "../../resources/icons/campaign_line_obt.png";
interface Props {
    data:Array<CampaignCostInterface.CampaignCost>;
    setDataList(data : Array<CampaignCostInterface.CampaignCost> ) : void;
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
    const [campaignData, setCampaignData] = useState<Array<CampaignCostInterface.CampaignCost>>([]);


    const addCampaignData = (data : CampaignCostInterface.CampaignCost) => {
        // setCampaignData(campaignData.concat(data));
        props.setDataList(props.data.concat(data));
    }

    const deleteCampaignData = (idx : number) => {
        console.log(idx)
        // if(idx > -1){
        //     const result = campaignData.filter((value,index) => index !== idx)
        //     // wht campaignData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
        //     setCampaignData(result)
        //     console.log(campaignData)
        // }
        if(idx > -1){
            const result = props.data.filter((value,index) => index !== idx)
            // wht campaignData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
            props.setDataList(result)
        }
    }

    const changeCampaignData = (idx : number, data : CampaignCostInterface.CampaignCost) => {
        console.log(data);
        // const result = campaignData.map((value, index) => {if(index === idx){
        //     return data
        // }else {
        //     return value
        // }})
        // setCampaignData(result)
        const result = props.data.map((value, index) => {if(index === idx){
            return data
        }else {
            return value
        }})
        props.setDataList(result)
    }

    const ViewCurrentData = () => {
        // return (campaignData.map((value,idx)=> {
        //    return <EidtCampaignCost data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
        //    updateData={changeCampaignData} ></EidtCampaignCost>
        // }));
        return (props.data.map((value,idx)=> {
            return <EidtCampaignCost data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
            updateData={changeCampaignData} ></EidtCampaignCost>
         }));
    }

    return <div>
        <div className={classes.title}> 캠페인 모금액 사용 내역</div>
        <div className={classes.subTitle}>캠페인 모금액 사용 내역</div>
        <InputCampainCost addDataList={addCampaignData} />
        <img src={LineIcon} className={classes.imgBox}   alt="profile"></img>
        <br></br>
        <br></br>
        <br></br>
        {
           ViewCurrentData()
        }
    </div>
}

export default Campaign;
