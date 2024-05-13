'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization
interface Organization {
  organization: string;
}

const ChangePassword = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: false });

  useEffect(() => {
    organization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        Change Password
      </Typography>
    </Box>
  );
};

export default ChangePassword;
