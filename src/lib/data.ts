export interface Operator {
  id: number;
  name: string;
  img: string;
  rating: number;
  promocode: string;
  urlregistro: string;
  urlbono: string;
  bonotxt: string;
  email: string;
  phone: string;
  license: string;
  apps?: {
    android?: string;
    ios?: string;
    webapp?: string;
    nameandroid?: string;
    nameios?: string;
    nameweb?: string;
  }[];
  payments?: {
    paypal?: string;
    americanexpress?: string;
    mastercard?: string;
    shopify?: string;
    skrill?: string;
    visa?: string;
    litecoin?: string;
    bitcoin?: string;
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
    name: "Ejemplo",
    img: "/available.webp",
    rating: 4.9,
    promocode: "XXXXXX",
    urlregistro: "https://moisesobando.com/",
    urlbono: "https://moisesobando.com/",
    bonotxt: "Bono del 200% en tu primer depósito, hasta 100 USD",
    email: "ayuda@operador.com",
    phone: "+000 00000000",
    license: "Nombre de la licencia",
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
    payments: [
      {
        paypal: "/payments/common/paypal.svg",
        americanexpress: "/payments/common/american-express.svg",
        mastercard: "/payments/common/mastercard.svg",
        skrill: "/payments/common/skrill.svg",
        visa: "/payments/common/visa.svg",
        bitcoin: "/payments/crypto/bitcoin.svg",
      },
    ],
    checklist: [
      {
        check1: "Retiro rápido",
        check2: "Jugadas gratis",
        check3: "Constructor de apuestas",
        check4: "Buenas cuotas o momios",
        check5: "Casino",
      },
    ],
  },
  // {
  //   id: 2,
  //   name: "Ejemplo2",
  //   img: "/available.webp",
  //   rating: 4.5,
  //   promocode: "YYYYYY",
  //   urlregistro: "https://moisesobando.com/",
  //   urlbono: "https://moisesobando.com/",
  //   bonotxt: "Bono del 100% en tu primer depósito, hasta 250 USD",
  //   email: "ayuda@operador.com",
  //   phone: "+000 00000000",
  //   license: "Nombre de la licencia",
  //   apps: [
  //     {
  //       android: "/devices/android.svg",
  //       nameandroid: "Android",
  //       webapp: "/devices/phone.svg",
  //       nameweb: "Aplicación Web",
  //     },
  //   ],
  //   payments: [
  //     {
  //       shopify: "/payments/common/shopify.svg",
  //       skrill: "/payments/common/skrill.svg",
  //       visa: "/payments/common/visa.svg",
  //       americanexpress: "/payments/common/american-express.svg",
  //       litecoin: "/payments/crypto/litecoin.svg",
  //       bitcoin: "/payments/crypto/bitcoin.svg",
  //     },
  //   ],
  //   checklist: [
  //     {
  //       check1: "Buenas cuotas o momios",
  //       check2: "Casino",
  //       check3: "Jugadas gratis",
  //       check4: "Retiro rápido",
  //       check5: "Constructor de apuestas",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Ejemplo3",
  //   img: "/available.webp",
  //   rating: 4.5,
  //   promocode: "OOOOOO",
  //   urlregistro: "https://moisesobando.com/",
  //   urlbono: "https://moisesobando.com/",
  //   bonotxt: "Bono del 80% en tu primer depósito, hasta 100 USD",
  //   email: "ayuda@operador.com",
  //   phone: "+000 00000000",
  //   license: "Nombre de la licencia",
  //   apps: [
  //     {
  //       webapp: "/devices/phone.svg",
  //       nameweb: "Aplicación Web",
  //     },
  //   ],
  //   payments: [
  //     {
  //       paypal: "/payments/common/paypal.svg",
  //       skrill: "/payments/common/skrill.svg",
  //       visa: "/payments/common/visa.svg",
  //       americanexpress: "/payments/common/american-express.svg",
  //       shopify: "/payments/common/shopify.svg",
  //     },
  //   ],
  //   checklist: [
  //     {
  //       check1: "Retiro rápido",
  //       check2: "Jugadas gratis",
  //       check5: "Casino",
  //       check3: "Constructor de apuestas",
  //       check4: "Buenas cuotas o momios",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Ejemplo4",
  //   img: "/available.webp",
  //   rating: 4.5,
  //   promocode: "AAAAAA",
  //   urlregistro: "https://moisesobando.com/",
  //   urlbono: "https://moisesobando.com/",
  //   bonotxt: "Bono del 100% en tu primer depósito, hasta 500 USD",
  //   email: "ayuda@operador.com",
  //   phone: "+000 00000000",
  //   license: "Nombre de la licencia",
  //   apps: [
  //     {
  //       webapp: "/devices/phone.svg",
  //       nameweb: "Aplicación Web",
  //     },
  //   ],
  //   payments: [
  //     {
  //       paypal: "/payments/common/paypal.svg",
  //       mastercard: "/payments/common/mastercard.svg",
  //       skrill: "/payments/common/skrill.svg",
  //       visa: "/payments/common/visa.svg",
  //       americanexpress: "/payments/common/american-express.svg",
  //     },
  //   ],
  //   checklist: [
  //     {
  //       check5: "Casino",
  //       check1: "Retiro rápido",
  //       check3: "Constructor de apuestas",
  //       check2: "Jugadas gratis",
  //       check4: "Buenas cuotas o momios",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Ejemplo5",
  //   img: "/available.webp",
  //   rating: 4.5,
  //   promocode: "MMMMMM",
  //   urlregistro: "https://moisesobando.com/",
  //   urlbono: "https://moisesobando.com/",
  //   bonotxt: "Bono del 200% en tu primer depósito, hasta 250 USD",
  //   email: "ayuda@operador.com",
  //   phone: "+000 00000000",
  //   license: "Nombre de la licencia",
  //   apps: [
  //     {
  //       android: "/devices/android.svg",
  //       nameandroid: "Android",
  //       ios: "/devices/ios.svg",
  //       nameios: "iPhone",
  //       webapp: "/devices/phone.svg",
  //       nameweb: "Aplicación Web",
  //     },
  //   ],
  //   payments: [
  //     {
  //       paypal: "/payments/common/paypal.svg",
  //       americanexpress: "/payments/common/american-express.svg",
  //       mastercard: "/payments/common/mastercard.svg",
  //       shopify: "/payments/common/shopify.svg",
  //       skrill: "/payments/common/skrill.svg",
  //       visa: "/payments/common/visa.svg",
  //     },
  //   ],
  //   checklist: [
  //     {
  //       check1: "Retiro rápido",
  //       check2: "Jugadas gratis",
  //       check3: "Constructor de apuestas",
  //       check4: "Buenas cuotas o momios",
  //       check5: "Casino",
  //     },
  //   ],
  // },
];
