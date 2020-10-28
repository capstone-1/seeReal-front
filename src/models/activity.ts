import React from "react";

export interface Activity {
    name : string;
    content : string;
    performance: string;
    limitation: string;
}

export const defaultData : Activity ={
    name : "",
    content : "",
    performance: "",
    limitation : "",
}