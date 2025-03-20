import { useState, useEffect } from "react";
import CBU from "./cbu";


const App = () => {
  const eventoFecha = new Date("2025-04-02T18:00:00").getTime();
  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempo());

  function calcularTiempo() {
    const ahora = new Date().getTime();
    const diferencia = eventoFecha - ahora;
    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempo());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center text-gray-800 p-4">
      <header className="bg-pink-400 text-white text-center w-full py-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">¡Celebramos mis 15 Años!</h1>
        <p>Estás invitado a compartir este día tan especial conmigo.</p>
      </header>

      <div className="my-6 text-center">
        <h2 className="text-xl font-semibold">Faltan para el gran día:</h2>
        <p className="text-2xl mt-2">{`${tiempoRestante.dias}d ${tiempoRestante.horas}h ${tiempoRestante.minutos}m ${tiempoRestante.segundos}s`}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg my-4 text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold">Ubicación del Evento</h2>
        <p>Te esperamos en el siguiente lugar:</p>
        <a href="https://www.google.com/maps" target="_blank" className="text-blue-600 underline">Ver mapa</a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg my-4 text-center w-full max-w-md">
        <h2 className="text-2xl font-semibold">Confirmar Asistencia</h2>
        <p>Confirma tu asistencia enviando un mensaje:</p>
        <a href="https://wa.me/5426112345678?text=Confirmo%20Asistencia!" target="_blank" className="text-green-600 underline">WhatsApp</a>
      </div>

      <CBU />

      <footer className="bg-gray-800 text-white py-4 text-center w-full rounded-lg mt-6">
        <p>&copy; 2025 Mis 15 Años. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
