import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MantenimientoBancos from "./pages/MantenimientoBancos";
import MantenimientoCuentas from "./pages/MantenimientoCuentas";
import CargaTransacciones from "./pages/CargaTransacciones";
import CargaEstadosCuenta from "./pages/CargaEstadosCuenta";
import ConciliacionTransacciones from "./pages/ConciliacionTransacciones";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", height: "100%", backgroundColor: "#E1F1F9" }}
      >
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div style={{ flex: 1, padding: "20px", backgroundColor: "#F0F4F8" }}>
          <Routes>
            <Route path="/bancos" element={<MantenimientoBancos />} />
            <Route path="/cuentas" element={<MantenimientoCuentas />} />
            <Route path="/transacciones" element={<CargaTransacciones />} />
            <Route path="/estados-cuenta" element={<CargaEstadosCuenta />} />
            <Route
              path="/conciliacion"
              element={<ConciliacionTransacciones />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
