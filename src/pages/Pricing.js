import React from "react";
import {
  Paper,
  Typography,
  Stack,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";

function Pricing() {
  return (
    <Box>
      <Grid
        container
        sx={{
          displayy: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height:600
        }}
      >
        <Grid item xs={12} md={8}>
          <Paper sx={{ margin: 5, padding: 5 }}>
            <Typography variant="h3">Pricing</Typography>
          </Paper>
          <Paper sx={{ margin: 5, padding: 5 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="h6">For New User</Typography>
              <br></br>
              <Typography variant="body2">
                Hello New User,
                <br></br>
                First two web hosting is free,<br/>
                then after you have to pay some
                buck for it!.<br/>
               30₹  for each website
              <b> OR </b>
              we put advertisement on your website.

              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Pricing;
