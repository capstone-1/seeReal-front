import React from "react";

export interface Pyo {
  color: string;
  name: string;
  account: number;
}

export const defaultData: Pyo = {
  color: "red",
  name: "test",
  account: 30000,
};
