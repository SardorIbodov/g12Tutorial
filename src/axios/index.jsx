import React from "react";
import Axios from "./axios";
import axios from "axios";
export const AxiosApi = () => {
  axios.interceptors.request.use((request) => {
    console.log("So'rov jo'natilyapti...");
    return request;
  });
	axios.interceptors.response.use((response) => {
    console.log("So'rov tugadi...");
    return response;
  });
  return (
    <div>
      <Axios />
    </div>
  );
};

export default AxiosApi;
