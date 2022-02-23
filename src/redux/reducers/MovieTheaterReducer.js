import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [],
};
export const MovieTheaterReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU:
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
      break;

    default:
      return { ...state };
      break;
  }
};
