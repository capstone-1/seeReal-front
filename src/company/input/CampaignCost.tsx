import React, { useState, useEffect } from "react";
import * as CampaignCostInterface from "../../models/campaignCost";
import InputCampain from "../form/InputCampain";
import EidtCampaignCost from "../form/EditCampaignCost";
import InputCampainCost from "../form/InputCampainCost";

interface Props {}

const Campaign: React.FC<Props> = (props) => {
    const [campaignData, setCampaignData] = useState<Array<CampaignCostInterface.CampaignCost>>([]);

    useEffect(()=> {
        console.log(campaignData);
    },[campaignData])

    const addCampaignData = (data : CampaignCostInterface.CampaignCost) => {
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

    const changeCampaignData = (idx : number, data : CampaignCostInterface.CampaignCost) => {
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
           return <EidtCampaignCost data={value} key={idx} indexOfData={idx} deleteData={deleteCampaignData}
           updateData={changeCampaignData} ></EidtCampaignCost>
        }));
    }

    return <div>
        <InputCampainCost addDataList={addCampaignData} />
        <br></br>
        <br></br>
        <br></br>
        {
           ViewCurrentData()
        }
    </div>
}

export default Campaign;
