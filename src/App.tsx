//import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CorsoNuoto from "./components/CorsoNuoto";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/air-project" element={<Home />}></Route>
        <Route path="/air-project/servizi" element={<Services />}></Route>
        <Route path="/air-project/contatti" element={<Contact />}></Route>
        <Route path="/air-project/corsonuoto" element={<CorsoNuoto />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
