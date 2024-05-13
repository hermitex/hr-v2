"use client";
import BusinessIcon from "@mui/icons-material/Business";
import {
  default as CalendarMonthIcon,
  default as CalendarMonthOutlinedIcon,
} from "@mui/icons-material/CalendarMonth";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SchoolIcon from "@mui/icons-material/School";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Badge, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import Image from "next/image";
import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import menu from "../constants/menu";
import { RootState } from "../redux/store";
import lightTheme from "../core/themes/light";
import darkTheme from "../core/themes/dark";
import { ThemeProvider } from "@emotion/react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const iconStyles = {
  color: "white",
  fontSize: "14px",
};
const icons = [
  <DashboardIcon style={iconStyles} key="1" />,
  <PersonAddAltIcon style={iconStyles} key="2" />,
  <ScheduleIcon style={iconStyles} key="3" />,
  <CalendarMonthOutlinedIcon style={iconStyles} key="4" />,
  <PeopleOutlineIcon style={iconStyles} key="5" />,
  <BusinessIcon style={iconStyles} key="6" />,
  <SettingsOutlinedIcon style={iconStyles} key="7" />,
  <ListAltIcon style={iconStyles} key="8" />,
  <CampaignIcon style={iconStyles} key="9" />,
  <CalendarMonthIcon style={iconStyles} key="10" />,
  <MenuBookIcon style={iconStyles} key="11" />,
  <SchoolIcon style={iconStyles} key="12" />,
];
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  const organizationData = useSelector(
    (state: RootState) => state.organizationReducer
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const logoUrlString = organizationData?.organization?.logoUrl;
  const pathName = usePathname();

  const selectedTheme = darkTheme;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isOrgPresent =
    pathName.split("/").join(",").replace("/", "").split(",").length === 2;

  return isOrgPresent ||
    pathName.includes("/login") ||
    pathName.includes("/register") ||
    pathName.includes("/changepassword") ||
    pathName.includes("/404") ? (
    <Box sx={{ display: "flex" }}>{children}</Box>
  ) : (
    // <ThemeProvider theme={selectedTheme}>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          variant="dense"
          sx={{
            bgcolor: "#fff",
            color: "#000",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="warning">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "8rem" }}>
            <Image
              height={65}
              width={130}
              alt="Logo"
              src="https://app.talantahrm.com/img/logo.cd0adf0d.svg"
              loading="lazy"
            />
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ mb: 1.5 }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            backgroundColor: "#424242",
            color: "white",
            height: "100%",
            marginTop: open ? "0" : "-15px",
          }}
        >
          <ListItem
            sx={{
              marginTop: "-25px",
              marginBottom: "12px",
              backgroundColor: "#383737",
              paddingTop: "0px",
              display: open ? "block" : "none",
            }}
          >
            <ListItemButton sx={{}}>
              {logoUrlString && (
                <Image
                  src={logoUrlString}
                  alt="Company Logo"
                  width={150}
                  height={30}
                  loading="eager"
                />
              )}
            </ListItemButton>
          </ListItem>
          {menu.map(
            ({ label, route }, index) =>
              route && (
                <Link
                  key={`${label}-${index}`}
                  className={`link ${
                    pathName ===
                    "/" + organizationData.organization?.username + route
                      ? "active"
                      : ""
                  }`}
                  href={"/" + organizationData.organization?.username + route}
                >
                  <ListItem disablePadding sx={{ marginTop: "-10px" }}>
                    <ListItemButton>
                      <ListItemIcon sx={{ marginRight: "-10px" }}>
                        {icons[index]}
                      </ListItemIcon>
                      <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                        <Typography sx={{ fontSize: "13px" }}>
                          {label}
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </Link>
              )
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "#eeeeee", height: "100vh" }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
    // </ThemeProvider>
  );
}
