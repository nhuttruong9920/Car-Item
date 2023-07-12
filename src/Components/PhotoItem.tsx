import "../App.css";

import { ReactComponent as ClockIcon } from "../../public/ClockIcon.svg";
import { ReactComponent as ChannelIcon } from "../../public/ChannelIcon.svg";
import { ReactComponent as SolidLocationIcon } from "../../public/SolidLocationIcon.svg";

const PhotoItem = ({
  src,
  datetime,
  channel,
  location,
}: {
  src: string;
  datetime: string;
  channel: string;
  location: string;
}) => (
  <div
    className="overflow-hidden rounded-md box-border mb-2"
    style={{ width: "48%" }}
  >
    <img src={src} alt="photo" style={{ width: "100%" }} />
    <div
      className="flex flex-col items-start p-2 gap-1"
      style={{ backgroundColor: "#EFF1F1" }}
    >
      <div className="flex gap-1 justify-center items-center">
        <div>
          <ClockIcon className="w-3 h-3" fill="#0066FF"></ClockIcon>
        </div>
        <div className="text-xs font-normal">{datetime}</div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div>
          <ChannelIcon></ChannelIcon>
        </div>
        <div className="text-xs font-normal">{channel}</div>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div>
          <SolidLocationIcon
            className="w-3 h-3"
            fill="#0066FF"
          ></SolidLocationIcon>
        </div>
        <div className="text-xs font-normal">{location}</div>
      </div>
    </div>
  </div>
);

export default PhotoItem;
