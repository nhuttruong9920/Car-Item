import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { ReactComponent as UserIcon } from "../../public/UserIcon.svg";
import { ReactComponent as LocationIcon } from "../../public/LocationIcon.svg";
import { ReactComponent as CarPumpIcon } from "../../public/CarPumpIcon.svg";
import { ReactComponent as ThermometerIcon } from "../../public/ThermometerIcon.svg";
import { ReactComponent as HumidityIcon } from "../../public/HumidityIcon.svg";
import { ReactComponent as ArrowIcon } from "../../public/ArrowIcon.svg";
import { ReactComponent as AirConditionerIcon } from "../../public/AirConditionerIcon.svg";
import { ReactComponent as DoorOpenIcon } from "../../public/DoorOpenIcon.svg";
import { ReactComponent as CarIcon } from "../../public/CarIcon.svg";

import Buttons from "./Buttons";
import Content from "./Content";
import SpeedBadge from "./SpeedBadge";

const CarItem = () => (
  <div style={{ width: "100%" }}>
    <div className="border rounded-md">
      <div className="title flex justify-between border-b p-3">
        <div className="left-content flex items-center">
          <div className="icons w-8 h-8 flex justify-center relative">
            <CarIcon></CarIcon>
            <div className="point rounded-full border absolute .top-0 left-0"></div>
          </div>
          <div className="text">
            <div className="bien-so flex items-center gap-1">
              <p className="bien-so-name text-base font-bold">51C - 12346</p>
              <ExclamationTriangleIcon className="exclamation-triangle-icon"></ExclamationTriangleIcon>
            </div>
            <div className="time-date flex gap-1 text-xs font-normal">
              <p>03/06/2023</p>
              <p>13:19:01</p>
            </div>
          </div>
        </div>

        <div className="right-content flex gap-1">
          <SpeedBadge value={120} unit="Km"></SpeedBadge>
          <SpeedBadge value={43} unit="Km/h"></SpeedBadge>
        </div>
      </div>

      <div className="content p-3 flex gap-2 flex-col">
        <Content icon={<UserIcon></UserIcon>} text="Nguyễn Văn An"></Content>
        <Content
          icon={<LocationIcon></LocationIcon>}
          text="Số 3 Trần Nhân Tôn, P9, Q5, TP.HCM"
        ></Content>
      </div>

      <div className="buttons flex justify-between p-3">
        <Buttons icon={<CarPumpIcon></CarPumpIcon>} text="40L"></Buttons>
        <Buttons
          icon={<ThermometerIcon></ThermometerIcon>}
          text="32°C"
        ></Buttons>
        <Buttons icon={<HumidityIcon></HumidityIcon>} text="--"></Buttons>
        <Buttons icon={<ArrowIcon></ArrowIcon>} text="--"></Buttons>
        <Buttons
          icon={<AirConditionerIcon></AirConditionerIcon>}
          text="--"
        ></Buttons>
        <Buttons icon={<DoorOpenIcon></DoorOpenIcon>} text="--"></Buttons>
      </div>
    </div>
  </div>
);

export default CarItem;
