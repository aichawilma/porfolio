import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import Experiences from "./pages/Experiences";
import CompetencesPage from "./pages/Competences";
import Formation from "./pages/Formation";
import VieAssociative from "./pages/VieAssociative";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/competences" element={<CompetencesPage />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/vie-associative" element={<VieAssociative />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;