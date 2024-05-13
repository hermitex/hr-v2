import { Box, Paper, Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  outerTabValue: number;
}

function TabPanel({ children, outerTabValue, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={outerTabValue !== index}>
      {outerTabValue === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

interface TabItem {
  tabName: string;
  children?: TabItem[];
}

interface TabsWidgetProps {
  tabLabels: { tabName: string; children?: TabItem[] }[];
  items: TabItem[][];
  tabLinks?: string[];
}

const TabsWidget: React.FC<TabsWidgetProps> = ({
  tabLabels,
  items,
  tabLinks,
}) => {
  const router = useRouter();
  const pathname = usePathname(); // Use router.asPath instead of next/navigation
  const [outerTabValue, setOuterTabValue] = useState(0);
  const [nestedTabValue, setNestedTabValue] = useState<number | null>(0);
  const [nestedTabIndex, setNestedTabIndex] = useState<number | null>(0);
  console.log(outerTabValue);
  useEffect(() => {
    console.log(1);
    // Effect to set the active tab based on the pathname
    const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
    const activeTabIndex = tabLinks?.indexOf(lastSegment);
    if (activeTabIndex !== undefined && activeTabIndex !== -1) {
      setOuterTabValue(activeTabIndex);
    }
  }, [pathname, tabLinks]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setOuterTabValue(newValue);
    updateUrl(newValue, 0);
  };

  const handleNestedTabChange = (
    _event: React.SyntheticEvent,
    newValue: number,
    index: number
  ) => {
    console.log(newValue);
    setNestedTabIndex(newValue + 1);
    setNestedTabValue(index + 1);
    updateUrl(outerTabValue, index);
  };

  const updateUrl = (outerTabIndex: number, nestedTabIndex: number | 0) => {
    if (tabLinks && tabLinks[outerTabIndex]) {
      let url = tabLinks[outerTabIndex];
      if (
        nestedTabIndex !== null &&
        items[outerTabIndex][nestedTabIndex]?.tabName
      ) {
        url += `#${items[outerTabIndex][nestedTabIndex]?.tabName
          .toLocaleLowerCase()
          .split(" ")
          .join("-")}`;
      }
      console.log(outerTabIndex, nestedTabIndex, url);
      router.push(url, undefined);
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      <Paper square>
        <Tabs
          value={outerTabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              label={label.tabName}
              sx={{
                textTransform: "capitalize",
                backgroundColor:
                  outerTabValue === index ? "#FF9800" : "inherit",
                color: outerTabValue === index ? "#FFF !important" : "inherit",
                borderBottom:
                  outerTabValue === index ? "2px solid #FFF" : "none",
                "&:hover": {
                  backgroundColor:
                    outerTabValue !== index ? "#F5F5F5" : "#FF9800",
                },
              }}
            />
          ))}
        </Tabs>
      </Paper>
      {items.map((child, index) => (
        <TabPanel key={index} outerTabValue={outerTabValue} index={index}>
          <Tabs
            value={nestedTabValue === index ? nestedTabIndex : false}
            onChange={(event, newValue) =>
              handleNestedTabChange(event, newValue, index)
            }
            variant="scrollable"
            scrollButtons="auto"
            aria-label="company settings scrollable tabs"
          >
            {child.map((tab, nestedIndex) => (
              <Tab
                key={nestedIndex}
                label={tab.tabName + index}
                sx={{
                  textTransform: "capitalize",
                  backgroundColor:
                    nestedTabValue === index && nestedTabIndex === nestedIndex
                      ? "#FF9800"
                      : "inherit",
                  color:
                    nestedTabValue === index && nestedTabIndex === nestedIndex
                      ? "#FFF !important"
                      : "inherit",
                  borderBottom:
                    nestedTabValue === index && nestedTabIndex === nestedIndex
                      ? "2px solid #FFF"
                      : "none",
                  "&:hover": {
                    backgroundColor:
                      nestedTabValue === index && nestedTabIndex !== nestedIndex
                        ? "#F5F5F5"
                        : "#FF9800",
                  },
                }}
              />
            ))}
          </Tabs>
          {nestedTabValue === index && nestedTabIndex !== null && (
            <TabPanel outerTabValue={nestedTabIndex} index={nestedTabIndex}>
              {/* Content for the nested tab goes here */}
              {/* You can use tab.children to render nested content */}
              {child[nestedTabIndex].children?.map((nestedTab, nestedIndex) => (
                <div key={nestedIndex}>
                  {/* Render content for nested tab */}
                  {nestedTab.tabName}
                </div>
              ))}
            </TabPanel>
          )}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabsWidget;
