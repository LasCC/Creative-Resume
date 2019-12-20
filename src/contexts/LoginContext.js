import React, { createContext, useState } from "react";
import jwtdecode from "jwt-decode";
import { withRouter } from "react-router-dom";
import http from "../services/httpService";
// import useLocalStorage from "../hooks/useLocalStorage";
import ROUTE from "../Routes";

export const LoginContext = createContext();

const LoginProvider = props => {
  const endpoint = "https://creative-cv.herokuapp.com"; // en PROD localhost:8080
  const [httpError, setHttpError] = useState({
    clientError: false,
    serverError: false
  });
  const [resume, setResume] = React.useState({
    resumee_list: []
  });
  const checkAuth = () => {
    console.log("checking...");

    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }
    console.log("auth ok !");

    try {
      const { exp, firstName, email, lastname } = jwtdecode(token);
      localStorage.setItem(
        "info",
        JSON.stringify({ firstName, lastname, email })
      );
      const now = new Date().getTime() / 1000;
      const dateExp = new Date(exp * 1000);
      const dateNow = new Date(now * 1000);

      const dayRelativeDifference =
        dateExp.getHours() * 60 +
        dateExp.getMinutes() -
        dateNow.getHours() * 60 -
        dateNow.getMinutes();
      //console.log("isexp", exp < now, dayRelativeDifference, "mn");
      if (exp < now) {
        //console.log("TOKEN expired !");
        handleLogout();
        return false;
      }
    } catch (ex) {
      //console.log(ex);
      return false;
    }

    return true;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    return props.history.push(ROUTE.HOME);
  };

  const handleLogin = async data => {
    console.log("login request ....", data);

    let res;
    try {
      res = await http.post(endpoint + "/auth/login", data);
      console.log(res);
    } catch (ex) {
      console.log("*****************", ex);
      console.log("ERR DATA*****************", ex.response);
      // if(ex.response)
      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
      console.log("expected : ", expectedError);

      setHttpError({
        serverError: !expectedError,
        clientError: expectedError
      });
      setTimeout(() => console.log(httpError), 5000);
      return;
    }

    const { token } = res.data;
    try {
      const tokendata = await jwtdecode(token);
      console.log(tokendata);
      localStorage.setItem("token", token);
      setHttpError({ serverError: false, clientError: false });
      return window.location.replace(ROUTE.DASHBOARD);
    } catch (ex) {
      console.log("invalid Token", ex);
      throw ex;
    }
  };

  const handleRegistration = async data => {
    //console.log("register request ...", data);
    let res;
    try {
      res = await http.post(endpoint + "/auth/register", data);
      console.log(res);
      return props.history.push(ROUTE.LOGIN);
    } catch (ex) {
      console.log(ex.response);

      const expectedError =
        ex.response && ex.response.status >= 400 && ex.response.status < 500;
      setHttpError({
        status: ex.response.status
      });
    }
  };

  const handleCvDeletion = id => {
    console.log(id);
    http
      .get(endpoint + "/curriculum/del_cv/" + id, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        localStorage.setItem("liste_cv", JSON.stringify(res.data.cv_list));
        const resumee_list = res.data.cv_list;

        setResume({ ...resume, resumee_list });
      })
      .catch(ex => console.log(ex));
  };
  //########### CV management methods ############
  const [editorState, setEditorState] = useState({
    title: "COLORFUL TEMPLATE",
    firstName: "Michel",
    lastName: "Platini",
    subHeader: "Etudiant en deuxième année chez ESTIAM",
    email: "mail@yourthing.com",
    phone: "+33 6 00 00 00 00",
    location: "Paris 75001 - France",
    jobTitle: "Your job title here",
    employee: "OLORUNTECH",
    dateJob: "Janvier 2019 - Mars 2020",
    locationJob: "Abidjan",
    wdyd: "You can create your content here and edit this.",
    jobTitleModal: "Your job title",
    employeeModal: "Company",
    dateJobModal: "Date of your current job",
    locationJobModal: "Location of your job",
    wdydModal: "You can create your content here and edit this.",
    degree: "Master",
    titleDegree: "Ingénieurie informatique ",
    locationDegree:
      "Éstiam - École supérieure des technologies de l'information ",
    dateDegree: "17 Janvier 2018 - 17 Janvier 2023",
    contentDegree: "You can create your content here and edit this.",
    degreeModal: "Your level of degree",
    titleDegreeModal: "Degree title",
    dateDegreeModal: "Date of your degree",
    locationDegreeModal: "Location of your degree",
    contentDegreeModal: "You can write your content here"
  });

  const handleCreation = data => {
    //create new cv , on envoie le titre ,
    // ajax call -> post vers /curriculum/new --> on recoit "cv_id": "5dfad7a9e2d13420a40d27e1"

    http
      .post(endpoint + "/curriculum/new", data, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        localStorage.setItem("cv", JSON.stringify(res.data));

        return props.history.push("/edit/" + res.data.cv_id);
      })
      .catch(ex => console.log(ex));
  };
  const fetchCvList = () => {
    // called after dashboard access
    //ajax call -> get_cv/<5dfad41b27a31808100da7a9>
    //
    http
      .get(endpoint + "/curriculum/fetch_cvs", {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data.cv_list);
        localStorage.setItem("liste_cv", JSON.stringify(res.data.cv_list));
        const resumee_list = res.data.cv_list;
        setResume({ ...resume, resumee_list });
      })
      .catch(ex => console.log(ex));
  };
  const fetchOneCv = id => {
    http
      .get(endpoint + "/curriculum/get_cv/" + id, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        setEditorState(res.data.cv.data);
      })
      .catch(ex => console.log(ex));
  };
  const saveOneCv = data => {
    console.log(data);
    http
      .post(endpoint + "/curriculum/save_cv", data, {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(res => {
        setEditorState(res.data.data.data);
        alert("Your work has been saved !");
      })
      .catch(ex => console.log(ex));
    // send the state of maker of js + id of the cv ( props.params)

    return;
  };

  return (
    <LoginContext.Provider
      value={{
        checkAuth,
        handleLogout,
        handleLogin,
        handleRegistration,
        handleCreation,
        fetchCvList,
        fetchOneCv,
        resume,
        setResume,
        httpError,
        handleCvDeletion,
        editorState,
        setEditorState,
        saveOneCv
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default withRouter(LoginProvider);
