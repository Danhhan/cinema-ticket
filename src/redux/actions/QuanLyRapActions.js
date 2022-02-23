import { movieTheaterService } from "../../services/MovieTheater";
import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

export const LayDanhSachHeThongRapAction = () => {
    return async dispatch => {
        try {
            const result = await movieTheaterService.layDanhSachHeThongRap();
            if(result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: result.data.content,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}