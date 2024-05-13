'use client';

//import Image from 'next/image';
import { Box, Container, Grid, Typography } from '@mui/material';

import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import Login from '../../components/Login/Login';
import useOrganizationValidate from '../../hooks/useOrganizationValidate';
// Page for validating organization
interface Organization {
  organization: string;
}

const OrganizationNotFound = ({ params }: { params: Organization }) => {
  console.log(params);
  const { organization } = useOrganizationValidate(params, { islanding: true });

  useEffect(() => {
    organization();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={0}
          md={8}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Container className="login-left">
            <Box
              display="flex"
              flexDirection="column"
              minHeight="90vh"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Carousel sx={{ width: '100%' }} autoPlay interval={2000}>
                <Typography
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Streamlining HR, Streamlining business
                </Typography>

                <Typography
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Unlocking the full potential of the workforce
                </Typography>

                <Typography
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Empowering employees, evaluating the business
                </Typography>

                <Typography
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Simplifying HR simplifying life
                </Typography>
              </Carousel>
            </Box>
            <Box
              style={{
                height: 43,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white',
                  height: 43,
                }}
              >
                © Copyright 2023.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'orange',
                  height: 43,
                }}
              >
                Talanta HR.
              </Typography>
              <Typography
                variant="h6"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white',
                  height: 43,
                }}
              >
                All Rights Reserved
              </Typography>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={4}>
          <Login organization={params} />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrganizationNotFound;
