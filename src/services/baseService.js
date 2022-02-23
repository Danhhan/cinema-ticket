import axios, { Axios } from "axios";
import { DOMAIN, TOKEN } from "../util/settings/config";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authoriztion: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: { Authoriztion: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  get = (url) => {
    return axios({
        url: `${DOMAIN}/${url}`,
        method: "GET",
        headers: { Authoriztion: "Bearer " + localStorage.getItem(TOKEN) },
      });
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: { Authoriztion: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}
