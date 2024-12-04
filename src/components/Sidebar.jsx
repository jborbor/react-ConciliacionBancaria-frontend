import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <h1 className="text-2xl font-bold p-4">Conciliación Bancaria</h1>
      <nav className="flex-1">
        <ul>
          <li className="p-4 hover:bg-blue-700">
            <NavLink
              to="/bancos"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-300"
              }
            >
              Mantenimiento de Bancos
            </NavLink>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <NavLink
              to="/cuentas"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-300"
              }
            >
              Mantenimiento de Cuentas
            </NavLink>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <NavLink
              to="/transacciones"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-300"
              }
            >
              Carga de Transacciones
            </NavLink>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <NavLink
              to="/estados-cuenta"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-300"
              }
            >
              Carga de Estados de Cuenta
            </NavLink>
          </li>
          <li className="p-4 hover:bg-blue-700">
            <NavLink
              to="/conciliacion"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-300"
              }
            >
              Conciliación de Transacciones
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
