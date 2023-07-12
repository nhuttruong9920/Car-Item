import ErrorItem from "./ErrorItem";
const ErrorInfo = () => (
  <div className="mt-32">
    <ErrorItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Mất GPRS 30P"
    ></ErrorItem>
    <ErrorItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="SOS"
    ></ErrorItem>
    <ErrorItem
      datetime="08/06 10:57:36"
      location="K3B, P. Tân Đông Hiệp, TP. Dĩ An, T. Bình Dương"
      status="Mất GPRS 1H"
    ></ErrorItem>
  </div>
);

export default ErrorInfo;
