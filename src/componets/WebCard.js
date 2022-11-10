import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ErrorIcon from "@mui/icons-material/Error";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from '@mui/material/Tooltip';

export default function WebCard({
  key,
  name,
  hostby,
  web_by,
  host_plateform,
  maintenace_mode,
}) {
  const navigate = useNavigate();

  console.log("web card key", key);
  return (
    <Card
      key={key}
      sx={{ display: "flex", width: 400, height: 200, marginY: 2 }}
      elevation={10}
      onClick={(e) => navigate("/CardView")}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* web icon */}
          <CardMedia
            component="img"
            sx={{ width: "80%", padding: 3, borderRadius: 25, height: 70 }}
            image="https://images.unsplash.com/photo-1664628631442-4f422ba3f94b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Live from space album cover"
          />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ display: "flex", flexDirection: "column", paddingTop: 1 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {hostby}
              </Typography>
              <br />

              <Link color="text.secondary">
                <Typography variant="subtitle1">www.{name}.me</Typography>
              </Link>
            </CardContent>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ padding: 3 }}>
            {/* Icon warning,error,running,monitering  webstatus*/}
            {maintenace_mode == 1 ? (
              <Tooltip title="Maintence">
              <ReportProblemIcon
                fontSize="large"
                
                sx={{
                  backgroundColor: "black",
                  color: "yellow",
                  borderRadius: 20,
                  padding: 1,
                }}
              
              />
              </Tooltip>
            ) : (
              <Tooltip title="Runing">
              <CheckIcon
                fontSize="large"
                sx={{ backgroundColor: "green", borderRadius: 20, padding: 1 }}
              />
              </Tooltip>
            
            )}

            {/* <CardMedia
              component="img"
              sx={{ width: 50, borderRadius: 25, height: 50 }}
              image="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-prohibition-warning-icon-image_2287798.jpg"
              alt="Live from space album cover"
            /> */}
          </Box>
        </Grid>

        <Box
          sx={{
            // backgroundColor: "red",
            marginLeft: 5,
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <GitHubIcon
            sx={{ marginRight: 1 }}
            fontSize="small"
            fontColor="#a19f9a"
          />
          <Typography color="text.secondary" variant="subtitle1">
            {host_plateform} updated 3 days ago
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
}
