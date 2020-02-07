import React, { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  Grid,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

document.body.style.backgroundImage = `url(https://svgshare.com/i/HpZ.svg)`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const LoginAdmin = props => {
  // const [errors, setErrors] = useState({});

  const { handleLogin, httpError, checkAuth } = useContext(LoginContext);
  console.log(checkAuth());
  const [values, setValues] = useState({
    email: "",
    password: "",
    submitted: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container maxWidth="lg">
      <Box
        style={{ height: "90vh", position: "relative", zIndex: "10" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
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
          <Grid container justify="left" alignItems="left">
            <Grid container justify="center" alignItems="center">
              <img
                src="https://svgur.com/i/Gq4.svg"
                style={{ height: 35, marginRight: 15 }}
                alt="logo du projet"
              />
              <Typography
                variant="h4"
                style={{
                  marginBottom: 10,
                  marginTop: 5,
                  display: "flex",
                  fontWeight: "bold"
                }}
                align="center"
              >
                Creative Resume
              </Typography>
            </Grid>
          </Grid>
          {httpError.clientError && (
            <Typography
              className="shake-horizontal"
              style={{
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                color: "red"
              }}
            >
              Mot de passe ou identifiant incorrect
            </Typography>
          )}
          <TextField
            variant="outlined"
            label="Login"
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            fullWidth
            style={{
              marginTop: 20
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            value={values.password}
            type={values.showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            fullWidth
            style={{
              marginTop: 20
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            fullWidth
            style={{
              marginTop: 15,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#9130FF",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
              borderRadius: 8
            }}
            onClick={() =>
              handleLogin({ email: values.email, password: values.password })
            }
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default withRouter(LoginAdmin);
