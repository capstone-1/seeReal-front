import React from "react";

export interface DonationCostPreviewResponseDto {
    name: string;
    targetNum: string;
    cost: string;
    etc: string;
}

export interface CampaignDetails {
    name: string;
    registrant: string;
    shorIntroduction: string;
    profileUrl: string;
    target: string;
    content: string;
    introduction: string;
    plan: string;
    categories: [string];
    costPreviews: [DonationCostPreviewResponseDto]
}

// export const defaultData : CampaignDetail ={
//     useDate : null,
//     content : "",
//     cost: 0,
// }