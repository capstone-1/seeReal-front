import React from "react";

export interface TaxOutcome {
    carriedAmount : number | null;
    laborCost: number | null;
    consumableCost : number | null;
    rentCost : number | null;
    etcOperationCost : number | null;
    remedyCost : number | null;
    eventCost :number | null;
    promotionCost : number | null;
    etcBusinessCost : number | null;
    vatCost : number | null;
    taxProcessingCost : number | null;
    officeCost : number | null;
    etcRecruitCost : number | null;
    gasCost : number | null;
    communicationCost : number | null;
    etcCost : number | null;
    conversionCost : number | null;
    exchangeCost : number | null;
    etcNonBusinessCost : number | null;
}


export const defaultData : TaxOutcome = {
    carriedAmount: null,
    laborCost: null,
    consumableCost : null,
    rentCost : null,
    etcOperationCost: null,
    remedyCost : null,
    eventCost : null,
    promotionCost : null,
    etcBusinessCost : null,
    vatCost : null,
    taxProcessingCost : null,
    officeCost : null,
    etcRecruitCost : null,
    gasCost : null,
    communicationCost : null,
    etcCost : null,
    conversionCost : null,
    exchangeCost : null,
    etcNonBusinessCost : null,
}

export const carriedMonth = {
    carriedAmount : "차기이월액",
}

export const operation = {
    laborCost : "인건비",
    consumableCost : "소모품비",
    rentCost : "지급임차료",
    etcOperationCost : "기타운영비",
}

export const business = {
    remedyCost : "구제사업비",
    eventCost : "행사사업비",
    promotionCost : "홍보활동비",
    etcBusinessCost : "기타사업비",
}

export const unknown = {
    vatCost : "수수료",
    taxProcessingCost : "세무처리비",
    officeCost : "사무진행비",
    etcRecruitCost : "기타모집충당비",
}

export const etcBusinessCost = {
    gasCost : "가스수도료",
    communicationCost : "통신비",
    etcCost : "기타사업지출",
}

export const etcNonBusinessCost = {
    conversionCost : "외화환산손실",
    exchangeCost : "외환차손",
    etcNonBusinessCost : "기타사업비지출",
}

export const totalBusiness = {
    laborCost : "인건비",
    consumableCost : "소모품비",
    rentCost : "지급임차료",
    etcOperationCost : "기타운영비",
    remedyCost : "구제사업비",
    eventCost : "행사사업비",
    promotionCost : "홍보활동비",
    etcBusinessCost : "기타사업비",
    vatCost : "수수료",
    taxProcessingCost : "세무처리비",
    officeCost : "사무진행비",
    etcRecruitCost : "기타모집충당비",
    gasCost : "가스수도료",
    communicationCost : "통신비",
    etcCost : "기타사업지출",
}

export const final = {
    laborCost : "인건비",
    consumableCost : "소모품비",
    rentCost : "지급임차료",
    etcOperationCost : "기타운영비",
    remedyCost : "구제사업비",
    eventCost : "행사사업비",
    promotionCost : "홍보활동비",
    etcBusinessCost : "기타사업비",
    vatCost : "수수료",
    taxProcessingCost : "세무처리비",
    officeCost : "사무진행비",
    etcRecruitCost : "기타모집충당비",
    gasCost : "가스수도료",
    communicationCost : "통신비",
    etcCost : "기타사업지출",
    conversionCost : "외화환산손실",
    exchangeCost : "외환차손",
    etcNonBusinessCost : "기타사업비지출",
}