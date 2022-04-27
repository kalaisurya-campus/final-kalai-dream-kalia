import React, { Component } from "react";

import axios from "axios";
const api = axios.create({
    baseURL: "http://192.168.1.141:8000/",
});
api.defaults.withCredentials = true;

export default api;
