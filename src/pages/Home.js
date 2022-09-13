import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SearchIcon from "@mui/icons-material/Search";
import WebCard from "../componets/WebCard";
// import AddIcon from "@mui/icons-material/Add";

function Home() {
  return (
    <Box sx={{ marginY: 2 }}>
      <Container sx={{marginTop:4}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
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
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
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
                <Button sx={{ bgcolor: "navy" }}>
                  {" "}
                  <FormatListBulletedOutlinedIcon />{" "}
                </Button>
              </ButtonGroup>

              <Button
                variant="contained"
                sx={{ bgcolor: "navy" }}
                size="medium"
              >
                {/* <AddIcon/> */}
                Add New Project...
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{

                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-evenly",
                height:"100vh",
                flexWrap:"wrap"


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
  );
}

export default Home;
