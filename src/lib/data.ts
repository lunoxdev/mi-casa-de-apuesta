export interface Operator {
  id: number;
  name: string;
  img: string;
  rating: number;
  promocode: string;
  urlregistro: string;
  urlbono: string;
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
}

export const operators: Operator[] = [
  {
    id: 1,
    name: "Example",
    img: "operators/withbg/stake.svg",
    rating: 4.9,
    promocode: "XXXXXX",
    urlregistro: "https://moisesobando.com/",
    urlbono: "https://moisesobando.com/",
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
        shopify: "/payments/common/shopify.svg",
        skrill: "/payments/common/skrill.svg",
        visa: "/payments/common/visa.svg",
        litecoin: "/payments/crypto/litecoin.svg",
        bitcoin: "/payments/crypto/bitcoin.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Betano",
    img: "operators/withbg/betano.svg",
    rating: 4.5,
    promocode: "YYYYYY",
    urlregistro: "https://moisesobando.com/",
    urlbono: "https://moisesobando.com/",
    email: "ayuda@operador.com",
    phone: "+000 00000000",
    license: "Nombre de la licencia",
    apps: [
      {
        android: "/devices/android.svg",
        nameandroid: "Android",
        webapp: "/devices/phone.svg",
        nameweb: "Aplicación Web",
      },
    ],
    payments: [
      {
        paypal: "/payments/common/paypal.svg",
        mastercard: "/payments/common/mastercard.svg",
        skrill: "/payments/common/skrill.svg",
        visa: "/payments/common/visa.svg",
        americanexpress: "/payments/common/american-express.svg",
        litecoin: "/payments/crypto/litecoin.svg",
        bitcoin: "/payments/crypto/bitcoin.svg",
      },
    ],
  },
];
