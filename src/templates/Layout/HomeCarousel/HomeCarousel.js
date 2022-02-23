import { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCarouselAction } from "../../../redux/actions/CarouselActions";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { images } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  // tu kich hoat khi component load ra
  // useEffect(async () => {
  //   try {
  // const result = await axios({
  //   url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
  //   method: "GET",
  // });
  //     // đưa lên reducer
  //     dispatch({
  //       type: 'SET_CAROUSEL',
  //       images: result.data.content
  //     });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }, []);
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return images.map((item, index) => {
      return (
        <div key={index}>
          <div style={{ ...contentStyle }}>
            <img src={item.hinhAnh} alt={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <Carousel effect="fade" style={{ position: "relative", zIndex: 1 }}>
        {renderImg()}
      </Carousel>
      ,
    </div>
  );
}
