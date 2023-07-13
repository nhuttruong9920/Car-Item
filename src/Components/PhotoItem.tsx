import "../App.css";
import IconText from "./IconText";

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
    style={{ width: "200px" }}
  >
    <img src={src} alt="photo" style={{ height: "150px" }} />
    <div
      className="flex flex-col items-start p-2 gap-1"
      style={{ backgroundColor: "#EFF1F1" }}
    >
      <IconText datetime={datetime} channel={channel} location={location} short={true}></IconText>
    </div>
  </div>
);

export default PhotoItem;
