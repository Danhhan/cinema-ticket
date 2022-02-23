import React, { useEffect } from "react";
// connect to redux
import { useDispatch, useSelector } from "react-redux";
import MultipleItems from "../../components/ReactSlick/MultipleItems";
import { getMoviesAction } from "../../redux/actions/MovieManagerActions";
import { LayDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapActions";
import HomeMenu from "./HomeMenu";
export default function Home() {
  const { movies } = useSelector((state) => state.MovieReducer);
  const { heThongRapChieu } = useSelector((state) => state.MovieTheaterReducer);
  // console.log(movies);
  const dispatch = useDispatch();
  // const renderMovie = () => {
  //   return movies.map((movie, index) => {
  //     console.log(movie);
  //     return <Movie key={index} />;
  //   });
  // };
  useEffect(() => {
    const action = getMoviesAction();
    dispatch(action);
    dispatch(LayDanhSachHeThongRapAction());
  }, []);
  return (
    <div>
      <MultipleItems />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleItems arrFilm={movies} />
          {/* <div className="flex flex-wrap -m-4" style={{justifyContent: 'center'}}>
            {renderMovie()}
          </div> */}
        </div>
      </section>
      <div className="mx-20">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
