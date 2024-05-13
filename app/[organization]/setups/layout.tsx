"use client";
import CircleProgressWidget from "@/app/components/widgets/CircleProgressWidget";
import { ORGANIZATION_SETUPS } from "@/app/constants/companySetups";
import sizes from "@/app/constants/sizes";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSetupCompleted = () => {
    return Math.random() < 0.5;
  };
  return (
    <Container maxWidth="xl">
      <Box component="main">
        <Paper sx={{ p: sizes.spacing.medium }}>
          <Box component="section">
            <Typography variant="h3" fontSize={sizes.font.large}>
              Company Setups
            </Typography>
          </Box>
          <Box sx={{ width: "fit-content" }}>
            <Typography variant="h5" fontSize={sizes.font.small}>
              Personalize your organization
            </Typography>

            <Grid
              container
              xs={12}
              md={6}
              sx={{
                border: "1px solid grey",
                boxShadow: 1,
                borderRadius: 1,
                p: 1,
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={4} sx={{ bgcolor: "" }}>
                <CircleProgressWidget
                  buttonBackgroundColor="#FF9800"
                  circleProgressWidgetProps={{
                    data: [
                      { value: 5, color: "#e0e0e0" },
                      { value: 20, color: "orange" },
                    ],
                    innerRadius: 35,
                    centerLabel: "20%",
                    size: { width: 200, height: 100 },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  bgcolor: "",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="h5" fontSize={sizes.font.small}>
                    Your organization setups are incomplete
                  </Typography>
                </Grid>
                {ORGANIZATION_SETUPS.map((setup) => (
                  <Grid
                    item
                    key={setup.tabName}
                    xs={6}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    {isSetupCompleted() ? (
                      <CheckCircleIcon
                        sx={{ color: "green", width: "0.8rem" }}
                      />
                    ) : (
                      <CancelIcon sx={{ color: "#FF9800", width: "0.8rem" }} />
                    )}
                    <Typography
                      variant="body1"
                      fontSize={sizes.font.small}
                      sx={{ marginLeft: 1 }}
                    >
                      {setup.tabName}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Box>
          {children}
        </Paper>
      </Box>
    </Container>
  );
}
