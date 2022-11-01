import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { DropzoneArea } from "material-ui-dropzone";
import { TextField, Paper, Box, Typography, Button } from "@mui/material";
import RepoList from "../componets/RepoList";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";

function WebForm() {
  const [file, setFile] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      hostby: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter webapp name"),
      hostby: Yup.string().required("Please enter your name"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "",
              justifyContent: "space-evenly",
              height: "45%",
            }}
          >
            <TextField
              label="Website Name"
              name="name"
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="HostBy"
              name="hostby"
              type="text"
              id="hostby"
              value={formik.values.hostby}
              onChange={formik.handleChang}
              error={formik.touched.hostby && Boolean(formik.errors.hostby)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.hostby && formik.errors.hostby}
            />
            <Box>
              <Button sx={{ mt:1 }} type="submit" variant="contained">
                Submit
              </Button>
            </Box>
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
