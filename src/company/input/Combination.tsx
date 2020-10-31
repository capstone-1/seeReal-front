import React, { useState, useEffect } from "react";
import * as ActivityInterface from "../../models/activity";
import ActiveStatus from "../form/ActiveStatus";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import "../../index.css";
import * as CampaignInterface from "../../models/campaign";
import EditCampain from "../form/EidtCampain";
import LineIcon from "../../resources/icons/campaign_line_obt.png";
import InputCampain from "../form/InputCampain";
import EidtCampaignCost from "../form/EditCampaignCost";
import InputCampainCost from "../form/InputCampainCost";
import * as CampaignCostInterface from "../../models/campaignCost";

interface Props {
    // data : Array<ActivityInterface.Activity>;
    setDataList (activityData : Array<ActivityInterface.Activity>,
        campaignData : Array<CampaignInterface.Campaign>,
        campaignCostData : Array<CampaignCostInterface.CampaignCost> ) : void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      total: {
          display : "flex",
          flexDirection : "column",
          justifyContent : "center",
      },
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
      nextButtonBox : {
        marginTop : 60,
        display : "flex",
        justifyContent : "flex-end",
    },
    nextButton : {
        width : 190,
        height : 68,
        backgroundColor : "#22479f",
        fontFamily: "NanumSquareB, sans-serif",
        fontSize : 26,
        lineHeight : 1.15,
        letterSpacing : -0.65,
        display : "flex",
        justifyContent : "center",
        textAlign : "center",
        alignItems : "center",
        color: "white",
        border : "none",
        borderRadius : 5,
    },
    imgBox : {
        marginTop : 32,
    },
    contentSpace : {
        position: "relative",
        marginBottom : 120,
    },
  })
);
const Combination: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [campaignData, setCampaignData] = useState<Array<CampaignInterface.Campaign>>([]);
    const [campaignCostData, setCampaignCostData] = useState<Array<CampaignCostInterface.CampaignCost>>([]);
    const [activityData, setActivityData] = useState<Array<ActivityInterface.Activity>>([ActivityInterface.defaultData,ActivityInterface.defaultData,ActivityInterface.defaultData]);
    const updateActivityData =(data: ActivityInterface.Activity, index: number) => {
        console.log(data);
        const result = activityData.map((value, idx) => {if(idx === index){
            return data
        }else {
            return value
        }})
        setActivityData(result)

        // const result = props.data.map((value, idx) => {if(idx === index){
        //     return data
        // }else {
        //     return value
        // }})
        // props.setDataList(result)
    }
    const saveData = () => {
        props.setDataList(activityData, campaignData, campaignCostData);
    }

    const addCampaignData = (data : CampaignInterface.Campaign) => {
        setCampaignData(campaignData.concat(data));
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
    }

    const addCampaignCostData = (data : CampaignCostInterface.CampaignCost) => {
        setCampaignCostData(campaignCostData.concat(data));
    }

    const deleteCampaignCostData = (idx : number) => {
        console.log(idx)
        if(idx > -1){
            const result = campaignCostData.filter((value,index) => index !== idx)
            // wht campaignCostData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
            setCampaignCostData(result)
            console.log(campaignCostData)
        }
    }

    const changeCampaignCostData = (idx : number, data : CampaignCostInterface.CampaignCost) => {
        const result = campaignCostData.map((value, index) => {if(index === idx){
            return data
        }else {
            return value
        }})
        setCampaignCostData(result)
    }

    const ViewCurrentCostData = () => {
        return (campaignCostData.map((value,idx)=> {
           return <EidtCampaignCost data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignCostData}
           updateData={changeCampaignCostData} ></EidtCampaignCost>
        }));
    }



    return (<div className={classes.total}>
    
    
    <div>
        <div className={classes.title}> 지난 해 주요 활동 보고</div>
        <div className={classes.subTitle}>주요 활동은 최대 3개까지 입력 가능합니다.</div>
        {
            activityData.map((value,idx) => {
                return <ActiveStatus updateData={updateActivityData} data={value} index={idx}/>
            })

            // props.data.map((value,idx) => {
            //     return <ActiveStatus updateData={updateActivityData} data={value} index={idx}/>
            // })
        }
    </div>
    <div className={classes.contentSpace}></div>


    <div>
        <div className={classes.title}> 중장기 캠페인 진행 보고</div>
        <div className={classes.subTitle}>캠페인 내역은 현재 분기의 6개월 전 내역까지만 반영됩니다.</div>
        <InputCampain addDataList={addCampaignData} />
        <img src={LineIcon} className={classes.imgBox}   alt="profile"></img>
        <br></br>
        <br></br>
        <br></br>
        {
          (campaignData.map((value,idx)=> {
            return <EditCampain data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
            updateData={changeCampaignData} ></EditCampain>
         }))
        }
    </div>
    <div className={classes.contentSpace}></div>

    <div>
        <div className={classes.title}> 캠페인 모금액 사용 내역</div>
        <div className={classes.subTitle}>캠페인 모금액 사용 내역</div>
        <InputCampainCost addDataList={addCampaignCostData} />
        <img src={LineIcon} className={classes.imgBox}   alt="profile"></img>
        <br></br>
        <br></br>
        <br></br>
        {
           ViewCurrentCostData()
        }
    </div>

    <div className={classes.nextButtonBox}>
                    <button className={classes.nextButton} onClick={()=> saveData}> 저장하기</button>
                </div>
    </div>)
}

export default Combination;
