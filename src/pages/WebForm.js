import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { DropzoneArea } from "material-ui-dropzone";
import { TextField, Paper, Box, Typography } from "@mui/material";
import RepoList from "../componets/RepoList";
function WebForm() {
  const [file, setFile] = useState([]);

  console.log(file);
  return (
    <Grid container>
      <Grid item xs={12} md={6} sx={{ marginY: 5 }}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            height: "60vh",
            width: "80%",
            marginX: 2,
          }}
        >
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "40%",
            }}
          >
            <RepoList repoUserName="Darshanlk" />
          </Box>
          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              justifyContent: "space-evenly",
              height: "40%",
            }}
          >
            <TextField label="Website Name" />
            <TextField label="Web Desecription" />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} sx={{ marginY: 5 }}>
        <center>
          <Paper
            square
            elevation={3}
            sx={{ height: "100%", width: "80%", padding: 5 }}
          >
            <DropzoneArea onChange={(e) => setFile([...file, e])} />
          </Paper>
        </center>
      </Grid>
    </Grid>
  );
}

export default WebForm;
