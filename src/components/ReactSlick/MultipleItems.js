import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_COMMING, SET_FILM_ON } from "../../redux/types/MovieType";
import MovieFlip from "../Movie/MovieFlip";
import styleSlick from "./MultipleItems.module.scss";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
};

const MultipleItems = ({ arrFilm }) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector((state) => state.MovieReducer);
  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";
  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
  const renderFilm = () => {
    return arrFilm?.slice(0, 12)?.map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          {/* <Movie film={item} /> */}
          <MovieFlip film={item} />
        </div>
        // <div className={`${styleSlick["width-item"]}`} key={index}>
        //   {/* <Movie film={item} /> */}
        //   <MovieFlip />
        // </div>
      );
    });
  };
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <button
        type="button"
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded-full bg-gray-800 text-white mr-2`}
        onClick={() => {
          const action = { type: SET_FILM_ON };
          dispatch(action);
        }}
      >
        PHIM ĐANG CHIẾU
      </button>
      <button
        type="button"
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded-full bg-white border-gray-800 border`}
        onClick={() => {
          const action = { type: SET_FILM_COMMING };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>

      <Slider className="test" {...settings}>{renderFilm()}</Slider>
    </div>
  );
};
export default MultipleItems;
