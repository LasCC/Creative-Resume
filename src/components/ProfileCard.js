import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  TextField
} from "@material-ui/core";

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
  return (
    <>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginTop: 100, marginBottom: 10 }}
      >
        My profile
      </Typography>
      <Box
        className="hoverCard"
        style={{
          padding: 25,
          backgroundImage: `url(https://svgshare.com/i/HpZ.svg)`,
          backgroundSize: "cover",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          backgroundPosition: "bottom-right",
          backgroundRepeat: "no-repeat",
          borderRadius: 8
        }}
      >
        <Typography style={{ color: "black", fontWeight: "bold" }}>
          You can change all your accont data in the profile tab, or you can
          click the button bellow
        </Typography>
        <Button
          onClick={handleClickOpen}
          style={{
            color: "white",
            background: "black",
            marginTop: 10,
            fontWeight: "bold"
          }}
        >
          <i className="uil uil-user-circle" style={{ fontSize: 15 }} />
          Set up you profile account
        </Button>
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
      </Box>
    </>
  );
};
