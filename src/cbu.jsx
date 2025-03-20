import React from "react";
import { FaCopy } from "react-icons/fa";

const cbu = () => {
  const cbu = "1234567890123456789012";

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(cbu);
    alert("CBU copiado al portapapeles!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg my-4 text-center w-full max-w-md">
      <h2 className="text-2xl font-semibold">Regalos</h2>
      <p>Si deseas hacerme un regalo, aquí te dejo mi CBU:</p>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <p className="text-green-600 font-bold">{cbu}</p>
        <button
          onClick={copiarAlPortapapeles}
          className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaCopy />
        </button>
      </div>
    </div>
  );
};

export default cbu;