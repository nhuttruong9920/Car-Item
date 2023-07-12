import { ReactComponent as SolidMapIcon } from "../../public/SolidMapIcon.svg";
import { ReactComponent as SpeedIcon } from "../../public/SpeedIcon.svg";
import { ReactComponent as CalendarIcon } from "../../public/CalendarIcon.svg";
import { ReactComponent as SOSIcon } from "../../public/SOSIcon.svg";

const CarInfo = () => (
  <div className="car-detail-content flex flex-col gap-2 mt-32">
    <div className="car-detail-content-overview px-3 gap-3 flex flex-col">
      <p className="text-sm font-normal">
        Số 3 Trần Nhân Tôn, Phường 9, Quận 5, TP.Hồ Chí Minh
      </p>
      <div>
        <div className="flex">
          <div className="flex flex-1 p-2 gap-1 items-center border ">
            <SpeedIcon></SpeedIcon>
            <p className="text-sm font-normal">32 km/h</p>
          </div>
          <div className="flex flex-1  p-2 gap-1 items-center border">
            <SolidMapIcon fill="blue" className="w-4 h-4"></SolidMapIcon>
            <p className="text-sm font-normal">244.019,7 Km</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-1  p-2 gap-1 items-center border">
            <CalendarIcon></CalendarIcon>
            <p className="text-sm font-normal">03/06/2023</p>
          </div>
          <div className="flex flex-1  p-2 gap-1 items-center border">
            <SOSIcon></SOSIcon>
            <p className="text-sm font-normal">5 lần SOS</p>
          </div>
        </div>
      </div>
    </div>
    <div className="car-detail-content-information px-3">
      <div className="header-color text-sm font-medium p-2">Lái xe</div>
      <div className="flex">
        <div className="flex flex-1 p-2 gap-1 items-center border ">
          <p className="text-xs font-medium outline-color">Họ tên:</p>
          <p className="text-sm font-normal">Nguyễn Văn A</p>
        </div>
        <div className="flex flex-1  p-2 gap-1 items-center border">
          <p className="text-xs font-medium outline-color">Điện thoại:</p>
          <p className="text-sm font-normal">0904255242</p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1  p-2 gap-1 items-center border">
          <p className="text-xs font-medium outline-color">GPLX:</p>
          <p className="text-sm font-normal">60005800368</p>
        </div>
        <div className="flex flex-1  p-2 gap-1 items-center border">
          <p className="text-xs font-medium outline-color">Ngày hết hạn:</p>
          <p className="text-sm font-normal">19/05/2025</p>
        </div>
      </div>
    </div>
    <div className="car-detail-sensors px-3">
      <div className="header-color flex p-2 gap-3">
        <p className="text-sm font-medium primary-color">Cảm biến</p>
        <p className="text-sm font-normal">QCVN31</p>
      </div>
      <div className="flex justify-between p-2 border">
        <div className="flex justify-center items-end">
          <p className="text-sm font-normal">
            <span className="text-xs font-medium outline-color">
              Nhiệt độ 1:
            </span>
            25°C
          </p>
        </div>
        <p className="text-sm font-normal">19/05/2023 10:53:02</p>
      </div>
      <div className="flex justify-between p-2 justify-center items-center border">
        <div className="flex justify-center items-end">
          <p className="text-sm font-normal">
            <span className="text-xs font-medium outline-color">
              Nhiệt độ 2:
            </span>
            32°C
          </p>
        </div>
        <p className="text-sm font-normal">19/05/2023 12:35:13</p>
      </div>
    </div>
  </div>
);

export default CarInfo;
