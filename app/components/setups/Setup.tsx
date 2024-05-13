"use client";
import {
  ORGANIZATION_SETUPS,
  SETUPS_MENU,
} from "@/app/constants/companySetups";
import { Typography } from "@mui/material";
import React from "react";
import TabsWidget from "../widgets/TabsWidget";

const Setup: React.FC = () => {
  return (
    <TabsWidget
      tabLabels={ORGANIZATION_SETUPS}
      items={[...ORGANIZATION_SETUPS.map((setup) => setup.children)]}
      tabLinks={SETUPS_MENU}
    />
  );
};

export default Setup;
