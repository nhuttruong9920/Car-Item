import { ReactComponent as CarGreenIcon } from "../../public/CarGreenIcon.svg";
import { ReactComponent as XMarkIcon } from "../../public/XMarkIcon.svg";
import { ReactComponent as SolidCarIcon } from "../../public/SolidCarIcon.svg";
import { ReactComponent as SolidPhotoIcon } from "../../public/SolidPhotoIcon.svg";
import { ReactComponent as SolidChartBarIcon } from "../../public/SolidChartBarIcon.svg";
import { ReactComponent as ListBulletIcon } from "../../public/ListBulletIcon.svg";
import { ReactComponent as SolidExclamationIcon } from "../../public/SolidExclamationIcon.svg";
import { ReactComponent as SolidRoutingIcon } from "../../public/SolidRoutingIcon.svg";
import { ReactComponent as SolidShareIcon } from "../../public/SolidShareIcon.svg";
import { ReactComponent as SolidMapIcon } from "../../public/SolidMapIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const handleClickCarInfo = (carButtonId: string) => {
    setActive(carButtonId);
    navigate("/");
  };

  const handleClickPhotoInfo = (carButtonId: string) => {
    setActive(carButtonId);
    navigate("/photos");
  };
  const handleClickLogInfo = (carButtonId: string) => {
    setActive(carButtonId);
    navigate("/logs");
  };
  const handleClickErrorInfo = (carButtonId: string) => {
    setActive(carButtonId);
    navigate("/errors");
  };
  console.log(active);
  return (
    <>
      <div className="car-detail-header rounded-t-xl flex flex-col mb-2 fixed w-full top-0">
        <div className="text-gray-50 p-3">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center text-xl justify-center">
              <CarGreenIcon></CarGreenIcon>
              <p className="font-semibold">51D.13695</p>
            </div>
            <div className="items-center flex">
              <XMarkIcon></XMarkIcon>
            </div>
          </div>
          <div>
            <div className="flex justify-between pt-1">
              <p className="text-xs font-normal">03/06/2023 13:19:01</p>
              <div className="flex gap-1 justify-center items-center">
                <div className="status-icon rounded-lg "></div>
                <p className="text-xs font-normal">Nguồn bật</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 px-2">
          <div
            className={`p-2 ${
              active === "carButton" ? "bg-gray-50 rounded-t" : ""
            }`}
          >
            <SolidCarIcon
              fill={active === "carButton" ? "#0066FF" : "white"}
              className="w-5 h-5"
              onClick={() => handleClickCarInfo("carButton")}
            ></SolidCarIcon>
          </div>
          <div
            className={`p-2 ${
              active === "photoButton" ? "bg-gray-50 rounded-t" : ""
            }`}
          >
            <SolidPhotoIcon
              fill={active === "photoButton" ? "#0066FF" : "white"}
              onClick={() => handleClickPhotoInfo("photoButton")}
            ></SolidPhotoIcon>
          </div>
          <div className="p-2" ref={ref}>
            <SolidChartBarIcon></SolidChartBarIcon>
          </div>
          <div
            className={`p-2 relative ${
              active === "logButton" ? "bg-gray-50 rounded-t" : ""
            }`}
          >
            <ListBulletIcon
              stroke={active === "logButton" ? "#0066FF" : "white"}
              onClick={() => handleClickLogInfo("logButton")}
            ></ListBulletIcon>
            <div className="badge rounded-full w-4 h-4 flex justify-center items-center absolute  top-0 right-0">
              12
            </div>
          </div>
          <div
            className={`p-2 relative ${
              active === "errorButton" ? "bg-gray-50 rounded-t" : ""
            }`}
          >
            <SolidExclamationIcon
              onClick={() => handleClickErrorInfo("errorButton")}
              fill={active === "errorButton" ? "#0066FF" : "white"}
            ></SolidExclamationIcon>
            <div className="badge rounded-full w-4 h-4 flex justify-center items-center absolute  top-0 right-0">
              3
            </div>
          </div>
          <div className="p-2">
            <SolidRoutingIcon></SolidRoutingIcon>
          </div>
          <div className="p-2">
            <SolidShareIcon></SolidShareIcon>
          </div>
          <div className="p-2">
            <SolidMapIcon
              fill="white"
              className="
                w-5 h-5"
            ></SolidMapIcon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
