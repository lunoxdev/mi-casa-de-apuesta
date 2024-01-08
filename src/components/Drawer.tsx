import { useState } from "react";

const Drawer = ({ ...info }) => {
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
        <>
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

                {/* Reclamar Bono */}
                <a
                  href={info.urlbono}
                  target="_blank"
                  rel="external noopener nofollow"
                  className="relative inline-flex w-1/3 sm:w-1/5 h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
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
                  className="relative inline-flex w-1/3 sm:w-1/5 h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#f0f3ff] focus:ring-offset-2 focus:ring-offset-[#f0f3ff]"
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
              <article className="space-y-2 overflow-y-auto w-full my-5 mt-5 border-t flex flex-col justify-start items-start text-start border-gray-800">
                <div>
                  <h5 className="inline-flex text-xl sm:text-2xl mt-5 font-semibold">
                    Términos y Condiciones
                  </h5>
                  <p className="tracking-tight text-sm font-light mb-5 text-pretty">
                    Última actualización: 10/01/2024
                  </p>
                </div>
                <p className="tracking-tight font-light text-pretty">
                  Antes de comenzar, es importante que leas detenidamente estos
                  Términos y Condiciones, ya que rigen tu acceso y uso de
                  nuestro sitio web. Al utilizar nuestros servicios, aceptas
                  cumplir con estos términos. Si no estás de acuerdo con alguna
                  parte de estos Términos y Condiciones, te pedimos que no
                  accedas a nuestro servicio.
                </p>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    1. Nuestro servicio
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Ofrecemos información sobre diversas casas de apuestas para
                    ayudarte a tomar decisiones informadas. Los enlaces externos
                    a estas casas de apuestas son proporcionados con el objetivo
                    de facilitar tu acceso a sus servicios. Sin embargo, no
                    tenemos control sobre sus operaciones.
                  </p>
                  <p className="tracking-tight font-light text-pretty">
                    Al hacer uso de nuestros servicios de afiliados, reconoces y
                    aceptas que la Compañía no se hace responsable por cualquier
                    daño o pérdida causada o presuntamente causada por el uso de
                    los servicios de las casas de apuestas enlazadas. Te
                    recomendamos revisar los términos y condiciones específicos
                    de cada casa de apuestas antes de participar en sus
                    servicios.
                  </p>
                </div>
                <div>
                  <p className="tracking-tight font-light text-pretty">
                    <span className="inline-flex text-lg font-semibold underline">
                      Nota Importante:
                    </span>
                    <br />
                    El sitio web no respalda ni garantiza los resultados de las
                    apuestas, y cualquier participación en actividades de juego
                    debe hacerse con responsabilidad. La decisión de utilizar
                    los servicios de las casas de apuestas enlazadas es
                    exclusivamente tuya, y debes estar al tanto de los riesgos
                    asociados.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    2. Uso del Servicio:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    El acceso y uso de nuestro servicio están condicionados a la
                    aceptación de estos términos. Debes tener al menos 18 años
                    para utilizar nuestro servicio, ya que no permitimos el
                    acceso a menores de edad.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    3. Política de Privacidad:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Tu acceso y uso del servicio también están sujetos a nuestra
                    Política de Privacidad. Te instamos a leer detenidamente
                    esta política, ya que describe cómo manejamos tu información
                    personal.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg even:after:font-semibold">
                    4. Enlaces a Terceros:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Nuestro servicio puede contener enlaces a sitios web de
                    terceros. No tenemos control sobre estos sitios y no somos
                    responsables de su contenido o políticas de privacidad. Te
                    recomendamos revisar los términos y condiciones de estos
                    sitios antes de utilizarlos.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    5. Terminación:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Nos reservamos el derecho de suspender o terminar tu acceso
                    al servicio sin previo aviso si se incumplen estos términos.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    6. Cambios en los Términos y Condiciones:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Actualizaremos esta política y notificaremos cambios a
                    través del servicio o correo electrónico antes de que entren
                    en vigencia. Le recomendamos revisar periódicamente esta
                    Política de Privacidad para estar al tanto de cualquier
                    cambio. Si tiene alguna pregunta o inquietud sobre esta
                    Política de Privacidad, contáctenos.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    7. Derechos de Autor:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Todo el contenido de nuestro sitio está protegido por
                    derechos de autor. No se permite la reproducción de ningún
                    contenido sin nuestro consentimiento por escrito.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    8. Limitación de Responsabilidad:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    No ofrecemos servicios de juego y la información
                    proporcionada es solo con fines informativos. No somos
                    responsables de pérdidas reales o percibidas. Cualquier
                    problema con proveedores de servicios debe ser dirigido
                    directamente a ellos. No nos responsabilizamos de virus,
                    malware o incidentes similares.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    9. Privacidad y Compartición de Información:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Tomamos medidas para proteger tu información personal, pero
                    no nos responsabilizamos por accesos no autorizados,
                    divulgación no autorizada o eventos similares. Actualmente,
                    no recopilamos información personal, pero si se proporciona,
                    nos reservamos el derecho de utilizarla con fines de
                    marketing y compartirla según sea necesario para protegernos
                    de fraude o acceso malicioso.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight text-lg font-semibold">
                    10. Términos Generales:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Proporcionamos enlaces a sitios externos para tu
                    conveniencia, pero no somos responsables de su contenido ni
                    de las transacciones con ellos. El registro con un socio de
                    apuestas a través de nuestro servicio forma un contrato
                    entre tú y ese socio, sin nuestra responsabilidad en dicho
                    acuerdo.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Drawer;
