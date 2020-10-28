import React from "react";

export interface CampaignCost {
    useDate : string|null;
    content : string|null;
    cost: number|undefined;
}

export const defaultData : CampaignCost ={
    useDate : null,
    content : "",
    cost: 0,
}