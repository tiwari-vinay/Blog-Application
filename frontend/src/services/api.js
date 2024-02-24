import axios from "axios";
import { API_RESPONSE_MESSAGES, API_SERVICE_URLS } from "../contants/config.js";

const URL = `http:localhost:8000`;
const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  //if you are displaying any loader then you have to stop the loader as soon as you get any res or err
  (res) => processResponse(res),
  (err) => Promise.reject(processError(err))
);

//generally its considered to be a good practice to follow a proper response and error format. So that there is uniformity in the response of api calls
// incase of success call
// {isSuccess = true, data = Object}
//incase of failure : {isFailure : true, status : String , msg: String, code:int}
const processResponse = (res) => {
  if (res.status === 200) return { isSuccess: true, data: res?.data };
  else return { isFailure: true, msg: res?.msg, code: res?.code };
};

//{isFailure : true, status : String , msg: String, code:int}
const processError = (err) => {
  //request made but server responded with a status code other than 200
  if (err.response) {
    return {
      isError: true,
      msg: API_RESPONSE_MESSAGES.responseFailure.message,
      code: err.response.status,
    };
  }
  //request made but no response received
  else if (err.request) {
    return {
      isError: true,
      msg: API_RESPONSE_MESSAGES.requestFailure.message,
      code: err.response.status,
    };
  }
  // request could not be made, might be due to some frontend issue while making request
  else {
    return {
      isError: true,
      msg: API_RESPONSE_MESSAGES.networkError.message,
      code: "",
    };
  }
};

const API = {};
for (const [key, value] of Object.entries(API_SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: (progressEvent) => {
        let percentageComplete = Math.round(progressEvent.loaded* 100)/progressEvent.total;
        showUploadProgress(percentageComplete);
      },
      onDownloadProgress: (progressEvent) => {
        let percentageComplete = Math.round(progressEvent.loaded * 100)/progressEvent.total
        showDownloadProgress(percentageComplete);
      },
      
    });
  };
}


export default API;