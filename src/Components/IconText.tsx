import { ReactComponent as ClockIcon } from "../../public/ClockIcon.svg";
import { ReactComponent as ChannelIcon } from "../../public/ChannelIcon.svg";
import { ReactComponent as SolidLocationIcon } from "../../public/SolidLocationIcon.svg";

const IconText = ({datetime,channel, location,short}:{datetime:string,channel: string,location:string,short:boolean}) => (
  <>
    <div className="flex gap-1 items-center">
      <div>
        <ClockIcon className="w-3 h-3" fill="#0066FF"></ClockIcon>
      </div>
      <div className="text-xs font-normal">{datetime}</div>
    </div>
    <div className="flex gap-1  items-center">
      <div>
        <ChannelIcon></ChannelIcon>
      </div>
      <div className="text-xs font-normal">{channel}</div>
    </div>
    <div className="flex gap-1  items-center">
      <div>
        <SolidLocationIcon
          className="w-3 h-3"
          fill="#0066FF"
        ></SolidLocationIcon>
      </div>
      <div className={`text-xs font-normal ${short?"truncate w-6/12":""}`}>{location}</div>
    </div>
  </>
);

export default IconText;
