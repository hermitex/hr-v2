'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization

interface Organization {
  organization: string;
}

const TimeOff = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: false });

  useEffect(() => {
    organization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
          }}
        >
          TIME OFF
        </Typography>
      </Box>
    </Box>
  );
};

export default TimeOff;
