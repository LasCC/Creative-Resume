import React from "react";
import { Typography, Box, Divider, Button } from "@material-ui/core";

const { email } = JSON.parse(localStorage.getItem("info"));

export default props => {
  return (
    <>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginTop: 100, marginBottom: 10 }}
      >
        Settings
      </Typography>
      <Box
        className="hoverCard"
        style={{
          padding: 25,
          backgroundColor: "#FEFEFEFE",
          boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
          borderRadius: 8
        }}
      >
        <Typography variant="body1" style={{ fontWeight: 600 }}>
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
    </>
  );
};
