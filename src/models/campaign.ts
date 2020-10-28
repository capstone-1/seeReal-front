import React from "react";

export interface Campaign {
    name : string|null;
    start : string|null;
    end: string|null;
}

export const defaultData : Campaign ={
    name : "",
    start : null,
    end: null,
}