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

export const getDonationList = (size: number) => {
    return `/regular-donation?size=${size}`;
}

export const getDonationPageData = (page: number, size: number, name: string ="") => {
    return `/regular-donation?page=${page}&size=${size}&search=${name}`;
}

export const searchWithCategory = (page: number, size: number, category: string="") => {
    return `/regular-donation/category?page=${page}&size=${size}&category=${category}`;
}

export const getDonationDetails = (id: number) => {
    return `/regular-donation/${id}`;
}




export default {
  tesApi,
  signIn,
  addCompanyTaxIncome,
  addCompanyTaxOutcome,
  addCompanyActivity,
  addCompanyCampaign,
  addCompanyCampaignCost,
  getDonationList,
  getDonationPageData,
  searchWithCategory,
  getDonationDetails
};