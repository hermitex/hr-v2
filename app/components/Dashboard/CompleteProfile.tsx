import { CardContent, Grid, Typography } from '@mui/material';
import Button from '@mui/material-next/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';

const data = [
  { value: 5, color: '#e0e0e0' },
  { value: 20, color: 'orange' },
];

const size = {
  width: 200,
  height: 100,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 10,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const CompleteProfile: React.FC = () => {
  return (
    <Box flex={1}>
      <Card sx={{ display: 'flex', padding: '2%' }}>
        <CardContent>
          <Grid container xs={12}>
            <Grid item xs={6} sm={4}>
              <PieChart series={[{ data, innerRadius: 35 }]} {...size}>
                <PieCenterLabel>20%</PieCenterLabel>
              </PieChart>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography sx={{ fontSize: '12px' }}>Your profile is incomplete</Typography>
              <Typography sx={{ fontSize: '12px' }}>A complete profile is required to perform actions </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button sx={{ backgroundColor: 'orange' }} size="small" variant="filled">
                Complete Profile
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CompleteProfile;
