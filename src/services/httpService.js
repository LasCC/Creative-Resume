import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (expectedError) {
    //console.log("Expected Client Error", error);
    // alert("BAD LOGIN !");
  }
  if (!expectedError) {
    //console.log("Unexpected error : Logging The Error", error);
    // alert("An unexpected Error occurred !");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
