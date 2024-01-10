import { useState } from "react";
import "../../styles/header/style.css";

const Review = ({ ...info }) => {
  const [selectedTab, setSelectedTab] = useState("#tab1");

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    // Makes go back to the main menu
    window.history.replaceState(
      { tabId },
      "",
      window.location.href.split("#")[0] + tabId
    );
  };

  return (
    <header
      id="header-nav"
      className="sticky z-50 top-0 flex flex-col justify-between items-center w-full space-y-10 p-4 pt-6"
    >
      {/* Buttons */}
      <div className="flex flex-row mx-auto justify-center w-full space-x-5">
        {/* Reclamar Bono */}
        <a
          href={info.urlbono}
          target="_blank"
          rel="external noopener nofollow"
          className="relative inline-flex w-1/2 sm:w-2/12 h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-3 py-1 font-medium text-white backdrop-blur-3xl"
            aria-label="Reclamar Bono para Apostar"
          >
            Reclamar Bono
          </span>
        </a>

        {/* Jugar Ahora */}
        <a
          href={info.urlregistro}
          target="_blank"
          rel="external noopener nofollow"
          className="relative inline-flex w-1/2 sm:w-2/12 h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl"
            aria-label="Registrarse y Apostar"
          >
            Jugar Ahora
          </span>
        </a>
      </div>

      {/* Nav Bottons */}
      <nav className=" flex flex-row justify-center items-center mx-auto mt-9 space-x-4 tracking-tight font-extralight">
        <a
          href="#detalle"
          onClick={() => handleTabClick("#detalle")}
          className="hover:underline-offset-8 hover:underline font-light"
        >
          Detalles
        </a>
        <a
          href="#bonos"
          onClick={() => handleTabClick("#bonos")}
          className="hover:underline-offset-8 hover:underline font-light"
        >
          Bonos
        </a>
        <a
          href="#promociones"
          onClick={() => handleTabClick("#promociones")}
          className="hover:underline-offset-8 hover:underline font-light"
        >
          Promociones
        </a>
        <a
          href="#deportes"
          onClick={() => handleTabClick("#deportes")}
          className="hover:underline-offset-8 hover:underline font-light"
        >
          Deportes
        </a>
        <a
          href="#soporte"
          onClick={() => handleTabClick("#soporte")}
          className="hover:underline-offset-8 hover:underline font-light"
        >
          Soporte
        </a>
      </nav>
    </header>
  );
};

export default Review;
