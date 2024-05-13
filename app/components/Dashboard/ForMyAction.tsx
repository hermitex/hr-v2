import { CardContent, CardHeader, Divider, Grid } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Accordian from './AccordianSammary';

const ForMyAction: React.FC = () => {
  return (
    <Box flex={1}>
      <Card sx={{ padding: '0' }}>
        <CardHeader subheader="For my action" />
        <Divider />
        <CardContent>
          <Divider />
          <Grid container xs={12}>
            <Accordian />
            <Accordian />
            <Accordian />
            <Accordian />
            <Accordian />
            <Accordian />
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ForMyAction;
