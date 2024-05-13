// constants/companySetups.ts
export const ORGANIZATION_SETUPS = [
  {
    tabName: "Core Setups",
    children: [
      { tabName: "Companies", children: [] },
      { tabName: "Branches", children: [] },
      { tabName: "Departments", children: [] },
    ],
  },
  {
    tabName: "Benefits Setups",
    children: [{ tabName: "Benefit Types", children: [] }],
  },
  {
    tabName: "Documents Setups",
    children: [
      { tabName: "Document Types", children: [] },
      { tabName: "Knowledge Base Documents", children: [] },
    ],
  },
  {
    tabName: "Assets Setups",
    children: [{ tabName: "Asset Types", children: [] }, { tabName: "Asset Brands", children: [] }],
  },
  {
    tabName: "Time Off Setups",
    children: [{ tabName: "Timeoff Types", children: [] }],
  },
  {
    tabName: "Claim Setups",
    children: [{ tabName: "Claim Types", children: [] }],
  },
];

export const SETUPS_MENU = [
  "core-setups",
  "benefits-setups",
  "documents-setups",
  "assets-setups",
  "time-off-setups",
  "claim-setups",
];
