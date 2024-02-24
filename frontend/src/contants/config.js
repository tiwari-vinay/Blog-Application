export const API_RESPONSE_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully fetched",
  },
  responseFailure: {
    titile: "Error",
    message:
      "An error occured while fetching response from server, please try again later",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "Network error, unable to connect to server",
  },
};


export const API_SERVICE_URLS = {
    userSignup:{url:"/signup", method:"POST"},

}