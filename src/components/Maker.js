import React, { useEffect, useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import InputColor from "react-input-color";
import {
  Grid,
  Box,
  List,
  ListItem,
  Typography,
  Container,
  ListItemIcon,
  Collapse,
  ListItemText,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PeopleIcon from "@material-ui/icons/People";
import SaveIcon from "@material-ui/icons/Save";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import EditIcon from "@material-ui/icons/Edit";
import PaletteIcon from "@material-ui/icons/Palette";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DoneIcon from "@material-ui/icons/Done";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import makePdf from "../services/makePDF";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import ROUTE from "../Routes";

export default props => {
  const [initial, setInitial] = useState("#0026ff");
  // ======= ALL OF THE STATES =======
  const { editorState, setEditorState, fetchOneCv, saveOneCv } = useContext(
    LoginContext
  );
  useEffect(() => fetchOneCv(props.match.params.id), []);
  const handleChange = name => event => {
    setEditorState({ ...editorState, [name]: event.target.value });
  };

  // OPEN THINGS
  const [contactOpen, setContactOpen] = React.useState(false);
  const [contentOpen, setContentOpen] = React.useState(false);
  const [customizationOpen, setCustomizationOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [downloadOpen, setDownloadOpen] = React.useState(false);
  const [openExp, setOpenExp] = React.useState(false);
  const [openDeg, setOpenDeg] = React.useState(false);
  const handleSave = () => {
    const { id } = props.match.params;
    const data = { data_cv: editorState, cv_id: id };
    saveOneCv(data);
    return;
  };
  const handleRedirect = () => {
    return props.history.push(ROUTE.DASHBOARD);
  };
  const handleModalExperience = () => {
    setOpenExp(true);
  };
  const handleCloseExperience = () => {
    setOpenExp(false);
  };
  const handleDegreeModal = () => {
    setOpenDeg(true);
  };
  const handleCloseDegreeModal = () => {
    setOpenDeg(false);
  };

  const handleContact = () => {
    setContactOpen(!contactOpen);
  };
  const handleContent = () => {
    setContentOpen(!contentOpen);
  };
  const handleCustomization = () => {
    setCustomizationOpen(!customizationOpen);
  };
  const handleHelp = () => {
    setHelpOpen(!helpOpen);
  };
  const handleDownload = () => {
    setDownloadOpen(!downloadOpen);
  };

  const [showExperienceDiv, setShowExperienceDiv] = React.useState(false);
  const [showDegreeDiv, setShowDegreeDiv] = React.useState(false);

  const makeExpericeDiv = (
    <div style={{ marginTop: 15 }}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        {editorState.jobTitleModal} - {editorState.employeeModal}
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="caption">{editorState.dateJobModal}</Typography>
        <Typography variant="caption" style={{ marginLeft: 10 }}>
          <u style={{ textDecorationColor: "black" }}>
            {editorState.locationJobModal}
          </u>
        </Typography>
      </div>
      <Typography style={{ fontSize: 12 }}>{editorState.wdydModal}</Typography>
    </div>
  );

  const makeDegreeDiv = (
    <div style={{ marginTop: 15 }}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        {editorState.degreeModal} - {editorState.titleDegreeModal}
      </Typography>
      <div style={{ display: "flex" }}>
        <Typography variant="caption">{editorState.dateDegreeModal}</Typography>
        <Typography variant="caption" style={{ marginLeft: 10 }}>
          <u style={{ textDecorationColor: "black" }}>
            {editorState.locationDegreeModal}
          </u>
        </Typography>
      </div>
      <Typography style={{ fontSize: 12 }}>
        {editorState.contentDegreeModal}
      </Typography>
    </div>
  );

  return (
    <Container maxWidth="lg">
      <Box display="flex" alignItems="center" style={{ marginBottom: 25 }}>
        <Box p={2} flexGrow={1} display="flex">
          <img
            src="https://svgur.com/i/Gq4.svg"
            style={{ height: 35, marginRight: 15 }}
            alt="logo Creative Resume"
          />
          <Typography
            variant="h6"
            noWrap
            style={{ color: "black", fontWeight: "bold" }}
          >
            Creative <u>Resume</u>
          </Typography>
        </Box>
        <Box
          p={2}
          display={{
            xs: "none",
            md: "block",
            lg: "block",
            xl: "block",
            sm: "none"
          }}
          style={{ marginRight: 10, display: "flex" }}
          alignItems="center"
        >
          <Button
            variant="outlined"
            style={{ borderWidth: 2, borderColor: "black" }}
            onClick={handleRedirect}
          >
            <Typography
              style={{
                color: "black",
                fontSize: 13,
                fontWeight: "bold",
                borderColor: "black"
              }}
            >
              Go to your dashboard
            </Typography>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} lg={3} md={3}>
          <Box>
            <List>
              <ListItem button onClick={handleContact}>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Contact information" />
                {contactOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={contactOpen} timeout="auto" unmountOnExit>
                <Box style={{ padding: 25, backgroundColor: "#fefefefe" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Contact information
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 13, marginBottom: 15 }}
                  >
                    You can change and edit your resume here
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Title"
                    value={editorState.title}
                    onChange={handleChange("title")}
                  />
                  <TextField
                    variant="outlined"
                    label="First Name"
                    value={editorState.firstName}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("firstName")}
                  />
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    value={editorState.lastName}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("lastName")}
                  />
                  <TextField
                    variant="outlined"
                    label="Sub Header"
                    value={editorState.subHeader}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("subHeader")}
                  />
                  <TextField
                    variant="outlined"
                    label="Email address"
                    value={editorState.email}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("email")}
                  />
                  <TextField
                    variant="outlined"
                    label="Phone number"
                    value={editorState.phone}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("phone")}
                  />
                  <TextField
                    variant="outlined"
                    label="Location"
                    value={editorState.location}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("location")}
                  />
                </Box>
              </Collapse>

              {/* end first */}

              <ListItem button onClick={handleContent}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Content" />
                {contentOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={contentOpen} timeout="auto" unmountOnExit>
                <Box style={{ padding: 25, backgroundColor: "#fefefefe" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Content of your resume
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 13, marginBottom: 15 }}
                  >
                    You can change and edit your resume here
                  </Typography>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    <u>Education</u> mode :
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Job title"
                    value={editorState.jobTitle}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("jobTitle")}
                  />
                  <TextField
                    variant="outlined"
                    label="Company"
                    value={editorState.employee}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("employee")}
                  />
                  <TextField
                    variant="outlined"
                    label="Date of your job"
                    value={editorState.dateJob}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("dateJob")}
                  />
                  <TextField
                    variant="outlined"
                    label="Location of your job"
                    value={editorState.locationJob}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("locationJob")}
                  />
                  <TextField
                    variant="outlined"
                    multiline
                    label="What did you do ?"
                    value={editorState.wdyd}
                    style={{ marginTop: 15, width: 230 }}
                    onChange={handleChange("wdyd")}
                  />
                  <Button
                    onClick={handleModalExperience}
                    fullWidth
                    style={{
                      backgroundColor: "#7e0cf5",
                      color: "white",
                      fontWeight: "bold",
                      marginTop: 15
                    }}
                  >
                    Add experience <PlusOneIcon style={{ marginLeft: 10 }} />
                  </Button>
                  <Dialog
                    open={openExp}
                    onClose={handleCloseExperience}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        Add new experience to your <u>resume</u>
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <div style={{ display: "flex" }}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          label="Job title"
                          value={editorState.jobTitleModal}
                          style={{ marginTop: 15, marginRight: 10 }}
                          onChange={handleChange("jobTitleModal")}
                        />
                        <TextField
                          variant="outlined"
                          label="Job title"
                          fullWidth
                          value={editorState.employeeModal}
                          style={{ marginTop: 15 }}
                          onChange={handleChange("employeeModal")}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <TextField
                          variant="outlined"
                          label="Job title"
                          fullWidth
                          value={editorState.dateJobModal}
                          style={{ marginTop: 15, marginRight: 10 }}
                          onChange={handleChange("dateJobModal")}
                        />
                        <TextField
                          variant="outlined"
                          fullWidth
                          label="Location of your job"
                          value={editorState.locationJobModal}
                          style={{ marginTop: 15 }}
                          onChange={handleChange("locationJobModal")}
                        />
                      </div>
                      <TextField
                        variant="outlined"
                        multiline
                        fullWidth
                        label="What did you do ?"
                        value={editorState.wdydModal}
                        style={{ marginTop: 15 }}
                        onChange={handleChange("wdydModal")}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseExperience}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        Done <DoneIcon style={{ marginLeft: 8 }} />
                      </Button>
                      <Button
                        onClick={() => setShowExperienceDiv(true)}
                        autoFocus
                        style={{
                          backgroundColor: "#7e0cf5",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: 10
                        }}
                      >
                        Add <PlaylistAddIcon style={{ marginLeft: 8 }} />
                      </Button>
                    </DialogActions>
                  </Dialog>

                  {/* Degree mode */}
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", marginTop: 25 }}
                  >
                    <u>Degree</u> mode :
                  </Typography>
                  <TextField
                    variant="outlined"
                    label="Your degree"
                    value={editorState.degree}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("degree")}
                  />
                  <TextField
                    variant="outlined"
                    label="Degree title"
                    value={editorState.titleDegree}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("titleDegree")}
                  />
                  <TextField
                    variant="outlined"
                    label="Date of your degree"
                    value={editorState.dateDegree}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("dateDegree")}
                  />
                  <TextField
                    variant="outlined"
                    label="Location of your school"
                    value={editorState.locationDegree}
                    style={{ marginTop: 15 }}
                    onChange={handleChange("locationDegree")}
                  />
                  <TextField
                    variant="outlined"
                    multiline
                    label="Content"
                    value={editorState.contentDegree}
                    style={{ marginTop: 15, width: 230 }}
                    onChange={handleChange("contentDegree")}
                  />
                  <Button
                    fullWidth
                    onClick={handleDegreeModal}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: 15,
                      fontWeight: "bold"
                    }}
                  >
                    Add more degree
                    <PlusOneIcon style={{ marginLeft: 10 }} />
                  </Button>
                  <Dialog
                    open={openDeg}
                    onClose={handleCloseDegreeModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        Add more degree to your <u>resume</u>
                      </Typography>
                    </DialogTitle>
                    <DialogContent>
                      <div style={{ display: "flex" }}>
                        <TextField
                          variant="outlined"
                          label="Your degree"
                          value={editorState.degreeModal}
                          style={{ marginTop: 15, marginRight: 10 }}
                          onChange={handleChange("degreeModal")}
                        />
                        <TextField
                          variant="outlined"
                          label="Degree title"
                          value={editorState.titleDegreeModal}
                          style={{ marginTop: 15 }}
                          onChange={handleChange("titleDegreeModal")}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <TextField
                          variant="outlined"
                          label="Date of your degree"
                          value={editorState.dateDegreeModal}
                          style={{ marginTop: 15, marginRight: 10 }}
                          onChange={handleChange("dateDegreeModal")}
                        />
                        <TextField
                          variant="outlined"
                          label="Location of your school"
                          value={editorState.locationDegreeModal}
                          style={{ marginTop: 15 }}
                          onChange={handleChange("locationDegreeModal")}
                        />
                      </div>
                      <TextField
                        variant="outlined"
                        multiline
                        fullWidth
                        label="Content"
                        value={editorState.contentDegreeModal}
                        style={{ marginTop: 15 }}
                        onChange={handleChange("contentDegreeModal")}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseDegreeModal}
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          fontWeight: "bold"
                        }}
                      >
                        Done <DoneIcon style={{ marginLeft: 8 }} />
                      </Button>
                      <Button
                        onClick={() => setShowDegreeDiv(true)}
                        autoFocus
                        style={{
                          backgroundColor: "#7e0cf5",
                          color: "white",
                          fontWeight: "bold",
                          marginRight: 10
                        }}
                      >
                        Add <PlaylistAddIcon style={{ marginLeft: 8 }} />
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </Collapse>

              {/* end second */}
              <ListItem button onClick={handleCustomization}>
                <ListItemIcon>
                  <PaletteIcon />
                </ListItemIcon>
                <ListItemText primary="Customization" />
                {customizationOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={customizationOpen} timeout="auto" unmountOnExit>
                <Box style={{ padding: 25, backgroundColor: "#fefefefe" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Customize your resume
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 13, marginBottom: 15 }}
                  >
                    You can edit, make it fancy on your eyes
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#f53b57";
                        document.querySelector(".experienceColor").style.color =
                          "#f53b57";
                        document.querySelector(".degreeColor").style.color =
                          "#f53b57";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#f53b57";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#f53b57"
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#3c40c6";
                        document.querySelector(".experienceColor").style.color =
                          "#3c40c6";
                        document.querySelector(".degreeColor").style.color =
                          "#3c40c6";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#3c40c6";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#3c40c6",
                        marginLeft: 9
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#0fbcf9";
                        document.querySelector(".experienceColor").style.color =
                          "#0fbcf9";
                        document.querySelector(".degreeColor").style.color =
                          "#0fbcf9";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#0fbcf9";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#0fbcf9",
                        marginLeft: 9
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#00d8d6";
                        document.querySelector(".experienceColor").style.color =
                          "#00d8d6";
                        document.querySelector(".degreeColor").style.color =
                          "#00d8d6";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#00d8d6";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#00d8d6",
                        marginLeft: 9
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#05c46b";
                        document.querySelector(".experienceColor").style.color =
                          "#05c46b";
                        document.querySelector(".degreeColor").style.color =
                          "#05c46b";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#05c46b";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#05c46b",
                        marginLeft: 9
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#ffa801";
                        document.querySelector(".experienceColor").style.color =
                          "#ffa801";
                        document.querySelector(".degreeColor").style.color =
                          "#ffa801";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#ffa801";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#ffa801",
                        marginLeft: 9
                      }}
                    />
                    <br />
                  </Box>
                  <Box style={{ display: "flex", marginTop: 10 }}>
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#ffd32a";
                        document.querySelector(".experienceColor").style.color =
                          "#ffd32a";
                        document.querySelector(".degreeColor").style.color =
                          "#ffd32a";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#ffd32a";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#ffd32a"
                      }}
                    />
                    <span
                      onClick={() => {
                        document.querySelector(".lastNameColor").style.color =
                          "#ff3f34";
                        document.querySelector(".experienceColor").style.color =
                          "#ff3f34";
                        document.querySelector(".degreeColor").style.color =
                          "#ff3f34";
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = "#ff3f34";
                      }}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        backgroundColor: "#ff3f34",
                        marginLeft: 9
                      }}
                    />
                    <InputColor
                      initialHexColor={initial}
                      style={{
                        height: 25,
                        width: 25,
                        borderRadius: 25,
                        cursor: "pointer",
                        marginLeft: 9
                      }}
                      onChange={setColor => {
                        document.querySelector(".lastNameColor").style.color =
                          setColor.hex;
                        document.querySelector(".experienceColor").style.color =
                          setColor.hex;
                        document.querySelector(".degreeColor").style.color =
                          setColor.hex;
                        document.querySelector(
                          ".coloredBackground"
                        ).style.backgroundColor = setColor.hex;
                      }}
                    />
                  </Box>
                </Box>
              </Collapse>

              {/* help thing */}
              <ListItem button onClick={handleHelp}>
                <ListItemIcon>
                  <HelpOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Help" />
                {helpOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={helpOpen} timeout="auto" unmountOnExit>
                <Box style={{ padding: 25, backgroundColor: "#fefefefe" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Do you have some questions ?
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 13, marginBottom: 15, marginTop: 10 }}
                  >
                    Don't worry we can help you, you just need to go to the help
                    tab.
                  </Typography>
                  <Button
                    onClick={() => window.location.replace("/help")}
                    variant="contained"
                    fullWidth
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: 15,
                      marginBottom: 15,
                      fontWeight: "bold",
                      boxShadow: "none"
                    }}
                  >
                    Go to the help page
                    <ContactSupportIcon style={{ marginLeft: 10 }} />
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    style={{
                      backgroundColor: "#7e0cf5",
                      color: "white",
                      fontWeight: "bold",
                      boxShadow: "none"
                    }}
                  >
                    Contact us <ContactMailIcon style={{ marginLeft: 10 }} />
                  </Button>
                </Box>
              </Collapse>

              {/* Download thing */}
              <ListItem button onClick={handleDownload}>
                <ListItemIcon>
                  <SaveIcon />
                </ListItemIcon>
                <ListItemText primary="Download" />
                {downloadOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={downloadOpen} timeout="auto" unmountOnExit>
                <Box style={{ padding: 25, backgroundColor: "#fefefefe" }}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Download your resume, good job dude !
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: 13, marginBottom: 15, marginTop: 10 }}
                  >
                    Don't worry you can save your work and come here whenever
                    you want
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => makePdf()}
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      marginTop: 15,
                      marginBottom: 15,
                      fontWeight: "bold",
                      boxShadow: "none"
                    }}
                  >
                    Download your resume
                    <SaveAltIcon style={{ marginLeft: 10 }} />
                  </Button>
                  <Button
                    fullWidth
                    onClick={handleSave}
                    variant="contained"
                    style={{
                      backgroundColor: "#fbdff0",
                      color: "black",
                      fontWeight: "bold",
                      boxShadow: "none"
                    }}
                  >
                    Save your work
                    <ScheduleIcon style={{ marginLeft: 10 }} />
                  </Button>
                </Box>
              </Collapse>
            </List>
          </Box>
        </Grid>

        {/* Grid resume don't forget to put a special id */}
        <Grid item xs={12} sm={12} lg={8} md={8} id="content_pdf">
          <Box
            className="hoverCard"
            id="makePdf"
            style={{
              backgroundColor: "#fefefefe",
              boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
              width: "8.27in",
              maxWidth: "8.27in",
              minHeight: "11.69in",
              // height: "100vh",
              padding: 35
            }}
          >
            <Typography
              variant="h5"
              className="coloredBackground"
              style={{
                fontWeight: "bold",
                color: "white",
                backgroundColor: "orange",
                width: "auto",
                padding: 25
              }}
            >
              {editorState.title}
            </Typography>
            <div style={{ display: "flex", marginTop: 25 }}>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 35,
                  marginBottom: 0,
                  marginTop: 0
                }}
              >
                {editorState.firstName}
              </p>
              <p
                className="lastNameColor"
                style={{
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: "orange",
                  fontSize: 35,
                  marginTop: 0,
                  marginBottom: 0
                }}
              >
                {editorState.lastName}
              </p>
            </div>
            <Typography variant="body1" style={{ fontWeight: "500" }}>
              {editorState.subHeader}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography
                variant="caption"
                color="textSecondary"
                style={{ fontWeight: "bold" }}
              >
                {editorState.email}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                style={{ fontWeight: "bold", marginLeft: 10 }}
              >
                {editorState.phone}
              </Typography>
              <Typography
                variant="caption"
                color="textSecondary"
                style={{ fontWeight: "bold", marginLeft: 10 }}
              >
                {editorState.location}
              </Typography>
            </div>

            {/* ==== Experience thing ==== */}
            <p
              className="experienceColor"
              style={{
                fontWeight: "bold",
                color: "orange",
                marginTop: 55,
                fontSize: 20,
                padding: 0,
                marginBottom: 0
              }}
            >
              Expérience
            </p>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {editorState.jobTitle} - {editorState.employee}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="caption">{editorState.dateJob}</Typography>
              <Typography variant="caption" style={{ marginLeft: 10 }}>
                <u style={{ textDecorationColor: "black" }}>
                  {editorState.locationJob}
                </u>
              </Typography>
            </div>
            <Typography style={{ fontSize: 12 }}>{editorState.wdyd}</Typography>
            {showExperienceDiv && makeExpericeDiv}

            {/* ==== Degree thing ==== */}
            <p
              className="degreeColor"
              style={{
                fontWeight: "bold",
                color: "orange",
                marginTop: 55,
                fontSize: 20,
                marginBottom: 0,
                padding: 0
              }}
            >
              Education
            </p>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              {editorState.degree} - {editorState.titleDegree}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="caption">
                {editorState.dateDegree}
              </Typography>
              <Typography variant="caption" style={{ marginLeft: 10 }}>
                <u style={{ textDecorationColor: "black" }}>
                  {editorState.locationDegree}
                </u>
              </Typography>
            </div>
            <Typography style={{ fontSize: 12 }}>
              {editorState.contentDegree}
            </Typography>
            {showDegreeDiv && makeDegreeDiv}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
