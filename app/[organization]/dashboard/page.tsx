'use client';

import Box from '@mui/material/Box';
import { useEffect } from 'react';
//import { useSelector } from 'react-redux';
import Announcements from '@/app/components/Dashboard/Announcements';
import Celebrations from '@/app/components/Dashboard/Celebrations';
import ClockIn from '@/app/components/Dashboard/ClockIn';
import CompleteProfile from '@/app/components/Dashboard/CompleteProfile';
import FinishSetup from '@/app/components/Dashboard/FinishSetups';
import ForMyAction from '@/app/components/Dashboard/ForMyAction';
import LeaveBalances from '@/app/components/Dashboard/LeaveBalances';
import UpcomingEvents from '@/app/components/Dashboard/UpcomingEvents';
import { Grid } from '@mui/material';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';

//import { RootState } from '../../redux/store'; // Update this path

// Page for validating organization
interface Organization {
  organization: string;
}

const Dashboard = ({ params }: { params: Organization }) => {
  const { organization } = useOrganizationValidate(params, { islanding: false });

  // Access the organization data from the Redux store
  //const organizationData = useSelector((state: RootState) => state.organizationReducer);

  useEffect(() => {
    organization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box style={{ width: '100%' }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} justifyContent="space-between">
          <Grid container>
            <Grid item xs={12} md={6} p={1}>
              <CompleteProfile />
            </Grid>
            <Grid item xs={12} md={6} p={1}>
              <FinishSetup />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} justifyContent="space-between">
          <Grid container>
            <Grid item xs={12} md={4} p={1}>
              <ForMyAction />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container xs={12} justifyContent="space-between">
                <Grid item xs={12} justifyContent="space-between">
                  <Grid container xs={12} justifyContent="space-between">
                    <Grid item xs={12} md={4} justifyContent="space-between" p={1}>
                      <ClockIn />
                    </Grid>
                    <Grid item xs={12} md={4} justifyContent="space-between" p={1}>
                      <UpcomingEvents />
                    </Grid>
                    <Grid xs={12} md={4} justifyContent="space-between" p={1}>
                      <Announcements />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} justifyContent="space-between">
                  <Grid container xs={12} justifyContent="space-between">
                    <Grid item xs={12} md={6} justifyContent="space-between" p={1}>
                      <Celebrations />
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent="space-between" p={1}>
                      <UpcomingEvents />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} justifyContent="space-between" p={1}>
                  <LeaveBalances />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
