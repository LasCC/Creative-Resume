import React, { useState, useContext, useEffect } from "react";
import { Typography, Container } from "@material-ui/core";
import CardsResume from "../components/CardsResume";
import ProfileCard from "../components/ProfileCard";
import SettingsCard from "../components/SettingsCard";
import { LoginContext } from "../contexts/LoginContext";

export default props => {
  const { fetchCvList } = useContext(LoginContext);
  const { firstName, lastname, email } = JSON.parse(
    localStorage.getItem("info")
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        <u>Nice to see you</u>, {firstName} !
      </Typography>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        style={{ marginTop: 15, fontSize: 15 }}
      >
        Did you know that we are <u>free to use</u> and it will be always the
        case ? <br />
        If you want to support <u>us</u> please mail us at{" "}
        <u>creative-resume@outlook.com</u>
      </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: "bold", marginTop: 100, marginBottom: 15 }}
      >
        Resumes
      </Typography>
      {/* === CARDS === */}
      <CardsResume />
      {/* === Profile Card === */}
      <ProfileCard />
      {/* === Settings Card === */}
      <SettingsCard />
    </Container>
  );
};
