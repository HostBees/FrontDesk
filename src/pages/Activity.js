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
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Activity() {
  let message = [
    {
      messageTitle: "Host Notekaro",
      messageBody: "pick NoteKaro repo from github 20 min ago.",
    },
    {
      messageTitle: "Configure Domain",
      messageBody: "Select Domain notekaro.hostbees.app",
    },
    {
      messageTitle: "Host Portfolio",
      messageBody: "pick repo from github 20 min ago.",
    },
    {
      messageTitle: "Host Prince Game",
      messageBody: "pick repo from github 20 min ago.",
    },
  ];
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        sx={{
          displayy: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h3" sx={{ marginY: 3, padding: 4 }}>
              Activity
            </Typography>
          </Paper>
          <Card sx={{ padding: 3, marginTop: 2 }}>
            <Stack spacing={2}>
              {message.map((message) => {
                return (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{message.messageTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{message.messageBody}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Activity;
