import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  drawerPaper: {
    width: 240,
  },
  listItem: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const classes = useStyles();

  return (
    <Drawer
      open={isOpen}
      onClose={toggleSidebar}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <Link to="/total" className={classes.link} onClick={toggleSidebar}>
          <ListItem button className={classes.listItem}>
            <ListItemText primary="Total" />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link} onClick={toggleSidebar}>
          <ListItem button className={classes.listItem}>
            <ListItemText primary="Countries" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
