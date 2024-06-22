import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FcRefresh } from "react-icons/fc";

import "./Country.css";

import Sidebar from "../../common/Sidebar/Sidebar";

import { getCountries } from "../../../Redux/Country/countryAction";

const Country = () => {
  const dispatch = useDispatch();

  const { loading, country } = useSelector((state) => state.CountryReducer);
  const [records, setRecords] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (country) {
      const formattedRecords = country.map((data) => ({
        id: data.cca3,
        name: data.name ? data.name.official : "",
        flags: data.flags.svg,
        timezones: data.timezones.join(", "),
      }));
      setRecords(formattedRecords);
    }
  }, [country]);

  const columns = [
    {
      field: "flags",
      headerName: "Flags",
      flex: 1,
      sortable: true,
      renderCell: (params) => (
        <img src={params.value} alt="flag" className="country-flag" />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 3,
      sortable: true,
    },
    {
      field: "timezones",
      headerName: "Timezones",
      flex: 3,
      sortable: true,
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleRefresh = () => {
    dispatch(getCountries());
  };

  return (
    <div>
      <IconButton onClick={toggleSidebar} className="menu-button">
        <MenuIcon />
      </IconButton>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <h1 style={{ textAlign: "center" }}>Country</h1>
      <Card className="carddd">
        <CardBody>
          <CardTitle tag="h5" style={{ textAlign: "center" }}>
            <button onClick={handleRefresh}>
              <FcRefresh />
            </button>
          </CardTitle>
          <DataGrid
            className="table"
            rows={records}
            columns={columns}
            loading={loading}
            components={{ Toolbar: GridToolbar }}
            checkboxSelection={false}
            density="comfortable"
            pageSize={25}
            rowsPerPageOptions={[25, 50, 100]}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Country;
