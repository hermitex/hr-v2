import { CardContent, CardHeader, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const ClockIn: React.FC = () => {
  return (
    <Box flex={1}>
      <Card sx={{ padding: '0' }}>
        <CardHeader subheader="Clock In" />
        <Divider />
        <CardContent>
          <Typography>Clock In</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ClockIn;
