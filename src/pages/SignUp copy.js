import * as React from "react";
import { useState } from "react";
// import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Routes, Route, useParams } from "react-router-dom";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signinUser } from "../reducers/authReducers";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        https://www.hostbees.me
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn({ name }) {
  let { unkid } = useParams();
  console.log(unkid);

  const [loginId, setLoginId] = useState("");
  const [pin, setpin] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    let newData = {
      unkid,
      loginId,
      pin,
    };

    dispatch(signinUser(newData));

    navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ color: "dodgerBlue" }}>
            HostBees
          </Typography>
          <Typography variant="body1" sx={{ color: "GrayText" }}>
            Web Hosting site
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="loginId"
              label="Username"
              name="loginId"
              autoComplete="loginId"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="loginId"
              label="Email"
              name="loginId"
              autoComplete="loginId"
              type="text"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="pin"
              label="password"
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setpin(e.target.value)}
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="pin"
              label="Confirm password"
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setpin(e.target.value)}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Signup
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link>   */}
                <Typography></Typography>
                <Link href="#" variant="body2">
                  Already have an account? Signin
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 7, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
