import { CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

const UpcomingEvents: React.FC = () => {
  return (
    <Box flex={1}>
      <Card sx={{ display: 'flex', padding: '2%' }}>
        <CardContent>
          <Typography> Upcoming Events</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default UpcomingEvents;
