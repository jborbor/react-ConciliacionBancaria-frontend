import React, { useState } from "react";
import Table from "../components/Table";

function ConciliacionTransacciones() {
  const [transacciones, setTransacciones] = useState({
    debitosOperativos: [
      {
        id: 1,
        fecha: "2024-12-01",
        nroDocumento: "DOC123",
        monto: 100,
        descripcion: "Pago de factura",
        area: "Operativo",
        conciliada: false,
      },
      {
        id: 2,
        fecha: "2024-12-02",
        nroDocumento: "DOC124",
        monto: 50,
        descripcion: "Pago de servicio",
        area: "Operativo",
        conciliada: false,
      },
      {
        id: 3,
        fecha: "2024-12-01",
        nroDocumento: "DOC123",
        monto: 100,
        descripcion: "Pago de factura",
        area: "Operativo",
        conciliada: false,
      },
      {
        id: 4,
        fecha: "2024-12-02",
        nroDocumento: "DOC124",
        monto: 50,
        descripcion: "Pago de servicio",
        area: "Operativo",
        conciliada: false,
      },
    ],
    creditosOperativos: [
      {
        id: 3,
        fecha: "2024-12-03",
        nroDocumento: "DOC125",
        monto: 200,
        descripcion: "Depósito de cliente",
        area: "Operativo",
        conciliada: false,
      },
      {
        id: 4,
        fecha: "2024-12-04",
        nroDocumento: "DOC126",
        monto: 30,
        descripcion: "Reembolso",
        area: "Operativo",
        conciliada: false,
      },
    ],
    debitosContables: [
      {
        id: 5,
        fecha: "2024-12-05",
        nroDocumento: "DOC127",
        monto: 80,
        descripcion: "Pago a proveedor",
        area: "Contable",
        conciliada: false,
      },
      {
        id: 6,
        fecha: "2024-12-06",
        nroDocumento: "DOC128",
        monto: 150,
        descripcion: "Compra de materiales",
        area: "Contable",
        conciliada: false,
      },
    ],
    creditosContables: [
      {
        id: 7,
        fecha: "2024-12-07",
        nroDocumento: "DOC129",
        monto: 250,
        descripcion: "Ingreso por venta",
        area: "Contable",
        conciliada: false,
      },
      {
        id: 8,
        fecha: "2024-12-08",
        nroDocumento: "DOC130",
        monto: 100,
        descripcion: "Transferencia",
        area: "Contable",
        conciliada: false,
      },
    ],
  });

  const toggleConciliacion = (tabla, id) => {
    setTransacciones({
      ...transacciones,
      [tabla]: transacciones[tabla].map((t) =>
        t.id === id ? { ...t, conciliada: !t.conciliada } : t
      ),
    });
  };

  return (
    <div className="flex flex-col">
      <div className="text-blue-900 text-left py-5 px-8 shadow-md">
        <h1 className="text-3xl font-semibold">
          Conciliación de Transacciones
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6 flex-grow">
        <div className="w-full lg:w-1/2 space-y-6">
          <Table
            transacciones={transacciones.debitosOperativos}
            title="Débitos Operativos"
            onToggle={(id) => toggleConciliacion("debitosOperativos", id)}
          />
          <Table
            transacciones={transacciones.creditosOperativos}
            title="Créditos Operativos"
            onToggle={(id) => toggleConciliacion("creditosOperativos", id)}
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <Table
            transacciones={transacciones.debitosContables}
            title="Débitos Contables"
            onToggle={(id) => toggleConciliacion("debitosContables", id)}
          />
          <Table
            transacciones={transacciones.creditosContables}
            title="Créditos Contables"
            onToggle={(id) => toggleConciliacion("creditosContables", id)}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 p-6 mt-auto">
        <button className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
          Consultar
        </button>
        <button className="bg-transparent border-2 border-green-500 text-green-500 px-6 py-3 rounded-md shadow-md hover:bg-green-500 hover:text-white transition duration-300">
          Conciliación Automática
        </button>
        <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-md shadow-md hover:bg-yellow-500 hover:text-white transition duration-300">
          Conciliación Manual
        </button>
      </div>
    </div>
  );
}

export default ConciliacionTransacciones;
