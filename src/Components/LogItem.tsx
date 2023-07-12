import { ReactComponent as ClockIcon } from "../../public/ClockIcon.svg";
import { ReactComponent as SolidLocationIcon } from "../../public/SolidLocationIcon.svg";

type LogItemProps = {
  datetime: string;
  location: string;
  status: string;
};
const LogItem = ({ datetime, location, status }: LogItemProps) => (
  <div className="border-b flex justify-between p-3 flex-col relative">
    <div className="flex items-center gap-1">
      <ClockIcon fill="black" className="w-3 h-3"></ClockIcon>
      <p className="font-medium text-xs">{datetime}</p>
    </div>
    <div className="flex items-center gap-1">
      <SolidLocationIcon fill="black" className="w-3 h-3"></SolidLocationIcon>
      <p className="font-normal text-xs">{location}</p>
    </div>
    <p className="font-medium text-xs primary-color absolute top-3 right-3">{status}</p>
  </div>
);

export default LogItem;
