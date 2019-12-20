import React from "react";
import {
  Box,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Container
} from "@material-ui/core";
import { Link } from "react-scroll";
// import UseAnimations from "react-useanimations";

export default props => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" style={{ fontWeight: "bold", marginBottom: 60 }}>
        <u>Help</u> Center
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3} lg={3} sm={12}>
          <Box
            className="hoverCard"
            style={{
              borderRadius: 10,
              boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
              color: "Black",
              padding: 25,
              marginTop: 5,
              backgroundColor: "white"
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 15
              }}
            >
              Find a Bug?
            </Typography>
            <Typography color="textSecondary">
              Is something not working as it should ?
            </Typography>
            <Link
              activeClass="active"
              to="toScroll"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#7e0cf5",
                  color: "white",
                  boxShadow: "none",
                  marginTop: 15,
                  fontWeight: "bold"
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
          <Box
            className="hoverCard"
            style={{
              borderRadius: 10,
              boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
              color: "Black",
              padding: 25,
              marginTop: 15,
              backgroundColor: "white"
            }}
          >
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 15
              }}
            >
              Need more help ?
            </Typography>
            <Typography color="textSecondary">
              Did you find something wrong on the app ?
            </Typography>

            <Button
              variant="contained"
              fullWidth
              onClick={handleClickOpen}
              style={{
                backgroundColor: "#7e0cf5",
                color: "white",
                boxShadow: "none",
                marginTop: 15,
                fontWeight: "bold"
              }}
            >
              Contact us
            </Button>

            <Box onClick={handleClickOpen} align="center" />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Box fullWidth>
                <Typography
                  variant="h5"
                  style={{ fontWeight: "bold", padding: 25 }}
                >
                  Did you find a <u>bug</u> on the app ?
                </Typography>
                <DialogContent>
                  <Typography
                    style={{ marginBottom: 15 }}
                    color="textSecondary"
                  >
                    Please enter your message here.
                  </Typography>
                  <DialogContentText id="alert-dialog-description">
                    <TextField
                      id="outlined-basic"
                      label="Message"
                      multiline
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} style={{ color: "#7e0cf5" }}>
                    Cancel
                    <i className="uil uil-times" />
                  </Button>
                  <Button
                    style={{ color: "white", backgroundColor: "#7e0cf5" }}
                    autoFocus
                    variant="contained"
                  >
                    Send
                    <i className="uil uil-check" />
                  </Button>
                </DialogActions>
              </Box>
            </Dialog>
          </Box>
        </Grid>
        <Grid item xs={12} md={9} lg={9} sm={12}>
          <Box
            className="hoverCard"
            style={{
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255,0)",
              boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
              color: "black",
              padding: 25,
              marginTop: 5
            }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: 15 }}
            >
              What do I have to do to make sure my resume prints/saves
              correctly?
            </Typography>
            <Typography>
              The instructions are a little different for every device and
              browser. You must use the <strong>'Print to PDF'</strong> option
              in your browser. If you're using Google Chrome, when the print
              window pops up, click the button labeled <strong>'Change'</strong>{" "}
              under <strong>'Destination'</strong> on the left hand side.
              <br />
              <br />
              Select Save as PDF. In order for your resume to look correct after
              saving or printing, you must also change some settings in the
              print window before finishing. Find and disable Headers & Footers,
              and also enable background graphics.
              <br />
              <br />
              If you are unable to figure out these settings, the easiest thing
              to do would be to Google{" "}
              <strong>'How to print to PDF on YOUR browser'. </strong>
              Fill in the browser you're using.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        className="hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 55
        }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          Can I download my resume as a .doc file?
        </Typography>
        <Typography>
          Unfortunately, no. Not at this time, at least. The only option is
          <strong> PDF</strong>.
          <br /> I know how useful a .doc file would be, and I'm trying to find
          a solution.
        </Typography>
      </Box>
      <Box
        className="toScroll hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 55
        }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          What do I do if I find a bug?
        </Typography>
        <Typography>
          If something isn't working or something doesn't look right, please let
          me know by emailing us at{" "}
          <u style={{ fontWeight: "bold" }}>CreativeResume@outlook.com</u>.
        </Typography>
      </Box>
      <Box
        className="hoverCard"
        style={{
          borderRadius: 10,
          backgroundColor: "rgba(255,255,255,0)",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          color: "black",
          padding: 25,
          marginTop: 55
        }}
      >
        <Typography
          variant="h5"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          Thank you for using CreativeResume !
        </Typography>
        <Typography>
          If you want to donate, there is my paypal :{" "}
          <u style={{ fontWeight: "bold" }}>CreativeResume@outlook.com</u>
        </Typography>
      </Box>
    </Container>
  );
};
