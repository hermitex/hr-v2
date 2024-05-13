'use client';

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization
import MiniDrawer from '../../components/utils/SideNav';
interface Organization {
  organization: string;
}

const OrganizationNotFound = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: false });

  useEffect(() => {
    organization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <MiniDrawer />
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
          TASKS
        </Typography>
      </Box>
    </Box>
  );
};

export default OrganizationNotFound;
