import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function WebCard({ webStatus }) {
  return (
    <Card sx={{ display: "flex",width: 400, height: 200 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* web icon */}
          <CardMedia
            component="img"
            sx={{ width: 50, padding: 3, borderRadius: 25, height: 50 }}
            image="https://images.unsplash.com/photo-1662820407543-681e4cfb1a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
            alt="Live from space album cover"
          />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 1 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                HostBees(H3B2s)
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                HostBees Team
              </Typography>
              <br />

              <Typography>www.HostBees.me</Typography>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ padding: 3 }}>
            {/* Icon warning,error,running,monitering  webstatus*/}
            <CardMedia
              component="img"
              sx={{ width: 50, borderRadius: 25, height: 50 }}
              image="https://images.unsplash.com/photo-1606331068321-77ce461591c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Live from space album cover"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ paddingLeft: 3, paddingBottom: 1 }}>
            updated via Github 3 days ago!
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
