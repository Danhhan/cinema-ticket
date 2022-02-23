import { Radio, Space, Tabs } from "antd";
import moment from "moment";
import { useState, useEffect, memo, Fragment } from "react";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;
const HomeMenu = (props) => {
  // const { heThongRap, setHeThongRap } = useState([]);
  const [state, setState] = useState({
    tabPosition: "left",
  });
  const { tabPosition } = state;

  // useEffect(() => {
  //   setHeThongRap(props.heThongRapChieu);
  // }, []);
  // console.log(heThongRap);
  console.log(props.heThongRapChieu);
  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((item, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <img
              src={item.logo}
              alt="Images"
              className="rounded-full"
              width="50"
            />
          }
        >
          <Tabs tabPosition={tabPosition}>
            {item.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  key={index}
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img src={item.logo} alt="Images" width="50" />
                      <br />
                      <div className="text-left ml-2">
                        {cumRap.tenCumRap}
                        <p className="text-red-500">Chi tiết</p>
                      </div>
                    </div>
                  }
                >
                  {cumRap.danhSachPhim.slice(0, 5).map((film, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ height: 50, width: 50 }}
                              src={film.hinhAnh}
                              alt={film.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/200/300";
                              }}
                            />
                            <div className="ml-2">
                              <h1 className="text-green-500">{film.tenPhim}</h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="grid grid-cols-6 gap-6">
                                {film.lstLichChieuTheoPhim
                                  ?.slice(0, 12)
                                  ?.map((lichChieu, index) => {
                                    return (
                                      <Link
                                        className="text-2xl text-green-600"
                                        to="/"
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </Link>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <>
      <Tabs tabPosition={tabPosition}>{renderHeThongRap()}</Tabs>
    </>
  );
};
export default memo(HomeMenu);
