import { hostname } from "os";

const tesApi = (day: string, query: string) => {
  return `/api/test/data?day=${day}&query=${query}`;
};

export const signIn = () => {
    return `/organization/login`;
}

export const addCompanyTaxIncome = () => {
    return `/organization/upload/tax-income`;
}

export const addCompanyTaxOutcome = () => {
    return `/organization/upload/tax-outcome`;
}

export const addCompanyActivity = () => {
    return `/organization/upload/activity`;
}

export const addCompanyCampaign = () => {
    return `/organization/upload/campaign`;
}

export const addCompanyCampaignCost = () => {
    return `/organization/upload/campaign-cost`;
}




export default {
  tesApi,
  signIn,
  addCompanyTaxIncome,
  addCompanyTaxOutcome,
  addCompanyActivity,
  addCompanyCampaign,
  addCompanyCampaignCost
};