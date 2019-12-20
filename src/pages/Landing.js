import React, { useContext } from "react";
import { Box, Typography, Container, Button, Grid } from "@material-ui/core";
import ROUTE from "../Routes";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

export default props => {
  const { checkAuth } = useContext(LoginContext);
  return (
    <>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Box p={2} flexGrow={1} display="flex" style={{ marginLeft: 10 }}>
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
            <Link
              to={checkAuth() ? ROUTE.DASHBOARD : ROUTE.LOGIN}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                style={{ borderWidth: 2, borderColor: "black" }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 13,
                    borderColor: "black"
                  }}
                >
                  {checkAuth() ? "Go to your dashboard" : "Login"}
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box style={{ height: "100vh" }}>
              <Box
                style={{
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              >
                <Typography
                  variant="h3"
                  style={{
                    fontWeight: "bold",
                    marginBottom: 25,
                    color: "black"
                  }}
                >
                  Create wonderful resume easily !
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: 25, marginTop: 25 }}
                >
                  Creative Resume gives you the best online free editor for your
                  resume.
                  <br />
                  Create, Edit, and Add some fun to your resume just in few
                  clicks !
                </Typography>
                <Link
                  to={checkAuth() ? ROUTE.DASHBOARD : ROUTE.REGISTER}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#9130FF",
                      color: "white",
                      boxShadow: "none",
                      fontWeight: "bold"
                    }}
                  >
                    {checkAuth() ? (
                      <Typography style={{ fontWeight: "bold" }}>
                        <i className="uil uil-web-section" /> Go to your
                        dashboard
                      </Typography>
                    ) : (
                      <Typography style={{ fontWeight: "bold" }}>
                        <i className="uil uil-user-circle" /> Create a free
                        account
                      </Typography>
                    )}
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Box style={{ height: "100vh" }}>
              <Box
                style={{
                  position: "relative",
                  top: "50%",
                  left: "5%",
                  transform: "translate(-50%, -50%)",
                  padding: "2em"
                }}
              >
                <img
                  src="https://i.imgur.com/oqxOZEI.png"
                  style={{ height: 645 }}
                  alt="hello :=)"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5}>
            <Box style={{ height: "100vh" }}>
              <Box
                style={{
                  position: "relative",
                  top: "50%",
                  left: "-5%",
                  transform: "translate(-50%, -50%)",
                  padding: "2em"
                }}
              >
                <img
                  src="https://i.imgur.com/ytNup8N.png"
                  style={{ height: 645 }}
                  alt="hello :=)"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box style={{ height: "100vh" }}>
              <Box
                style={{
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(0%, 0%)"
                }}
              >
                <Typography
                  variant="h3"
                  style={{ fontWeight: "bold", marginBottom: 25 }}
                >
                  We built a powerful editor just for you
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{ marginBottom: 25, marginTop: 25 }}
                >
                  The editor is totally free and it will be forever !
                  <br />
                  If you want to use the editor for free, please create an
                  account.
                </Typography>
                <Link
                  to={checkAuth() ? ROUTE.DASHBOARD : ROUTE.REGISTER}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#77ccaa",
                      color: "white",
                      boxShadow: "none",
                      fontWeight: "bold"
                    }}
                  >
                    I want to try this !
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box align="center" style={{ backgroundColor: "#f9fafe", padding: 55 }}>
        <Typography variant="h4" style={{ fontWeight: "bold", marginTop: 10 }}>
          Ready to create your first resume ?
        </Typography>
        <Typography
          color="textSecondary"
          style={{ marginTop: 25, marginBottom: 25 }}
        >
          Great, first of all create an account so we can begin, Creative Resume
          is totally free to use.
        </Typography>
        <div>
          {!checkAuth() && (
            <Link to={ROUTE.REGISTER} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "none",
                  fontWeight: "bold"
                }}
              >
                Create an account for free
              </Button>
            </Link>
          )}

          <Link to={ROUTE.DASHBOARD} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#9f23dd",
                color: "white",
                boxShadow: "none",
                fontWeight: "bold",
                marginLeft: 15
              }}
            >
              Go to your dashboard
            </Button>
          </Link>
        </div>
        <Typography color="textSecondary" variant="caption" align="center">
          Team SRRL - Hackathon ESTIAM December 2019
        </Typography>
      </Box>
    </>
  );
};
