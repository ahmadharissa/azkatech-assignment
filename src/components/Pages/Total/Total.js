// src/components/CountryStats.js
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, IconButton } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../../Redux/Country/countryAction";
import Sidebar from "../../common/Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import "./Total.css";
import ItemCard from "./ItemCard";

const Total = () => {
  const { loading, country } = useSelector((state) => state.CountryReducer);
  const dispatch = useDispatch();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const populationData = country
    .map((country) => ({
      name: country.name.common,
      population: country.population,
    }))
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

  const totalCountries = country.length;
  const totalPopulation = country.reduce(
    (acc, curr) => acc + curr.population,
    0
  );

  const totalArea = country.reduce((acc, curr) => acc + (curr.area || 0), 0);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <IconButton onClick={toggleSidebar} className="menu-button">
        <MenuIcon />
      </IconButton>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {loading ? (
        <Typography variant="h5" component="div">
          Loading...
        </Typography>
      ) : (
        <div className="dashboard">
          <Grid container spacing={3} className="stats-cards">
            <ItemCard title="Total Countries" data={totalCountries} />
            <ItemCard
              title="Total Population"
              data={totalPopulation.toLocaleString()}
            />
            <ItemCard
              title="Total Area (sq km)"
              data={totalArea.toLocaleString()}
            />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Top 10 Most Populous Countries
                  </Typography>
                  <ResponsiveContainer height={350} className={"chart"}>
                    <BarChart
                      data={populationData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 40,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="population" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Total;
