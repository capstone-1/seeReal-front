import React, { useState, useEffect } from "react";
import * as ActivityInterface from "../../models/activity";
import ActiveStatus from "../form/ActiveStatus";



interface Props {}

const LastYearMainActivity: React.FC<Props> = (props) => {
    const [activityData, setActivityData] = useState<Array<ActivityInterface.Activity>>([ActivityInterface.defaultData,ActivityInterface.defaultData,ActivityInterface.defaultData]);
    const updateActivityData =(data: ActivityInterface.Activity, index: number) => {
        const result = activityData.map((value, idx) => {if(idx === index){
            return data
        }else {
            return value
        }})
        setActivityData(result)
    }

    return <div>
        {
            activityData.map((value,idx) => {
                return <ActiveStatus updateData={updateActivityData} data={value} index={idx}/>
            })
        }
    </div>
}

export default LastYearMainActivity;
