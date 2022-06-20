import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login/>} */}
        {/* <Route path="/post-form" element={<Form/>} */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
