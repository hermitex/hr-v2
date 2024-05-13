import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useLoginMutation } from '../../redux/services/userAuthApi';
import theme from '../../theme';
import { OrganizationProps, UserInput } from '../../types';
import { loginSchema } from '../../validations';

const Login: React.FC<OrganizationProps> = ({ organization: { organization } }) => {
  const [login, { isLoading, isSuccess, data, isError, error }] = useLoginMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();
  console.log(organization);
  console.log('trial');
  const formik = useFormik({
    initialValues: {
      UserName: '',
      Password: '',
    } as UserInput,
    validationSchema: loginSchema,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        await login(values);
        if (data?.StatusCode !== 200) {
          router.push(`/${organization}/dashboard`);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log(isSuccess, isLoading);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
        paddingLeft: 10,
        width: '100%',
        paddingRight: 10,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box className="flex" sx={{ display: 'flex', height: 80, marginLeft: -2, padding: 0 }}>
          <Image
            src="/assets/logo.svg"
            alt="Company Logo"
            width={130} // Adjust the width and height as needed
            height={53}
          />

          <Typography
            variant="h6"
            style={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: 'grey',
              marginTop: 10,
            }}
          >
            DataposIT Limited
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'grey',
              height: 43,
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            variant="h5"
            style={{
              height: 23,
            }}
          >
            Please Login to your account
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}></Grid>
        </Grid>
        {isLoading && <CircularProgress color="success" />}

        {isError && error && (
          <Alert variant="outlined" severity="error" sx={{ width: '100%' }}>
            {(error as { error: string }).error}
          </Alert>
        )}

        {data && data.StatusMessage && data.StatusCode !== 200 && (
          <Alert variant="outlined" severity="error">
            {data.StatusMessage}
          </Alert>
        )}

        {data && data.StatusMessage && data.StatusCode === 200 && (
          <Alert variant="outlined" severity="success">
            {data.StatusMessage}
          </Alert>
        )}

        <form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="UserName" style={{ fontSize: '10px' }}>
              Username
            </InputLabel>
            <OutlinedInput
              id="UserName"
              name="UserName"
              label="Username"
              autoComplete="username"
              value={formik.values.UserName}
              style={{ fontSize: '10px' }}
              onChange={formik.handleChange}
              error={formik.touched.UserName && Boolean(formik.errors.UserName)}
            />
            {formik.touched.UserName && formik.errors.UserName && (
              <Typography variant="caption" color="error">
                {formik.errors.UserName}
              </Typography>
            )}
          </FormControl>

          <FormControl fullWidth variant="outlined" margin="normal" style={{ padding: 'none' }}>
            <InputLabel htmlFor="Password" style={{ fontSize: '10px' }}>
              Password
            </InputLabel>
            <OutlinedInput
              id="Password"
              name="Password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              style={{ fontSize: '10px' }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={formik.touched.Password && Boolean(formik.errors.Password)}
            />
            {formik.touched.Password && formik.errors.Password && (
              <Typography variant="caption" color="error">
                {formik.errors.Password}
              </Typography>
            )}
          </FormControl>

          <Button
            variant="text"
            style={{
              color: 'grey',
              paddingBottom: '14px',
              textDecoration: 'underline',
            }}
            onClick={() => {
              // Handle the text button click event
            }}
          >
            <Typography variant="h5">Forgot Password?</Typography>
          </Button>

          <Button type="submit" style={{ backgroundColor: 'orange', color: 'white' }} fullWidth>
            <Typography variant="h4" style={{ color: 'white' }}>
              Login
            </Typography>
          </Button>
        </form>
      </ThemeProvider>
    </Box>
  );
};

export default Login;
