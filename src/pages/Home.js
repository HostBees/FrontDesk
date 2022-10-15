import React from "react";

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

// import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function Home() {
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
                    <Button sx={{ bgcolor: "navy" }}>
                      {" "}
                      <GridViewOutlinedIcon />
                    </Button>
                    <Button sx={{ bgcolor: "navy", marginRight: 2 }}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
