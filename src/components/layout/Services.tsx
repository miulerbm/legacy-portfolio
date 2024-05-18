"use client";

import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";
import { useState } from "react";

const Services = () => {
  // Estado para almacenar el nombre del archivo descargado
  const [downloadedFile, setDownloadedFile] = useState("");

  // Función para manejar el clic y descargar el archivo
  const handleDownloadClick = () => {
    // Aquí especifica la ruta del archivo que deseas descargar
    const filePath = "/data/projects.json"; // Cambia esto por la ruta de tu archivo

    // Crear un elemento de enlace temporal
    const link = document.createElement("a");
    link.href = filePath;

    // Asignar el nombre del archivo descargado (opcional)
    link.download = "miulerCV_eng"; // Cambia esto por el nombre que desees

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Limpiar el enlace temporal
    document.body.removeChild(link);

    // Actualizar el estado para mostrar que se ha descargado el archivo
    setDownloadedFile("projects.json"); // Cambia esto por el nombre que hayas utilizado
  };

  return (
    <div
      id="Services"
      className="flex text-white min-h-full flex-col items-center bg-slate-800"
    >
      <img
        className="w-full h-44"
        src="/transitions/transition_gradient.svg"
        alt="transition"
      />
      <p className="flex text-4xl my-8 justify-center text-white font-bold">
        Services
      </p>

      <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
        <Service
          hl="React Projects"
          desc="Functional project implementation using best practices and latest innovations in React"
          img="/icons/react.svg"
        />
        <Service
          hl="Single Page Applications"
          desc="Development of responsive web apps such as portfolios, landingpages and dashboards"
          img="/icons/spa.svg"
        />
        <Service
          hl="API Integration"
          desc="Implementation and consumption of REST APIs for connecting data across multiple services"
          img="/icons/api.svg"
        />
      </div>
      <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4 mt-8">
        You have a project? Get in Touch
      </p>
      <ContactBtn title={"Contact Me"} />
    </div>
  );
};

export default Services;
