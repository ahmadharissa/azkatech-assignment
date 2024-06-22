import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ItemCard = ({ title, data }) => {
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card className="stat-card">
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="h4" component="div">
            {data}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemCard;
