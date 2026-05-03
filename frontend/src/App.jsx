import { useState } from "react";
import LoginRegistro from "./components/LoginRegistro";
import Navbar from "./components/Navbar";
import RegisterTalent from "./components/RegisterTalent";
import TalentManagement from "./components/TalentManagment";
import Interviews from "./components/InterviewForm";
import PrintCard from "./components/PrintCard";
import ConsultaEstado from "./components/ConsultaEstado";

// 1. IMPORTA EL COMPONENTE

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("search");

  return (
    <div className="min-h-screen bg-gray-10">
      <Navbar
        userName="Nicole Tolve"
        userRole="Administrador"
        activePage={currentPage}
        onNavChange={setCurrentPage}
      />

      <main style={{ padding: "0px 0px 0px" }}>
        {currentPage === "search" && <TalentManagement />}

        {currentPage === "register" && (
          <RegisterTalent onBack={() => setCurrentPage("search")} onverFicha={handleVerFicha} />
        )}
        {currentPage === "interviews" && (<Interviews onBack={() => setCurrentPage("search")} onVerFicha={handleVerFicha} />)}

        {/* 2. CORRECCIÓN AQUÍ: Cambia "interview" por "interviews" */}
        {currentPage === "interviews" && <Interviews />}
      </main>
    </div>
  );
}

export default App;
