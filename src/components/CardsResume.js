import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
  TextField,
  Tooltip
} from "@material-ui/core";
import UseAnimations from "react-useanimations";
import Tilt from "react-parallax-tilt";
import { withRouter } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
const moment = require("moment");
moment().format();

const Cardresume = props => {
  const randomUrl = `https://avatars.dicebear.com/v2/human/${Math.random()}.svg?options%5Bmood%5D%5B%5D=happy`;
  const [open, setOpen] = React.useState(false);
  const { handleCreation, fetchCvList, resume, handleCvDeletion } = useContext(
    LoginContext
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = e => {
    setCv_title(e.target.value);
  };
  const creationRequest = () => {
    handleClose();
    handleCreation({ title: cv_title });
  };

  const [cv_title, setCv_title] = useState("Your first project");
  useEffect(() => {
    fetchCvList();
    console.log("tetstest", resume);
  }, []);
  // const [resume, setResume] = React.useState({
  //   resumee_list: [],
  //   newClient: "",
  //   nbresumee_list: 0
  // });

  const handleDelete = id => {
    handleCvDeletion(id);
    // console.log(id);
    // let { resumee_list } = resume; // copie de resume.resumee.list
    // resumee_list = resumee_list.filter(cv => cv.id !== id); // on filtre chaque cv , si son id est identique a l'id recu on le vire
    // setResume({ ...resume, resumee_list }); // on reecris le state avec la new liste filtré
  };

  const handleEdit = id => {
    console.log(id);
    console.log(props);
    props.history.push("/edit/" + id);
  };

  const cards = resume.resumee_list.map(resume => (
    <Tilt
      key={resume.id}
      perspective={2000}
      tiltReverse="true"
      gyroscope="true"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Box
        style={{
          marginRight: 15,
          width: 180,
          backgroundImage: `url(https://svgshare.com/i/HpZ.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
          borderRadius: 5,
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)"
        }}
      >
        <Box display="flex" justifyContent="flex-end" style={{ height: 150 }} />
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            marginLeft: 15,
            marginRight: 10,
            marginBottom: 20,
            transform: "translateZ(20px)"
          }}
          onClick={() => handleEdit(resume.id)}
        >
          Edit
        </Button>
        <Button
          style={{
            backgroundColor: "#FF0E9C",
            color: "white",
            fontWeight: "bold",
            marginBottom: 20,
            transform: "translateZ(20px)"
          }}
          onClick={() => handleDelete(resume.id)}
        >
          Delete
        </Button>
        <Typography
          style={{
            color: "black",
            fontWeight: "700",
            marginLeft: 15,
            transform: "translateZ(20px)"
          }}
        >
          {resume.title}
        </Typography>

        <Typography
          style={{
            fontSize: 14,
            marginLeft: 15,
            color: "black",
            transform: "translateZ(20px)"
          }}
        >
          {moment().format("LLL")}
        </Typography>
      </Box>
    </Tilt>
  ));

  return (
    <Grid container spacing={4}>
      <Grid item style={{ display: "flex" }}>
        {cards}
        <Box
          className="hoverCard"
          style={{
            padding: 15,
            marginRight: 15,
            backgroundColor: "rgba(255,255,255,0)",
            boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
            borderRadius: 10,
            width: 180
          }}
        >
          <Box
            onClick={handleClickOpen}
            align="center"
            style={{
              position: "relative",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <UseAnimations animationKey="plusToX" />
            <Typography variant="caption" color="textSecondary">
              New resume
            </Typography>
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Create your <u>resume</u>
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <TextField
                  id="outlined-basic"
                  label="Name of the project"
                  value={cv_title}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <Typography style={{ marginTop: 10 }}>
                  You can edit, and other shit you know.
                </Typography>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", color: "black", marginTop: 25 }}
                >
                  All of the <u>template</u> that we gave you : = )
                </Typography>
                <Typography style={{ marginTop: 10 }}>
                  We don't have a lot of template right now sorry : = (
                </Typography>
                <Box
                  className="hoverAvatar"
                  style={{
                    display: "flex",
                    marginTop: 10,
                    padding: 10
                  }}
                >
                  <Tooltip title="Colorfull template">
                    <img
                      src={randomUrl}
                      alt="firstTemplate"
                      style={{
                        height: 50,
                        width: 50,
                        marginRight: 10,
                        borderRadius: 50,
                        border: "2px solid #7e0cf5",
                        cursor: "pointer"
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="To be created">
                    <img
                      src={randomUrl}
                      alt="firstTemplate"
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        border: "2px solid #ff4975",
                        cursor: "pointer"
                      }}
                    />
                  </Tooltip>
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: "#7e0cf5" }}>
                Cancel
                <i className="uil uil-times" />
              </Button>
              <Button
                onClick={creationRequest}
                style={{ color: "white", backgroundColor: "#7e0cf5" }}
                autoFocus
                variant="contained"
              >
                Create
                <i className="uil uil-check" />
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withRouter(Cardresume);
