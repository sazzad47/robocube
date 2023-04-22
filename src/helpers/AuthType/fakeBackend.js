import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";

import {
  apiKey,
} from "../../common/data";


const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  
  //API Key
  mock.onGet(url.GET_API_KEY).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (apiKey) {
          // Passing fake JSON data as response
          resolve([200, apiKey]);
        } else {
          reject([400, "Cannot get API Key Data"]);
        }
      });
    });
  });
};

export default fakeBackend;
