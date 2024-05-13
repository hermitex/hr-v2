import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import MenuIcon from '@mui/icons-material/Menu';

import AnnouncementIcon from '@mui/icons-material/Announcement';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BarChartIcon from '@mui/icons-material/BarChart';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import * as React from 'react';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  background: 'white',
  justifyContent: 'flex-end',
}));
const iconStyles = {
  color: 'white',
  fontSize: '16px', // Adjust the font size to control the icon size
  // Add some margin to separate the icon from text
};

// const routes = [
//   '/dashboard',
//   '/recruitment',
//   '/time-attendance',
//   '/time-off',
//   '/employees',
//   '/company',
//   '/setups',
//   '/this-organization',
//   '/announcements',
//   '/events',
//   '/reports',
//   '/training',
// ];

const icons = [
  <DashboardIcon style={iconStyles} key="1" />,
  <PeopleAltIcon style={iconStyles} key="2" />,
  <ScheduleIcon style={iconStyles} key="3" />,
  <BeachAccessIcon style={iconStyles} key="4" />,
  <SupervisedUserCircleIcon style={iconStyles} key="5" />,
  <BusinessIcon style={iconStyles} key="6" />,
  <ApartmentIcon style={iconStyles} key="7" />,
  <AnnouncementIcon style={iconStyles} key="9" />,
  <EventIcon style={iconStyles} key="9" />,
  <BarChartIcon style={iconStyles} key="10" />,
  <MenuBookIcon style={iconStyles} key="11" />,
];
export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* header icons here */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ width: '100%' }}>
            <Image
              src="/assets/logo.svg"
              alt="Company Logo"
              width={130} // Adjust the width and height as needed
              height={53}
            />
          </Box>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ backgroundColor: '#424242', color: 'white', height: '100%' }}>
          <ListItem sx={{ marginTop: '-10px', marginBottom: '12px', backgroundColor: '#212121', paddingTop: '-10px' }}>
            <ListItemButton>
              <Image
                src="/assets/logo.svg"
                alt="Company Logo"
                width={120} // Adjust the width and height as needed
                height={43}
              />
            </ListItemButton>
          </ListItem>
          {[
            'Dashboard',
            'Recruitment',
            'Time & Attendance',
            'Time Off',
            'Employees',
            'Company',
            'Setups',
            'This Organization',
            'Announcements',
            'Events',
            'Reports',
            'Training',
          ].map((text, index) => (
            <ListItem key={`${text}-${index}`} disablePadding sx={{ marginTop: '-10px' }}>
              <ListItemButton>
                <ListItemIcon sx={{ marginRight: '-10px' }}>{icons[index]}</ListItemIcon>
                <ListItemText>
                  <Typography sx={{ fontSize: 12 }}>{text}</Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
