import { createTheme } from '@mui/material';

const theme = createTheme();

// font sizes
theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};

theme.typography.h2 = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};

theme.typography.h3 = {
  fontSize: '0.9rem',
  '@media (min-width: 600px)': {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
};

theme.typography.h4 = {
  fontWeight: 'normal',
  padding: '5px',
  fontSize: '0.7rem',
  '@media (min-width: 600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.7rem',
  },
};

theme.typography.h5 = {
  color: 'grey',
  fontWeight: 'normal',
  fontSize: '0.6rem',
  '@media (min-width: 600px)': {
    fontSize: '0.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.6rem',
  },
};

theme.typography.subtitle1 = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};
theme.typography.subtitle2 = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};
theme.typography.body1 = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};
theme.typography.body2 = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};
theme.typography.button = {
  fontSize: '0.2rem',
  '@media (min-width: 600px)': {
    fontSize: '0.05rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.2rem',
  },
};

export default theme;
