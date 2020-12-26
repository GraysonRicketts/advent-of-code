import { expect } from 'chai';
import { Bag, Rule } from '../../src/day7/Bag';

import createBagGraph from '../../src/day7/BagGraph';

describe('day 7 Bag Graph', () => {
  describe('#createBagGraph', () => {
    it('should create graph', () => {
      // muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
      const yellowRule = new Map<string, Rule>();
      yellowRule.set('shiny gold', { bagColor: 'shiny gold', count: 2 });
      yellowRule.set('faded blue', { bagColor: 'faded blue', count: 9 });

      // shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
      const goldrule = new Map<string, Rule>();
      goldrule.set('dark olive', { bagColor: 'dark olive', count: 1 });
      goldrule.set('vibrant plum', { bagColor: 'vibrant plum', count: 2 });

      // vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
      const plumRule = new Map<string, Rule>();
      plumRule.set('faded blue', { bagColor: 'faded blue', count: 5 });
      plumRule.set('dotted black', { bagColor: 'dotted black', count: 6 });

      // faded blue bags contain no other bags.
      // dotted black bags contain no other bags.

      const bags: Bag[] = [
        { color: 'muted yellow', rules: yellowRule },
        { color: 'shiny gold', rules: goldrule },
        { color: 'vibrant plum', rules: plumRule },
        { color: 'faded blue' },
        { color: 'dotted black' },
      ];

      const graph = createBagGraph(bags);

      expect(graph.get('dotted black')?.containedIn).to.eql(['vibrant plum']);
      expect(graph.get('faded blue')?.containedIn).to.eql(['muted yellow', 'vibrant plum']);
      expect(graph.get('vibrant plum')?.containedIn).to.eql(['shiny gold']);
      expect(graph.get('shiny gold')?.containedIn).to.eql(['muted yellow']);
      expect(graph.get('muted yellow')?.containedIn).to.eql(undefined);
    });
  });
});
