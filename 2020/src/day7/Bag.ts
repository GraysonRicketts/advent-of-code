interface Rule {
  bagColor: string;
  count: number;
}

interface Bag {
  color: string,
  rules?: Map<string, Rule>,
}

export { Bag, Rule };
