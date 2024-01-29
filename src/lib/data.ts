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
    name: "1Xbet",
    pageName: "1xbet",
    img: "/operators/withbg/1xbet.svg",
    rating: 4.9,
    promocode: "1x_1484789",
    urlregistro: "https://affpa.top/L?tag=d_3090539m_97c_&site=3090539&ad=97&r=registration",
    urlbono: "https://affpa.top/L?tag=d_3090539m_97c_&site=3090539&ad=97&r=bonus/rules/1st",
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
    id: 2,
    name: "Rabona",
    pageName: "rabona",
    img: "/operators/withbg/rabona.svg",
    rating: 4.8,
    promocode: "Lunox",
    urlregistro: "https://rbn.servclick1move.com/?mid=95157_714721",
    urlbono: "https://rbn.servclick1move.com/?mid=95157_714737",
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
    id: 3,
    name: "bet O bet",
    pageName: "betobet",
    img: "/operators/withbg/betobet.svg",
    rating: 4.8,
    promocode: "SPORT100",
    urlregistro: "https://go.betobet.online/visit/?bta=37769&nci=6499",
    urlbono: "https://go.betobet.online/visit/?bta=37769&nci=5484",
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
    id: 4,
    name: "Pinnacle",
    pageName: "pinnacle",
    img: "/operators/withbg/pinnacle.svg",
    rating: 4.7,
    promocode: "NO DISPONIBLE",
    urlregistro: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_31512b_18926c_&affid=25020&siteid=31512&adid=18926&c=",
    urlbono: "https://wlpinnacle.adsrv.eacdn.com/C.ashx?btag=a_31512b_18851c_&affid=25020&siteid=31512&adid=18851&c=",
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
];
