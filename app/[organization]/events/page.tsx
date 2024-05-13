'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';

interface Organization {
  organization: string;
}

const Events = ({ params }: { params: Organization }) => {
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
          EVENTS
        </Typography>
      </Box>
    </Box>
  );
};

export default Events;
