import React from "react";

export interface donationSummary {
    id: number| undefined;
    categories: Array<string>;
    name : string;
    profileUrl : string;
    registrant: string;
    shortIntroduction: string;
    target: string;
}

export const defaultData : donationSummary ={
    id : undefined,
    categories: [],
    name : "",
    profileUrl : "",
    registrant: "",
    shortIntroduction: "",
    target: ""
}


export interface PageLink {
    first: string;
    last: string;
    next: string;
    self: string;
}