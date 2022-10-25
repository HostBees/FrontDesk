import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WebCard from "../componets/WebCard";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

export default function Setting() {
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", margin: 3 }}
    >
      <Grid item md={6}>
        <Paper>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h3">Setting</Typography>
          </Box>
          <hr />
          <Box>
            <Grid
              container
              sx={{
                disply: "flex",
                flexDirection: "row-reverse",
                // backgroundColor: "red",
              }}
            >
              <Grid item md={6}>
                <Box sx={{ padding: 5 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://robohash.org/leader"
                    sx={{ width: 200, height: 200 }}
                  />
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 5,
                    justifyContent: "space-evenly",
                    height: 300,
                  }}
                >
                  <TextField
                    // value={formik.values.zip}
                    // onChange={formik.handleChange}
                    // error={formik.touched.zip && Boolean(formik.errors.zip)}
                    // onBlur={formik.handleBlur}
                    // helperText={formik.touched.zip && formik.errors.zip}
                    // value="Darshan Mistry"
                    label="Usernme"
                    id="standard-size-normal"
                    // defaultValue="Normal"
                    variant="standard"
                  />
                  <TextField
                    // value={formik.values.zip}
                    // onChange={formik.handleChange}
                    // error={formik.touched.zip && Boolean(formik.errors.zip)}
                    // onBlur={formik.handleBlur}
                    // helperText={formik.touched.zip && formik.errors.zip}
                    // value="Darshan Mistry"
                    label="email"
                    id="standard-size-normal"
                    // defaultValue="Normal"
                    variant="standard"
                  />
                  <TextField
                    // value={formik.values.zip}
                    // onChange={formik.handleChange}
                    // error={formik.touched.zip && Boolean(formik.errors.zip)}
                    // onBlur={formik.handleBlur}
                    // helperText={formik.touched.zip && formik.errors.zip}
                    // value="Darshan Mistry"
                    label="Phone"
                    id="standard-size-normal"
                    // defaultValue="Normal"
                    variant="standard"
                  />

                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Button variant="contained" sx={{ marginRight: 3 }}>
                      Save
                    </Button>
                    <Button variant="contained">Reset</Button>
                  </Box>

                </Box>
              </Grid>
              
              
            </Grid>
          </Box>
       
        </Paper>
      </Grid>
    </Grid>
  );
}
