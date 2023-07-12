import LogItem from "./LogItem";
const LogInfo = () => (
  <div className="mt-32">
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Bắt đầu lái xe liên tục - QCVN"
    ></LogItem>
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Bắt đầu hành trình"
    ></LogItem>
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Bật nguồn"
    ></LogItem>
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Tắt nguồn"
    ></LogItem>
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Có GPS"
    ></LogItem>{" "}
    <LogItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Có GPRS"
    ></LogItem>
  </div>
);

export default LogInfo;
