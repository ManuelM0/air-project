//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CorsoNuoto from "./components/CorsoNuoto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/servizi" element={<Services />}></Route>
        <Route path="/contatti" element={<Contact />}></Route>
        <Route path="/corsonuoto" element={<CorsoNuoto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
