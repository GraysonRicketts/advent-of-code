import { expect } from 'chai';
import { countAnyoneYeses, countEveryoneYeses } from '../../src/day6/index';

describe('day 6', () => {
  describe('#countYeses', () => {
    it('should any anyone with yeses', () => {
      const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
      expect(countAnyoneYeses(input)).to.eql(11);
    });
  });

  describe('#countEveryoneYeses', () => {
    it('should count everyone with yeses', () => {
      const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
      expect(countEveryoneYeses(input)).to.eql(6);
    });
  });
});
