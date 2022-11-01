import * as React from "react";
import { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { signinUser, signupUser } from "../reducers/authReducers";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { FormikConsumer, useFormik } from "formik";
import * as Yup from "yup";

//By Darshan
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ bottom: "100%" }}
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
  var { loading, error } = useSelector((state) => state.user);

  // const [loginId, setLoginId] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
  // const [email, setEmail] = useState("");
  var [auth, setAuth] = useState("signin");

  // formik

  const formik1 = useFormik({
    initialValues: {
      loginId: "",
      password: "",
      password2: "",
      email: "",
    },
    validationSchema: Yup.object({
      loginId: Yup.string().required("Please enter username"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /[a-zA-Z0-9]/,
          "Password can only contain  letters and number."
        ),
      password2: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      email: Yup.string().required("Please enter your Email."),
    }),

    onSubmit: (values) => {
      console.log(values);

      dispatch(
        signupUser({
          email: values.email,
          password: values.password,
          username: values.loginId,
        })
      );
    },
  });
  const formik2 = useFormik({
    initialValues: {
      loginId: "",
      password: "",
    },
    validationSchema: Yup.object({
      loginId: Yup.string().required("Please enter username"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /[a-zA-Z0-9]/,
          "Password can only contain  letters and number."
        ),
    }),

    onSubmit: (values) => {
      console.log(values);

      dispatch(
        signinUser({
          username: values.loginId,
          password: values.password,
        })
      );
    },
  });

  //redux

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (event, values) => {
  //   let newData = values;
  //   error = " ";
  //   if (auth == "signin") {
  //     dispatch(signinUser(newData));
  //   } else {
  //     console.log(newData);
  //     dispatch(signupUser(newData));
  //   }

  //   navigate("/");
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {error ? <Alert severity="error">{error}</Alert> : <></>}
        <Box
          component="form"
          onSubmit={
            auth == "signin" ? formik2.handleSubmit : formik1.handleSubmit
          }
          sx={{
            marginTop: 20,
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
                name="email"
                type="email"
                // value={email}
                value={formik1.values.email}
                onChange={formik1.handleChange}
                error={formik1.touched.email && Boolean(formik1.errors.email)}
                onBlur={formik1.handleBlur}
                helperText={formik1.touched.email && formik1.errors.email}
                // onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
            )}
            <TextField
              margin="normal"
              fullWidth
              id="loginId"
              name="loginId"
              label={auth == "signin" ? "Username/Email" : "Username"}
              value={
                auth == "signin"
                  ? formik2.values.loginId
                  : formik1.values.loginId
              }
              onChange={
                auth == "signin" ? formik2.handleChange : formik1.handleChange
              }
              error={
                auth == "signin"
                  ? formik2.touched.loginId && Boolean(formik2.errors.loginId)
                  : formik1.touched.loginId && Boolean(formik1.errors.loginId)
              }
              onBlur={
                auth == "signin" ? formik2.handleBlur : formik1.handleBlur
              }
              helperText={
                auth == "signin"
                  ? formik2.touched.loginId && formik2.errors.loginId
                  : formik1.touched.loginId && formik1.errors.loginId
              }
              type="text"
              // value={loginId}
              // onChange={(e) => setLoginId(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={
                auth == "signin"
                  ? formik2.values.password
                  : formik1.values.password
              }
              onChange={
                auth == "signin" ? formik2.handleChange : formik1.handleChange
              }
              error={
                auth == "signin"
                  ? formik2.touched.password && Boolean(formik2.errors.password)
                  : formik1.touched.password && Boolean(formik1.errors.password)
              }
              onBlur={
                auth == "signin" ? formik2.handleBlur : formik1.handleBlur
              }
              helperText={
                auth == "signin"
                  ? formik2.touched.password && formik2.errors.password
                  : formik1.touched.password && formik1.errors.password
              }
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            {auth == "signin" ? (
              <></>
            ) : (
              <TextField
                margin="normal"
                fullWidth
                name="password2"
                label="Confirm password"
                type="password"
                id="pin"
                value={formik1.values.password2}
                onChange={formik1.handleChange}
                error={
                  formik1.touched.password2 && Boolean(formik1.errors.password2)
                }
                onBlur={formik1.handleBlur}
                helperText={
                  formik1.touched.password2 && formik1.errors.password2
                }
                // value={password2}
                // onChange={(e) => setPassword2(e.target.value)}
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {auth == "signin" ? <>SignIn</> : <>SignUp</>}
            </Button>

            <Grid container>
              <Grid
                item
                xs
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  height: 80,
                }}
              >
                <Link
                  style={{ textDecoration: "none", marginY: 2 }}
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>

                {auth == "signin" ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={(e) => setAuth("signup")}
                    variant="body2"
                  >
                    Don't have an account? Sign Up
                  </Link>
                ) : (
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={(e) => setAuth("signin")}
                    variant="body2"
                  >
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
