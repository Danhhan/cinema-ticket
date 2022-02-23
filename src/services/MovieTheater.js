import axios from "axios";
import { DOMAIN, GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class MovieTheater extends baseService {
  constructor() {
    super();
  }

  layDanhSachHeThongRap = () => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
}

export const movieTheaterService = new MovieTheater();
