import { defaultCipherList } from "constants";
import React from "react";

export interface TaxIncome {
    carriedAmount: number | null;
    personalDonation : number | null;
    corporateDonation : number | null;
    ngoDonation : number | null;
    itemDonation : number | null;
    etcDonation : number | null;
    supportFund : number | null;
    grantFund : number | null;
    otherFund :  number | null;
    etcBusinessProfit :  number | null;
    interestProfit :  number | null;
    conversionProfit :  number | null;
    exchangeProfit :  number | null;
    etcNonBusinessProfit :  number | null;
}

export const defaultData : TaxIncome = {
    carriedAmount: null,
    personalDonation : null,
    corporateDonation : null,
    ngoDonation: null,
    itemDonation : null,
    etcDonation : null,
    supportFund : null,
    grantFund : null,
    otherFund : null,
    etcBusinessProfit : null,
    interestProfit : null,
    conversionProfit : null,
    exchangeProfit : null,
    etcNonBusinessProfit : null,
}

export const carriedMonth = {
    carriedAmount : "전기이월액",
}

export const donation = {
    personalDonation : "개인후원금",
    corporateDonation : "기업후원금",
    ngoDonation : "민간단체후원금",
    itemDonation : "후원물품",
    etcDonation : "기타후원금",
}

export const fund = {
    supportFund : "지원금",
    grantFund : "보조금",
    otherFund : "기타지원금",
}

export const etcBusinessProfit = {
    etcBusinessProfit : "기타사업수익"
}

export const business = {
    personalDonation : "개인후원금",
    corporateDonation : "기업후원금",
    ngoDonation : "민간단체후원금",
    itemDonation : "후원물품",
    etcDonation : "기타후원금",
    supportFund : "지원금",
    grantFund : "보조금",
    otherFund : "기타지원금",
    etcBusinessProfit : "기타사업수익",
}

export const etcNonBusinessProfit = {
    interestProfit : "이자수입금",
    conversionProfit : "외화환산손익",
    exchangeProfit : "외환차익",
    etcNonBusinessProfit : "기타비사업수익",
}

export const final = {
    personalDonation : "개인후원금",
    corporateDonation : "기업후원금",
    ngoDonation : "민간단체후원금",
    itemDonation : "후원물품",
    etcDonation : "기타후원금",
    supportFund : "지원금",
    grantFund : "보조금",
    otherFund : "기타지원금",
    etcBusinessProfit : "기타사업수익",
    interestProfit : "이자수입금",
    conversionProfit : "외화환산손익",
    exchangeProfit : "외환차익",
    etcNonBusinessProfit : "기타비사업수익",
}