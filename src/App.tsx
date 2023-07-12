import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CarItem from "./Components/CarItem";
import Header from "./Components/Header";
import CarInfo from "./Components/CarInfo";
import PhotoInfo from "./Components/PhotoInfo";
import LogInfo from "./Components/LogInfo";
import ErrorInfo from "./Components/ErrorInfo";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<CarInfo />} />
        <Route path="/photos" element={<PhotoInfo />} />
        <Route path="/logs" element={<LogInfo />} />
        <Route path="/errors" element={<ErrorInfo />} />
      </Routes>
    </>
    // <>
    //   <CarItem></CarItem>
    //   <div className="flex flex-col gap-2">
    //     <Header></Header>
    //     <ErrorInfo></ErrorInfo>
    //     <LogInfo></LogInfo>
    //     <PhotoInfo></PhotoInfo>
    //     <CarInfo></CarInfo>
    //   </div>
    // </>
  );
};
export default App;
