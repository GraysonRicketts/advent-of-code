import { Bag, Rule } from './Bag';

function parseInput(input: string): Bag[] {
  const unparsedInput = input
    .split('\n')
    .map((i) => i.trimEnd())
    .map((i) => i.replace('.', ''));

  // light red bags contain 1 bright white bag, 2 muted yellow bags.
  const bags: Bag[] = unparsedInput.map((i) => {
    const splitLine = i.split(' bags contain ');
    const color = splitLine[0];

    if (splitLine[1] === 'no other bags') {
      return { color };
    }

    const unparsedRules = splitLine[1].split(', ');
    const rules = new Map<string, Rule>();
    unparsedRules.forEach((r) => {
      const splitRules = r.split(' ');

      const ruleColor = `${splitRules[1]} ${splitRules[2]}`;
      const count = parseInt(splitRules[0], 10);

      rules.set(ruleColor, { count, bagColor: ruleColor });
    });

    return { color, rules };
  });

  return bags;
}

export default parseInput;
