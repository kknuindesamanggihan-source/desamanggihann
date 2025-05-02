  import React from "react";
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import HomePage from "./pages/HomePage";
  import ProfilDesa from "./pages/ProfilDesa";
  import BeritaPage from "./pages/BeritaDesa";
  import InfografisPage from "./pages/Infografis";
  import PotensiDesaPage from "./pages/PotensiDesa";


  const App = () => {
    return (
      <Router>
        <main className="overflow-x-hidden bg-light text-dark">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="profil-desa" element={<ProfilDesa />} />
            <Route path="berita" element={<BeritaPage/>} />
            <Route path="infografis" element={<InfografisPage />} />
            <Route path="potensi-desa" element={<PotensiDesaPage />} />

          </Routes>
        </main>
      </Router>
    );
  };

  export default App;
