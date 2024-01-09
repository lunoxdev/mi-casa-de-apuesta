import { useState } from "react";
import TabBtns from "./TabBtns";
import Detalles from "./Detalles";
import Promociones from "./Promociones";
import Pagos from "./Pagos";
import Deportes from "./Deportes";
import Soporte from "./Soporte";
// import PromoCodeReview from "./PromoCodeReview.tsx";

const Drawer = ({ ...info }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const showDrawer = () => {
    setIsDrawerOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const hideDrawer = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      {/* Review Bottom */}
      <button>
        <span
          className="hover:underline hover:underline-offset-4 inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent hover:text-[#f0f3ff]"
          aria-label="Ver reseñas o detalles de la casa de apuesta"
          typeof="button"
          onClick={showDrawer}
        >
          Reseñas
        </span>
      </button>

      {/* Drawer component */}
      {isDrawerOpen && (
        <section
          className="fixed bottom-0 left-0 right-0 h-2/3 z-50 w-full transition-transform bg-black text-[#f0f3ff] rounded-t-3xl border-t-2"
          aria-labelledby="drawer-bottom-label"
        >
          <div className="fixed z-60 inset-0 bg-black opacity-70"></div>
          <div className="relative max-w-screen-lg max-h-screen h-full flex flex-col p-4 mx-auto ">
            {/* Buttons Sections */}
            <div className="flex flex-row justify-end items-center mx-auto w-full space-x-3">
              {/* Close button */}
              <button
                type="button"
                className="w-9 h-9 absolute left-2 top-2 inline-flex items-center justify-center hover:bg-gray-800 hover:rounded-full"
                onClick={hideDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M17.6208 16.3023C17.8622 16.5437 17.9979 16.8712 17.9979 17.2126C17.9979 17.554 17.8622 17.8815 17.6208 18.1229C17.3793 18.3644 17.0518 18.5 16.7104 18.5C16.3689 18.5 16.0415 18.3644 15.8 18.1229L9 11.3212L2.19785 18.1208C1.9564 18.3622 1.62893 18.4979 1.28747 18.4979C0.946013 18.4979 0.61854 18.3622 0.377092 18.1208C0.135644 17.8794 3.59785e-09 17.5519 0 17.2105C-3.59785e-09 16.869 0.135644 16.5416 0.377092 16.3001L7.17924 9.50054L0.379234 2.69879C0.137786 2.45736 0.00214212 2.1299 0.00214212 1.78847C0.00214212 1.44703 0.137786 1.11957 0.379234 0.87814C0.620682 0.636707 0.948155 0.501071 1.28961 0.501071C1.63107 0.501071 1.95855 0.636707 2.19999 0.87814L9 7.67988L15.8021 0.877069C16.0436 0.635636 16.3711 0.5 16.7125 0.5C17.054 0.5 17.3815 0.635636 17.6229 0.877069C17.8644 1.1185 18 1.44596 18 1.7874C18 2.12883 17.8644 2.45629 17.6229 2.69772L10.8208 9.50054L17.6208 16.3023Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Promo Code */}
              {/* <div>
                  <PromoCodeReview {...info} />
                </div> */}

              {/* Reclamar Bono */}
              <a
                href={info.urlbono}
                target="_blank"
                rel="external noopener nofollow"
                className="relative inline-flex w-32 sm:w-1/5 h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <span
                  className="inline-flex tracking-tight h-full w-full cursor-pointer items-center justify-center text-sm sm:text-base rounded-full bg-gray-900 px-3 py-1 font-medium text-white backdrop-blur-3xl"
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
                className="relative inline-flex w-32 sm:w-1/5 h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
                <span
                  className="inline-flex tracking-tight h-full w-full cursor-pointer items-center justify-center text-sm sm:text-base rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl"
                  aria-label="Registrarse y Apostar"
                >
                  Jugar Ahora
                </span>
              </a>
            </div>
            <div className="flex flex-row justify-center items-center mx-auto mt-9 space-x-4 tracking-tight font-extralight ">
              <TabBtns
                tabNumber={1}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                name={"Detalles"}
              />
              <TabBtns
                tabNumber={2}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                name={"Promociones"}
              />
              <TabBtns
                tabNumber={3}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                name={"Pagos"}
              />
              <TabBtns
                tabNumber={4}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                name={"Deportes"}
              />
              <TabBtns
                tabNumber={5}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                name={"Soporte"}
              />
            </div>
            <div className="space-y-2 overflow-y-auto w-full my-5 mt-5 border-t flex flex-col justify-start items-start text-start border-gray-800">
              {/* Contenido tab selecionado */}
              {activeTab === 1 && <Detalles />}
              {activeTab === 2 && <Promociones />}
              {activeTab === 3 && <Pagos />}
              {activeTab === 4 && <Deportes />}
              {activeTab === 5 && <Soporte />}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Drawer;
