import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const jobs = [
  { id: 1, company: "Squarespace", role: "Web Designer", location: "New York", type: "Freelance", image: "https://source.unsplash.com/600x400/?office" },
  { id: 2, company: "Airbnb", role: "Senior UX Developer", location: "New York", type: "Full-time", image: "https://source.unsplash.com/600x400/?tech" },
  { id: 3, company: "Shopify", role: "Art Director", location: "Toronto", type: "Part-time", image: "https://source.unsplash.com/600x400/?startup" }
];

const JobList = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 5 }}>
      {jobs.map((job) => (
        <Grid item xs={12} sm={4} key={job.id}>
          <Card>
            <CardMedia component="img" height="140" image={job.image} alt={job.company} />
            <CardContent>
              <Typography variant="h6">{job.role}</Typography>
              <Typography variant="subtitle2">{job.company} - {job.location}</Typography>
              <Chip label={job.type} color={job.type === "Full-time" ? "success" : job.type === "Freelance" ? "error" : "primary"} sx={{ mt: 1 }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobList;