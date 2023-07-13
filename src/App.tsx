import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import CarInfo from "./Components/CarInfo";
import PhotoInfo from "./Components/PhotoInfo";
import LogInfo from "./Components/LogInfo";
import ErrorInfo from "./Components/ErrorInfo";
import CarItem from "./Components/CarItem";

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
      {/* <CarItem></CarItem> */}
    </>
  );
};
export default App;
