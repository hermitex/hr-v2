import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const Celebrations: React.FC = () => {
  return (
    <Box flex={1}>
      <Card sx={{ display: 'flex', padding: '2%' }}>
        <CardContent>
          <Typography>For My Action</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Celebrations;
