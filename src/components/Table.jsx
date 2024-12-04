import React from "react";

function Table({ transacciones, title, onToggle }) {
  return (
    <div className="w-full p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
      <div className="overflow-auto h-72">
        <table className="min-w-full text-sm text-left bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="sticky top-0 text-gray-100 bg-cyan-800 uppercase">
            <tr>
              <th className="px-4 py-2"></th> {/* Columna para checkbox */}
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Nro Documento</th>
              <th className="px-4 py-2">Monto</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">Área</th>
            </tr>
          </thead>
          <tbody>
            {transacciones.map((item) => (
              <tr
                key={item.id}
                className={item.conciliada ? "bg-green-100" : "bg-orange-100"}
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={item.conciliada}
                    onChange={() => onToggle(item.id)}
                    className="cursor-pointer"
                  />
                </td>
                <td className="px-4 py-2">{item.fecha}</td>
                <td className="px-4 py-2">{item.nroDocumento}</td>
                <td className="px-4 py-2">${item.monto}</td>
                <td className="px-4 py-2">{item.descripcion}</td>
                <td className="px-4 py-2">{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
