"use client";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#282c34"
      color="#61dafb"
    >
      <Box
        bgcolor="rgba(40, 44, 52, 0.7)" // Dark background color with alpha channel
        color="#61dafb" // Light text color
        padding={4}
        borderRadius={0.1}
        boxShadow={5}
        textAlign="center"
        zIndex={1}
      >
        <Typography variant="h3" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" paragraph>
          An unexpected error occurred. Please try again.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Error details: {error.message}
        </Typography>
        <Box marginTop={4}>
          <Button
            variant="outlined"
            color="warning"
            disableElevation
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
