import React, { useState, useEffect } from "react";
import * as CampaignInterface from "../../models/campaign";
import InputCampain from "../form/InputCampain";
import EidtCampain from "../form/EidtCampain";
import EditCampain from "../form/EidtCampain";

interface Props {}

const Campaign: React.FC<Props> = (props) => {
    const [campaignData, setCampaignData] = useState<Array<CampaignInterface.Campaign>>([]);

    useEffect(()=> {
        console.log(campaignData);
    },[campaignData])

    const addCampaignData = (data : CampaignInterface.Campaign) => {
        setCampaignData(campaignData.concat(data));
    }

    const deleteCampaignData = (idx : number) => {
        console.log(idx)
        if(idx > -1){
            const result = campaignData.filter((value,index) => index !== idx)
            // wht campaignData.splice(idx,1) 도 동일하게 제거하는건데 먹히지 않았을까
            setCampaignData(result)
            console.log(campaignData)
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

    const ViewCurrentData = () => {
        return (campaignData.map((value,idx)=> {
           return <EditCampain data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
           updateData={changeCampaignData} ></EditCampain>
        }));
    }

    return <div>
        <InputCampain addDataList={addCampaignData} />
        <br></br>
        <br></br>
        <br></br>
        {
           ViewCurrentData()
        }
    </div>
}

export default Campaign;
