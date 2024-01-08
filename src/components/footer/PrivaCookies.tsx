import { useState } from "react";

const PrivaCookies = () => {
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
        Política de privacidad y Cookies
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
                  <h4 className="inline-flex text-xl sm:text-2xl mt-5 font-semibold">
                    Política de privacidad y Cookies
                  </h4>
                  <p className="tracking-tight text-sm font-light mb-5 text-pretty">
                    Última actualización: 10/01/2024
                  </p>
                </div>
                <p className="tracking-tight font-light text-pretty">
                  Esta Política de Privacidad describe nuestras políticas y
                  procedimientos sobre la recopilación, uso y divulgación de
                  información cuando utiliza nuestro servicio y le informa sobre
                  sus derechos de privacidad. Al acceder y utilizar nuestro
                  servicio, usted acepta los términos descritos en esta
                  política.
                </p>
                <h5 className="inline-flex tracking-tight text-lg font-semibold">
                  Datos Recopilados
                </h5>
                <div>
                  <h6 className="inline-flex tracking-tight font-semibold">
                    Datos Personales:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Mientras usa nuestro servicio, podemos solicitarle que nos
                    proporcione cierta información personal identificable que se
                    puede utilizar para contactarlo o identificarlo.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight font-semibold">
                    Datos de Uso:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Los datos de uso se recopilan automáticamente al utilizar el
                    servicio. Los datos de uso pueden incluir información como
                    la dirección de Protocolo de Internet (IP) del dispositivo
                    que utiliza, el tipo de navegador, las páginas de nuestro
                    servicio que visita, la fecha y hora de su visita, el tiempo
                    que pasa en esas páginas, identificadores únicos de
                    dispositivos y otros datos de diagnóstico. Esto para todos
                    los dispositivos.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Tecnologías de Seguimiento y Cookies
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    Utilizamos cookies y tecnologías de seguimiento para
                    rastrear la actividad en nuestro servicio. Además de las
                    cookies necesarias, utilizamos las siguientes:
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight font-semibold">
                    Hotjar:
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Propósito: Analizar la interacción del usuario con el
                    servicio para mejorar la experiencia y la usabilidad del
                    mismo.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight font-semibold">
                    Google Analytics (GA4):
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Propósito: Recopilar información estadística sobre el uso
                    del servicio, como páginas visitadas, tiempo de permanencia
                    y fuentes de tráfico, con el fin de entender y mejorar el
                    rendimiento y la eficacia del servicio.
                  </p>
                </div>
                <div>
                  <h6 className="inline-flex tracking-tight font-semibold">
                    Google Tag Manager (GTM):
                  </h6>
                  <p className="tracking-tight font-light text-pretty">
                    Propósito: Facilitar la gestión e implementación de
                    etiquetas y scripts en el servicio, lo que permite un
                    seguimiento preciso y la recopilación de datos para análisis
                    y mejoras.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Uso de Datos Personales
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    La información recopilada se utiliza para:
                  </p>
                </div>
                <div>
                  <ul className="list-disc list-inside tracking-tight font-light text-pretty">
                    <li>Mantener y mejorar nuestro servicio.</li>
                    <li>
                      Proporcionar noticias, ofertas e información general, a
                      menos que opte por no recibirla.
                    </li>
                    <li>Gestionar solicitudes y consultas.</li>
                    <li>
                      Análisis de datos, identificación de tendencias y mejora
                      continua del servicio.
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Compartir Información
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    Podemos compartir información con proveedores de servicios,
                    afiliados y socios comerciales para mejorar y analizar
                    nuestro servicio. En áreas públicas, la información
                    compartida puede ser vista por otros usuarios.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Retención y Eliminación de Datos
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    Retenemos datos personales el tiempo necesario para los
                    propósitos establecidos en esta Política. Puede solicitar la
                    eliminación de datos personales.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Cumplimiento Legal
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    Bajo ciertas circunstancias, podemos divulgar datos
                    personales si lo exige la ley o para proteger derechos,
                    propiedad o seguridad.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Seguridad de Datos Personales
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    La seguridad no puede garantizarse al 100%, pero tomamos
                    medidas para proteger sus datos de acuerdo con esta
                    Política.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Privacidad de los Niños o menores de edad
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    No dirigimos nuestro servicio a menores de 18 años. Si tiene
                    conocimiento de que un menor nos ha proporcionado datos
                    personales,{" "}
                    <span className="font-semibold">
                      <strong>contáctenos.</strong>
                    </span>
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Enlaces a Otros Sitios Web
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    No tenemos control sobre sitios web de terceros.
                    Recomendamos revisar sus políticas de privacidad.
                  </p>
                </div>
                <div>
                  <h5 className="inline-flex tracking-tight text-lg font-semibold">
                    Cambios a esta Política de Privacidad
                  </h5>
                  <p className="tracking-tight font-light text-pretty">
                    Actualizaremos esta política y notificaremos cambios a
                    través del servicio o correo electrónico antes de que entren
                    en vigencia. Le recomendamos revisar periódicamente esta
                    Política de Privacidad para estar al tanto de cualquier
                    cambio. Si tiene alguna pregunta o inquietud sobre esta
                    Política de Privacidad,{" "}
                    <span className="font-semibold">
                      <strong>contáctenos.</strong>
                    </span>
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

export default PrivaCookies;
