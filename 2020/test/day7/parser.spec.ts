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

    it('should work with expected input', () => {
      const rule = 'striped violet bags contain 2 dotted olive bags, 2 dotted red bags, 4 shiny gold bags.';

      const output = parseInput(rule);
      expect(output[0].color).to.eql('striped violet');
      expect(output[0].rules?.has('dotted olive'));
      expect(output[0].rules?.get('dotted olive')).to.eql({ count: 2, bagColor: 'dotted olive' });
      expect(output[0].rules?.has('dotted red'));
      expect(output[0].rules?.get('dotted red')).to.eql({ count: 2, bagColor: 'dotted red' });
      expect(output[0].rules?.has('shiny gold'));
      expect(output[0].rules?.get('shiny gold')).to.eql({ count: 4, bagColor: 'shiny gold' });
    });
  });
});
