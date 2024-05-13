'use client';

import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h5">passwordResetConfirmation Page</Typography>
    </Box>
  );
};

export default OrganizationNotFound;
