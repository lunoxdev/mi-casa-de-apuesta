import { useState } from "react";

const ResponGambling = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const hideDrawer = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <button className="hover:text-gray-400" onClick={showDrawer}>
        Juego Responsable
      </button>

      {/* Drawer component */}
      {isDrawerOpen && (
        <>
          <section
            className="fixed bottom-0 left-0 right-0 h-2/3 z-50 w-full transition-transform bg-black text-[#f0f3ff] rounded-t-3xl border-t-2"
            aria-labelledby="drawer-bottom-label"
          >
            <div className="fixed z-60 inset-0 bg-black opacity-70"></div>
            <div className="relative max-w-screen-lg max-h-screen h-full flex flex-col p-4 mx-auto ">
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
              <article className="space-y-2 overflow-y-auto w-full my-5 mt-12 border-t flex flex-col justify-start items-start text-start border-gray-800">
                <div>
                  <h4 className="inline-flex text-xl sm:text-2xl text-balance mt-5 font-semibold">
                    Juego Responsable: Apostando de Forma Segura
                  </h4>
                  <p className="tracking-tight text-sm font-light mb-5 text-pretty">
                    Última actualización: 10/01/2024
                  </p>
                </div>
                <p className="tracking-tight font-light text-pretty">
                  En nuestro compromiso con el juego responsable, nos
                  preocupamos profundamente por la adicción que puede surgir del
                  juego y los impactos negativos que podría ocasionar en
                  diversas áreas de la vida de una persona.
                </p>
                <p className="tracking-tight font-light text-pretty">
                  Asumimos con seriedad la responsabilidad de fomentar prácticas
                  saludables entre nuestros usuarios. Nuestra misión es
                  proporcionar información valiosa y enlaces a plataformas de
                  juego, con el objetivo de que la experiencia sea divertida,
                  segura y exenta de riesgos innecesarios.
                </p>
                <p className="tracking-tight font-light text-pretty">
                  Apostar debe ser una experiencia divertida, nunca peligrosa.
                </p>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold mb-2">
                    Algunos de los elementos clave del juego responsable y que
                    recomendamos incluyen:
                  </h5>
                  <div>
                    <ul className="list-disc list-inside tracking-tight font-light text-pretty">
                      <li>
                        Establecer un presupuesto y límites de tiempo claros
                        para el juego.
                      </li>
                      <li>
                        Evitar la tentación o apostar más de lo que se puede
                        permitir.
                      </li>
                      <li>
                        Tomarse descansos regulares durante el juego para evitar
                        la fatiga y la impulsividad
                      </li>
                      <li>
                        Buscar ayuda si se siente que el juego está afectando
                        negativamente la vida personal o financiera.
                      </li>
                    </ul>
                  </div>
                  <p className="tracking-tight font-light text-pretty mt-3">
                    Si en algún momento necesitas ayuda, las casas de apuestas
                    ofrecen opciones de soporte o autoexclusión para garantizar
                    una experiencia segura.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Autoexclusión
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    La autoexclusión se convierte en una herramienta esencial
                    para fomentar un juego responsable. Cuando te das cuenta de
                    que te estás desviando de los principios del juego
                    responsable, enfrentas pérdidas notables o atraviesas
                    momentos complicados, tanto económicos como emocionales, las
                    casas de apuestas te ofrecen la posibilidad de suspender
                    temporalmente tu cuenta.
                  </p>
                  <p className="tracking-tight font-light text-pretty">
                    Esta opción te permite detener momentáneamente tu
                    participación en los juegos, brindándote un respiro
                    necesario para reevaluar tus decisiones y enfrentar
                    cualquier desafío financiero o emocional que puedas estar
                    experimentando.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Enlaces de ayuda:
                  </h5>
                  <h6 className="tracking-tight font-semibold">Español:</h6>
                  <div>
                    <ul className="list-disc list-inside tracking-tight font-light text-pretty">
                      <li>
                        México:
                        <br />
                        <a
                          href="https:www.ejemplo.com"
                          target="_blank"
                          rel="noopener noreferrer external"
                          className="hover:text-gray-400"
                        >
                          https://www.ejemplo.com/
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h6 className="tracking-tight font-semibold">English:</h6>
                  <div>
                    <ul className="list-disc list-inside space-y-2 tracking-tight font-light text-pretty">
                      <li>
                        GamCare:
                        <br />
                        <a
                          href="https://www.gamcare.org.uk/"
                          target="_blank"
                          rel="noopener noreferrer external"
                          className="hover:text-gray-400"
                        >
                          https://www.gamcare.org.uk/
                        </a>
                      </li>
                      <li>
                        BeGambleAware:
                        <br />
                        <a
                          href="https://www.begambleaware.org/"
                          target="_blank"
                          rel="noopener noreferrer external"
                          className="hover:text-gray-400"
                        >
                          https://www.begambleaware.org/
                        </a>
                      </li>
                      <li>
                        MGA:
                        <br />
                        <a
                          href="https://www.mga.org.mt/"
                          target="_blank"
                          rel="noopener noreferrer external"
                          className="hover:text-gray-400"
                        >
                          https://www.mga.org.mt/
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ResponGambling;
