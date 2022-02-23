import axios from "axios";
import { movieService } from "../../services/Movie";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await movieService.getBanners();
      dispatch({
        type: SET_CAROUSEL,
        images: result.data.content,
      });
    } catch (error) {}
  };
};
