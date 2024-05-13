import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const TopNav: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '2',
        background: 'white',
        height: '20%',
      }}
    >
      <Box>
        <Image
          src="/assets/logo.svg"
          alt="Company Logo"
          width={120} // Adjust the width and height as needed
          height={55}
        />
      </Box>
      <Box
        sx={{
          width: '20%',
          alignItems: 'space-around',
          justifyContent: 'space-around',
          display: 'flex',
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '12px', padding: '15px', textAlign: 'center' }}>
          Welcome.
        </Typography>
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '12px', padding: '15px', textAlign: 'center' }}>
          LOGIN HERE.
        </Typography>
      </Box>
    </Box>
  );
};

export default TopNav;
