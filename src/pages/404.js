import React from "react";
import { Box, Typography, Button, Container } from "@material-ui/core";

document.body.style.backgroundColor = "#fff1cf";

export default props => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={1}
        m={1}
        css={{ height: "90vh" }}
      >
        <Box p={1} align="center">
          <img
            src="https://i.imgur.com/hkRuanu.png"
            alt="404image"
            style={{ width: 350 }}
          />
          <Box p={1}>
            <Typography
              variant="h5"
              style={{ color: "black", fontWeight: "bold" }}
            >
              This Page is <u>Not Real</u>
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
            >
              <br />
              The imposing figure with the trenchcoat shows you the two
              polaroids. One appears to show the Loch Ness monster herself in
              the middle of a stretch of dark water. The other shows a sasquatch
              picking it’s way through a dark forest. You look closer. The
              animal shapes are drawn on with ink. “This isn’t real!” You scream
              and throw the polaroids to the floor, sobbing.
            </Typography>
            <Button
              onClick={() => window.location.replace("/dashboard")}
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#7e0cf5",
                marginTop: 15
              }}
            >
              Return to the battlefield
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
