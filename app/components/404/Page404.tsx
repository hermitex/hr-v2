import { Box, Typography } from '@mui/material';
import Image from 'next/image';
('../../redux/services/userAuthApi');

const Page404: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/assets/logo.svg"
            alt="Company Logo"
            width={200} // Adjust the width and height as needed
            height={93}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src="/assets/icons/404.png"
            alt="Company Logo"
            width={60} // Adjust the width and height as needed
            height={60}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '12px', padding: '15px', textAlign: 'center' }}>
            We are sorry. The page you requested cannot be found.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontSize: '12px', textAlign: 'center' }}>
            The url may be misspelt or the page you are looking for is no longer available.
            <br /> please use the url provided by Talantahrm
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Page404;
