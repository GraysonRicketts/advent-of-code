import { expect } from 'chai';
import parseInput from '../../src/day7/parser';

describe('day 6 parser', () => {
  describe('#parseInput', () => {
    it('should break into bags and rules', () => {
      const rules = 'light red bags contain 1 bright white bag, 2 muted yellow bags.';

      const output = parseInput(rules);
      expect(output[0].color).to.eql('light red');
      expect(output[0].rules?.has('bright wite'));
      expect(output[0].rules?.get('bright white')).to.eql({ count: 1, bagColor: 'bright white' });
    });
    it('should handle multiple lines', () => {
      const rules = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dotted black bags contain no other bags.`;

      const output = parseInput(rules);
      expect(output[0].color).to.eql('light red');
      expect(output[0].rules?.has('bright wite'));
      expect(output[0].rules?.get('bright white')).to.eql({ count: 1, bagColor: 'bright white' });
      expect(output[1].color).to.eql('dotted black');
      expect(output[1].rules).to.eql(undefined);
    });

    it('should parse if contains no other bags', () => {
      const rules = 'dotted black bags contain no other bags.';

      const output = parseInput(rules);
      expect(output[0].color).to.eql('dotted black');
      expect(output[0].rules).to.eql(undefined);
    });
  });
});
