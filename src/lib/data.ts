export interface Operator {
id: number;
name: string;
img: string;
rating: number;
promocode: string;
urlregistro: string;
urlbono: string;
bonotxt: string;
license: string;
payfront: string;
pageName: string;
urlpromo: string;
apps?: {
  android?: string;
  ios?: string;
  webapp?: string;
  nameandroid?: string;
  nameios?: string;
  nameweb?: string;
}[];
checklist?: {
  check1?: string;
  check2?: string;
  check3?: string;
  check4?: string;
  check5?: string;
}[];
}

export const operators: Operator[] = [
{
    id: 1,
    name: "bet O bet",
    pageName: "betobet",
    img: "/operators/withbg/betobet.svg",
    rating: 4.9,
    promocode: "LUNOXVIP",
    urlregistro: "https://go.betobet.online/visit/?bta=37769&nci=6499",
    urlbono: "https://go.betobet.online/visit/?bta=37769&nci=5484",
    urlpromo: "https://go.betobet.online/visit/?bta=37769&nci=5654",
    bonotxt: "Bono Bienvenida del 100% hasta 100 USD",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/betobet-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Soporte al cliente 24/7",
        check2: "Tasas de pago competitivas",
        check3: "Métodos de pago seguros y rápidos",
        check4: "Variedad de eventos deportivos",
        check5: "Bonos y promociones atractivos",
      },
    ],
  },
  {
    id: 2,
    name: "FEZbet",
    pageName: "fezbet",
    img: "/operators/withbg/fezbet.svg",
    rating: 4.8,
    promocode: "NO DISPONIBLE",
    urlregistro: "https://awbba.zetcasino.com/redirect.aspx?pid=1374329&bid=6781",
    urlbono: "https://awbba.zetcasino.com/redirect.aspx?pid=1374329&bid=7426",
    urlpromo: "https://awbba.zetcasino.com/redirect.aspx?pid=1374329&bid=6781",
    bonotxt: "Bono deportivo del 100% hasta 100 USD",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/fezbet.svg",
    apps: [
      {
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Momios competitivos",
        check2: "Interfaz de usuario fácil de usar",
        check3: "Variedad de métodos de pagos",
        check4: "Atención al cliente 24/7",
        check5: "Bonos y promociones atractivos",
      },
    ],
  },
  {
    id: 3,
    name: "Rabona",
    pageName: "rabona",
    img: "/operators/withbg/rabona.svg",
    rating: 4.7,
    promocode: "Lunox",
    urlregistro: "https://rbn.servclick1move.com/?mid=95157_714721",
    urlbono: "https://rbn.servclick1move.com/?mid=95157_714737",
    urlpromo: "https://rbn.servclick1move.com/?mid=95157_718469",
    bonotxt: "Bono del 100% en tu primer depósito hasta 100 USD",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/rabona-pay-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Interfaz moderna y fácil de usar",
        check2: "Gran variedad de depósitos y retiros",
        check3: "Amplia gama de deportes",
        check4: "Casino en vivo",
        check5: "Exclusivos beneficios para VIP",
      },
    ],
  },
  {
    id: 4,
    name: "Pinnacle",
    pageName: "pinnacle",
    img: "/operators/withbg/pinnacle.svg",
    rating: 4.6,
    promocode: "NO DISPONIBLE",
    urlregistro: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_31512b_18926c_&affid=25020&siteid=31512&adid=18926&c=",
    urlbono: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_31512b_18851c_&affid=25020&siteid=31512&adid=18851&c=",
    urlpromo: "",
    bonotxt: "Cuotas más altas, valor real, más dinero",
    license: "Licencia de Curazao, Malta, Canadá, Italia y Suecia",
    payfront: "/payments/frontend/pinnacle-pay-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Las mejores Cuotas o momios",
        check2: "Pionera en apuestas de esports",
        check3: "Excelente diseño web",
        check4: "Depósito y retiro rápidos",
        check5: "Apuestas en vivo",
      },
    ],
  },
  {
    id: 5,
    name: "Sportsbet",
    pageName: "sportsbet",
    img: "/operators/withbg/sportsbet.svg",
    rating: 4.5,
    promocode: "NO DISPONIBLE",
    urlregistro: "https://aff.partners.io/visit/?bta=43235&nci=6484",
    urlbono: "https://aff.partners.io/visit/?bta=43235&nci=7335",
    urlpromo: "https://aff.partners.io/visit/?bta=43235&nci=6471",
    bonotxt: "Promociones en vivo que cambian cada 2 horas",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/sportsbet-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Apuestas con criptomonedas",
        check2: "Mejores cuotas en criptomonedas",
        check3: "Diseño moderno y fácil de usar",
        check4: "Variedad de promociones",
        check5: "Retiros rápidos",
      },
    ],
  },
  {
    id: 6,
    name: "Betway",
    pageName: "betway",
    img: "/operators/withbg/betway.svg",
    rating: 4.4,
    promocode: "NO DISPONIBLE",
    urlregistro: "https://betway.com/bwp/latam?s=bw228596&a=AFF4142061113668931&utm_source=228596&utm_medium=Affiliate&utm_campaign=AFF4142061113668931",
    urlbono: "https://betway.com/bwp/latam-sports?s=bw228596&a=AFF4142058410187934&utm_source=228596&utm_medium=Affiliate&utm_campaign=AFF4142058410187934",
    urlpromo: "https://betway.com/bwp/latam-sports?s=bw228596&a=AFF4142068617564479&utm_source=228596&utm_medium=Affiliate&utm_campaign=AFF4142068617564479",
    bonotxt: "Duplica el primer depósito hasta 75 USD",
    license: "Licencia de Malta",
    payfront: "/payments/frontend/betway-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Cuotas competitivas",
        check2: "Ofrece bonos y promociones atractivas",
        check3: "Transmisión en vivo de eventos deportivos",
        check4: "Cash Out",
        check5: "App móvil disponible para Android e iOS",
      },
    ],
  },
  {
    id: 7,
    name: "1Xbet",
    pageName: "1xbet",
    img: "/operators/withbg/1xbet.svg",
    rating: 4.3,
    promocode: "1x_1484789",
    urlregistro: "https://affpa.top/L?tag=d_3090539m_97c_&site=3090539&ad=97&r=registration",
    urlbono: "https://affpa.top/L?tag=d_3090539m_97c_&site=3090539&ad=97&r=bonus/rules/1st",
    urlpromo: "https://affpa.top/L?tag=d_3090539m_97c_&site=3090539&ad=97&r=bonus/",
    bonotxt: "Bono del 100% hasta 100 USD en tu primer depósito",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/1Xbet-pay-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Retiro rápido",
        check2: "Trasmisión en vivo",
        check3: "Constructor de apuestas",
        check4: "Buenas cuotas o momios",
        check5: "TOTO-15 y TOTO",
      },
    ],
  },
  {
    id: 8,
    name: "BetWinner",
    pageName: "betwinner",
    img: "/operators/withbg/betwinner.svg",
    rating: 4.2,
    promocode: "LUNOXVIP",
    urlregistro: "https://bwredir.com/29y1?p=%2Fregistration%2F",
    urlbono: "https://bwredir.com/29y1?p=%2Fbonus%2Frules",
    urlpromo: "https://bwredir.com/29y1?p=%2Fbonus%2Frules",
    bonotxt: "Bonificación del 100% con tu primer depósito hasta 100 USD",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/betwinner-front.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Ofrece estadísticas y resultados",
        check4: "Variedad de bonos y promociones",
        check3: "Constructor de Apuestas",
        check2: "Disponen de Cash Out",
        check5: "Apuestas en directo y multidirecto",
      },
    ],
  },
  {
    id: 9,
    name: "BC.GAME",
    pageName: "bcgame",
    img: "/operators/withbg/bc-game.svg",
    rating: 4.1,
    promocode: "lunoxvip",
    urlregistro: "https://bc.game/i-lunoxvip-n/",
    urlbono: "https://bc.game/i-lunoxvip-n/",
    urlpromo: "https://bc.game/i-lunoxvip-n/",
    bonotxt: "Bono de igualación de depósito de 4 recompensas",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/bc-game.svg",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        ios: "/devices/ios.svg",
        nameios: "iPhone",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Variedad de criptomonedas",
        check2: "Excelente interfaz de usuario y gráficos",
        check3: "Tiene una comunidad activa de jugadores",
        check4: "Retiros y depósitos instantáneos",
        check5: "Amplia variedad de juegos deportivos",
      },
    ],
  },
  {
    id: 10,
    name: "Stake",
    pageName: "stake",
    img: "/operators/withbg/stake.svg",
    rating: 4.1,
    promocode: "Lunox",
    urlregistro: "https://stake.com/?c=RmJRJH9W",
    urlbono: "https://stake.com/?c=RmJRJH9W",
    urlpromo: "https://stake.com/?c=J0mYOFPm",
    bonotxt: "Recibe el bono de bienvenida usando el código: Lunox",
    license: "Licencia de Curazao",
    payfront: "/payments/frontend/stake-front.svg",
    apps: [
      {
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    checklist: [
      {
        check1: "Ingresos pasivos",
        check2: "Variedad de deportes y mercados",
        check3: "Diversidad de pagos con criptomonedas",
        check4: "Plataforma es fácil de usar y navegar",
        check5: "Se puede compra criptomonedas con MoonPay",
      },
    ],
  },
];
