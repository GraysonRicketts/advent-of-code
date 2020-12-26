import { expect } from 'chai';
import { calculateHighSeatId } from '../../src/day5';

describe('day5', () => {
  describe('#calculateHighSeatId', () => {
    it('Should return highest seat id', () => {
      const input = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;
      const highest = calculateHighSeatId(input);
      expect(highest).to.eql(820);
    });
  });
});
