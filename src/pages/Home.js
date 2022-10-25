import React, { useState } from "react";
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

// import AddIcon from "@mui/icons-material/Add";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  let  [listView,setListView] =  useState(false)
  const naviagte = useNavigate();
  return (
    <>
      <Box sx={{ marginY: 2 }}>
        <Container sx={{ marginTop: 4 }}>
          <Paper sx={{ padding: 5 }} elevation={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Box>
                  <TextField
                    placeholder=" Search... "
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    InputProps={{
                      endAdornment: <SearchIcon />,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                  }}
                >
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                  >
                    <Button sx={{ bgcolor: "navy" }} onClick={e => setListView(false)}>
                      {" "}
                      <GridViewOutlinedIcon />
                    </Button>
                    <Button sx={{ bgcolor: "navy", marginRight: 2 }} onClick={e => setListView(true)}>
                      {" "}
                      <FormatListBulletedOutlinedIcon />{" "}
                    </Button>
                  </ButtonGroup>

                  <Button
                    variant="contained"
                    sx={{ bgcolor: "navy" }}
                    size="medium"
                    onClick={(e) => naviagte("/WebForm")}
                  >
                    {/* <AddIcon/> */}
                    Add New Project...
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <Grid container sx={{ marginY: 3 }}>
          <Grid item xs={12} md={12}>
          {listView ?         
            <Box 
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "70vh",
                flexWrap: "wrap",
              }}
            >
              <List
              
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem alignItems="flex-start"  onClick={e => naviagte('/CardView')}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1664628631442-4f422ba3f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Host Bees"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          www.HostBees.me
                        </Typography>
                      
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1664628631442-4f422ba3f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Host Bees"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          www.HostBees.me
                        </Typography>
                      
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1664628631442-4f422ba3f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Host Bees"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          www.HostBees.me
                        </Typography>
                      
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1664628631442-4f422ba3f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Host Bees"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          www.HostBees.me
                        </Typography>
                      
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {/* <Divider variant="inset" component="li" /> */}
             
              </List>
            </Box>: 
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: "70vh",
                flexWrap: "wrap",
              }}
            >
              <WebCard />
              <WebCard />
              <WebCard />
              <WebCard />
              <WebCard />
              <WebCard />
            </Box>
          }
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;

//list view
