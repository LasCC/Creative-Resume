import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Divider
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

export default props => {
  const { firstName, lastname, email, education: educ } = JSON.parse(
    localStorage.getItem("info")
  );
  const country = require("../data/country.json");
  const education = require("../data/education.json");
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstname: firstName,
    lastname: lastname,
    location: "DISPLAY LOCATION HERE",
    education: educ,
    submitted: false
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        <u>Settings</u> of the app
      </Typography>
      <Box
        className="hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 65
        }}
      >
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          <i className="uil uil-moon" />
          Darkmode for your beautiful eyes
        </Typography>
        <Button
          style={{ marginTop: 10 }}
          // onClick={() => {
          //   // darkmode.toggle();
          // }}
        >
          Coming Soon
        </Button>
      </Box>
      <Box
        className="hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 65
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          <i className="uil uil-database" />
          Personal data
        </Typography>
        <div style={{ display: "flex" }}>
          <TextField
            label="First Name"
            variant="outlined"
            value={values.firstname}
            onChange={handleChange("firstname")}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            onChange={handleChange("lastname")}
            value={values.lastname}
            style={{ marginLeft: 15 }}
          />
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <form autoComplete="on">
            <FormControl variant="outlined">
              <InputLabel ref={inputLabel} htmlFor="education">
                Education
              </InputLabel>
              <Select
                style={{
                  width: 345
                }}
                variant="outlined"
                value={values.education}
                labelWidth={labelWidth}
                onChange={handleChange("education")}
                inputProps={{
                  name: "education",
                  "aria-label": "Education"
                }}
              >
                {education.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
          <form autoComplete="on" style={{ marginLeft: 15 }}>
            <FormControl variant="outlined">
              <InputLabel ref={inputLabel} htmlFor="location">
                Location
              </InputLabel>
              <Select
                style={{
                  width: 345
                }}
                variant="outlined"
                value={values.location}
                labelWidth={labelWidth}
                onChange={handleChange("location")}
                inputProps={{
                  name: "location",
                  "aria-label": "Country"
                }}
              >
                {country.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </div>
        <Box>
          <Button
            onClick={() => alert("faire la logic côté back/context")}
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              marginTop: 15
            }}
          >
            Save changes <SaveIcon style={{ marginLeft: 10 }} />
          </Button>
        </Box>
      </Box>
      <Box
        className="hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 65
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          <i className="uil uil-user-circle" />
          Account Settings
        </Typography>
        <Typography color="textSecondary" variant="caption">
          For added security, the settings below can only be changed immediately
          after signing in.
        </Typography>
        {/* List */}
        <Box
          display="flex"
          style={{ marginTop: 20, fontWeight: "500", padding: 15 }}
        >
          <Box flexGrow={1}>
            <i className="uil uil-envelope" />
            Account name
          </Box>
          <Box>{email}</Box>
        </Box>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          style={{ marginTop: 20, fontWeight: "500", padding: 15 }}
        >
          <Box flexGrow={1}>
            <i className="uil uil-key-skeleton" />
            Password
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
              boxShadow: "none"
            }}
          >
            Change password
          </Button>
        </Box>
        <Divider />
        <Box
          display="flex"
          alignItems="center"
          style={{
            marginTop: 20,
            fontWeight: "500",
            padding: 15,
            marginBottom: 10
          }}
        >
          <Box flexGrow={1}>
            <i className="uil uil-trash-alt" />
            Delete your account
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f44336",
              color: "white",
              boxShadow: "none"
            }}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
