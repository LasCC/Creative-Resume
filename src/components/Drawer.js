import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Drawer,
  AppBar,
  List,
  Typography,
  ListItem,
  ListItemText,
  CssBaseline,
  Hidden,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  TextField
} from "@material-ui/core";
import ContentDashboard from "../content/ContentDashboard";
import Navbar from "../components/Navbar";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    border: 0,
    marginTop: 10
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(6)
  },
  toolbar: theme.mixins.toolbar
}));

export default props => {
  const [values, setValues] = useState({
    username: "",
    submitted: false
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Navbar />
      </AppBar>
      <Hidden only={["sm", "xs"]}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemText
                  primary="Dashboard"
                  style={{ fontWeight: "bold" }}
                />
                <i className="uil uil-dashboard" style={{ fontSize: 20 }} />
              </ListItem>
            </Link>

            <ListItem button onClick={handleClickOpen}>
              <ListItemText primary="Profile" style={{ fontWeight: "bold" }} />
              <i className="uil uil-user" style={{ fontSize: 20 }} />
            </ListItem>
            {/* === POPUP MODAL HERE === */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  Want to change your <u>username</u> ?
                </Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <TextField
                    value={values.username}
                    onChange={handleChange("username")}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    fullWidth
                  />
                  <Typography style={{ marginTop: 10 }}>
                    Your username will be changed after 1 or 2 minutes.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} style={{ color: "#7e0cf5" }}>
                  Cancel
                  <i className="uil uil-times" />
                </Button>
                <Button
                  onClick={handleClose}
                  style={{ color: "white", backgroundColor: "#7e0cf5" }}
                  autoFocus
                  variant="contained"
                >
                  Save
                  <i className="uil uil-check" />
                </Button>
              </DialogActions>
            </Dialog>
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItem button>
                <ListItemText
                  primary="Settings"
                  style={{ fontWeight: "bold" }}
                />
                <i className="uil uil-cog" style={{ fontSize: 20 }} />
              </ListItem>
            </Link>
            <Link to="/help" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemText primary="Help" style={{ fontWeight: "bold" }} />
                <i
                  className="uil uil-question-circle"
                  style={{ fontSize: 20 }}
                />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContentDashboard />
      </main>
    </div>
  );
};
