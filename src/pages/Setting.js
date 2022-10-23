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
    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid item md={6}>
        <Paper>
          <Box sx={{ padding: 5 }}>
            <Typography variant="h3">Setting</Typography>
          </Box>
          <Box>
            
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
