import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  TextField,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import Container from "@mui/material/Container";

function CardView({
  webName = "HostBees",
  webBy = "hostBees Team...",
  craftWith = "Github",
  gitRepo = "hostbees@github",
}) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              margin: 3,
              padding: 5,

              // bgcolor:"red"
            }}
          >
            <Grid container>
              <Grid item md={6} xs={12}>
                <Typography variant="h3">
                  <b>{webName}</b>
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "flex-end",
                    // justifyContent: "space-evenly",

                    marginY: 1,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "navy", marginX: 3 }}
                  >
                    Visit
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: "navy" }}>
                    View Git Repository
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ margin: 3, padding: 5 }} elevation={5}>
            <Card elevation={10}>
              <Grid container xs={12}>
                <Grid md={5} xs={12}>
                  <Link href="https://www.hostbees.me/">
                    <CardMedia
                      component="img"
                      sx={{ width: "100%", height: "100%" }}
                      image="https://images.pexels.com/photos/7335660/pexels-photo-7335660.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Live from space album cover"
                    />
                  </Link>
                </Grid>
                <Grid md={6} xs={12}>
                  <Box sx={{ marginX: 3, padding: 1 }}>
                    <Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Deployment
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          hostBess31r03bcjqnij1orj1i143oqkrojol2kkpfqwfbjdnfk.cinidckmed
                        </Typography>
                      </Box>
                      <br></br>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Domains
                        </Typography>
                        <Link href="https://www.hostbees.me/">
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                          >
                            www.hostbees.me
                          </Typography>
                        </Link>
                      </Box>
                      <br></br>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Status
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary">
                          Ready
                        </Typography>
                      </Box>
                      <br></br>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Created
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary">
                          20 days Ago <b>{craftWith}</b>
                        </Typography>
                      </Box>
                      <br></br>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>
                          Last Update
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          No changes in <b>Main branch</b> of <b>{gitRepo}</b>
                        </Typography>
                      </Box>
                    </Box>
                    {/* <Typography variant="h6" fontWeight={600}>
                      Project By
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                     {webBy}
                    </Typography> */}
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardView;
