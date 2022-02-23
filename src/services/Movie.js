import axios from "axios";
import { DOMAIN, GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class Movie extends baseService {
  constructor() {
    super();
  }

  getBanners = () => {
    return this.get('api/QuanLyPhim/LayDanhSachBanner');
  };
  
  getMovies = () => {
      return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  }
}

export const movieService = new Movie();
