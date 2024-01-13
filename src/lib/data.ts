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
  }
  
  export const operators: Operator[] = [
    {
      id: 1,
      name: "Stake",
      img: "operators/withbg/stake.svg",
      rating: 3.5,
      promocode: "XXXXXX",
      urlregistro: "https://moisesobando.com/",
      urlbono: "https://moisesobando.com/",
      email: "ayuda@operador.com",
      phone: "+000 00000000",
      license: "Nombre de la licencia"
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
      license: "Nombre de la licencia"
    },
  ];