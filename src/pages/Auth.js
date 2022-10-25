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
import { signinUser, signupUser } from "../reducers/authReducers";

//By Darshan
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

export default function Auth({ name }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("signin");

  //redux

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    let newData = {
      loginId,
      password,
      email,
    };

    if (auth == "signin") {
      dispatch(signinUser(newData));
    } else {
      dispatch(signupUser(newData));
    }

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
            Web Hosting plateform
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            {auth == "signin" ? (
              <></>
            ) : (
              <TextField
                margin="normal"
                fullWidth
                id="loginId"
                label="Email"
                name="loginId"
                autoComplete="loginId"
                type="text"
                // value={email}
                // onChange={(e) => setLoginId(e.target.value)}
                autoFocus
              />
            )}
            <TextField
              margin="normal"
              fullWidth
              id="loginId"
              label={auth=="signin"?"Username/Email":"Username"}
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
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {auth == "signin" ? (
              <></>
            ) : (
              <TextField
                margin="normal"
                fullWidth
                name="pin"
                label="Confirm password"
                type="password"
                id="pin"
                // value={pin}
                // onChange={(e) => setpin(e.target.value)}
                autoComplete="current-password"
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              {auth == "signin" ? <>SignIn</> : <>SignUp</>}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                <Typography></Typography>
                {auth == "signin" ? (
                  <Link onClick={(e) => setAuth("signup")} variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                ) : (
                  <Link onClick={(e) => setAuth("signin")} variant="body2">
                    Already have an account? Sign In
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 7, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
