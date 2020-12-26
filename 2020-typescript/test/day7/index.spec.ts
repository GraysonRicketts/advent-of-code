import { expect } from 'chai';
import { countContainsBagColor, countNumberOfNestBages } from '../../src/day7/index';

describe('day 7 index', () => {
  describe('#countContainsBagColor', () => {
    it('should count number of colors that can contain another', () => {
      const rules = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

      expect(countContainsBagColor(rules, 'shiny gold')).to.eql(4);
    });

    it('should not double count', () => {
      const rules = `light red bags contain 1 black dotted bag.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

      expect(countContainsBagColor(rules, 'shiny gold')).to.eql(3);
    });
  });

  describe('#countNumberOfNestBages', () => {
    it('should count nested bags', () => {
      const rules = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

      const output = countNumberOfNestBages(rules, 'shiny gold');
      expect(output).to.eql(32);
    });

    it('should count deep nested bags', () => {
      const rules = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

      const output = countNumberOfNestBages(rules, 'shiny gold');
      expect(output).to.eql(126);
    });
  });
});
