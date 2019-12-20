import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { LoginContext } from "../contexts/LoginContext.js";

document.body.style.backgroundImage = `url(https://svgur.com/i/GtL.svg)`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const LoginAdmin = props => {
  const { handleRegistration, httpError } = useContext(LoginContext);
  const country = require("../data/country.json");
  const education = require("../data/education.json");
  const [submitted, setSubmitted] = useState(false);
  const [showMe, setShowMe] = useState(true);
  const [showDiv, setShowDiv] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    education: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = () => {
    setShowDiv(true);
    if (showDiv) {
      console.log("registration ....");
      handleRegistration(values);
      console.log(values);
    }
  };

  const secondStepLoginDiv = (
    <>
      <TextField
        variant="outlined"
        label="Password"
        value={values.password} // value.age value.Fname value.Lname
        type={values.showPassword ? "text" : "password"}
        onChange={handleChange("password")}
        fullWidth
        required
        style={{
          marginTop: 20
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div style={{ display: "flex" }}>
        <TextField
          variant="outlined"
          label="First Name"
          value={values.firstName} // value.age value.Fname value.Lname
          onChange={handleChange("firstName")}
          fullWidth
          style={{
            marginTop: 20
          }}
        />
        <TextField
          required
          variant="outlined"
          label="Last Name"
          value={values.lastName} // value.age value.Fname value.Lname
          onChange={handleChange("lastName")}
          fullWidth
          style={{
            marginTop: 20,
            marginLeft: 15
          }}
        />
      </div>
      <form autoComplete="on" style={{ marginTop: 15 }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Select
            variant="outlined"
            value={values.location}
            onChange={handleChange("location")}
            inputProps={{
              name: "location",
              "aria-label": "Location"
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
      <form autoComplete="on" style={{ marginTop: 15 }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="education">Education</InputLabel>
          <Select
            variant="outlined"
            value={values.education}
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
          {httpError.status && (
            <Typography
              className="shake-horizontal"
              style={{
                fontWeight: "bold",
                marginTop: 10,
                color: "red"
              }}
            >
              Password must be at least 5 chars long
            </Typography>
          )}
        </FormControl>
      </form>
    </>
  );
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ height: "90vh" }}
      >
        <Box
          className="hoverCard"
          style={{
            padding: 35,
            boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
            borderRadius: 10,
            backgroundColor: "white"
          }}
        >
          <Grid container>
            <Grid align="center" style={{ padding: 15 }}>
              <Typography
                variant="h4"
                style={{ marginTop: 0, display: "flex", fontWeight: "bold" }}
              >
                <img
                  src="https://svgur.com/i/Gq4.svg"
                  style={{ height: 35, marginRight: 15 }}
                  alt="logo du projet"
                />
                Creative Resume
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography style={{ marginTop: 15 }}>
              Create an account to join the project.
            </Typography>
            <Grid container justify="center" alignItems="center" />
          </Grid>
          <TextField
            required
            variant="outlined"
            label="E-mail adress"
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            fullWidth
            style={{
              marginTop: 20
            }}
          />
          {showDiv && secondStepLoginDiv}
          <Button
            fullWidth
            style={{
              fontWeight: "bold",
              marginTop: 15,
              color: "white",
              backgroundColor: "#9130FF"
            }}
            onClick={handleSubmit}
          >
            Create an account
          </Button>

          {/* <Link style={{ textDecoration: "none" }} /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default withRouter(LoginAdmin);
